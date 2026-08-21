---
title: Building Unix-Style C++ Processing Pipelines Using the Pipe Operator
tags: ["cpp", "pipeline", "parsing", "sdk"]
---

**By Reeshabh Choudhary, DocWire.io**

**Summary:** How to build a C++ processing pipeline using the pipe operator (`|`). To build a C++ processing pipeline using the pipe operator, you must define a base chain element class with virtual processing methods and overload the bitwise OR operator to couple these elements together. This object-oriented approach ensures that the output of one processing node seamlessly feeds into the next, closely mimicking the behavior of Unix terminal pipes.

<!-- truncate -->

## Why Read This Article?

If you have ever used a Unix terminal, you are likely familiar with the elegance of the pipe operator (`|`)—it takes the output of one command and seamlessly feeds it as the input to the next. In C++, we can replicate this exact pattern to build data processing pipelines. By overloading the `|` operator, developers can transform highly coupled, nested function calls into a clean, declarative conveyor belt of operations. In this article, we will explore the engineering behind how DocWire implements this pattern to process over 100+ file formats cleanly and efficiently.

DocWire is a data extraction tool, developed in Modern C++, that converts text from various file formats into searchable and editable data. Using the Tesseract OCR engine, DocWire digitizes text from image types, MS Office files, emails, or email attachments. DocWire outputs data to plain text that may be transmitted for further processing.

One aspect of the Docwire SDK is its ability to process documents locally (or make an OpenAI API call) through a series of customizable steps that can be added or removed as required. For example, consider the following code:

```cpp
std::filesystem::path("data_processing_definition.doc") | content_type::detector{} | office_formats_parser{} | PlainTextExporter() | out_stream;
```

In the above pipeline processing, a document is selected, its content type is detected, the required parser is applied, and the text output is exported. Additional steps can be added to the pipeline, for example:

```cpp
std::filesystem::path("data_processing_definition.doc") | content_type::detector{} | office_formats_parser{} | PlainTextExporter() | local_ai::model_chain_element("Translate to spanish:\n\n") | out_stream;
```

With this addition, a local model translates the document's text to Spanish and streams the output. The necessary customizations can be applied such that the output of the previous step acts as an input for the next, precisely how a pipeline chain functions. In software terms, this emulates how the Unix pipe operator `|` works in the terminal.

## Defining Core Entities and Message Types

Before examining the exact implementation, let us establish the intuition for this structure. We are building a processing pipeline. The element to be processed can be of various types, as Docwire supports more than 100 file formats. For brevity, we use a simple example to focus on how the pipe chaining operates.

We start by defining the entity we want to process:

```cpp
/**
 * A simple Message struct or `class`
 */
struct Message {
  virtual ~Message() = default;
};

struct StartMessage : Message {};
struct TextMessage : Message {
  std::string text;
  TextMessage(std::string t) : text(std::move(t)) {}
};
struct EndMessage : Message {};
```

We have defined a base entity and various types of such entities. Based on the types, the parsing steps will decide how to act.

:::note
In C++, classes are equivalent to structs aside from default visibility. The struct approach is used here to keep the implementation minimal.
:::

## Structuring Pipeline Callbacks and Chain Elements

The intended behavior is as follows: a message entity is passed around. At each stage of processing in the pipeline, based on the processing result, the program decides what output to forward to the next step, or whether to propagate something upstream (such as errors or cancellations).

First, we define the structure to capture these behaviors, and then we define the structure for chain elements. This base entity ensures the necessary behaviors are inherited by different chain elements while parsing.

```cpp
// Whether to continue or not
enum class Continue { Yes, No };

// Aliases
using Msg = std::shared_ptr<Message>;
using Callback = std::function<Continue(Msg)>;

// Whether to forward a message or bubble out
struct MessageCallbacks {
  Callback front;
  Callback back;
};

// Structure of a basic pipeline chain element
struct ChainElement {
  // the main processing function which will be custom implemented by respective Chain Elements
  virtual Continue process(Msg msg, MessageCallbacks next) = 0;
  // If yes: element consumes message and propagates
  virtual bool is_generator() const { return false; }
  // If yes: element consumes message but does not propagate
  virtual bool is_leaf() const { return false; }
  // Destructor
  virtual ~ChainElement() = default;
};
```

## Creating Custom Parsing, Filtering, and Exporting Nodes

Next, we define different parsing chain elements:

```cpp
struct SimpleParser : ChainElement {

  bool is_generator() const override { return true; }
  Continue process(Msg msg, MessageCallbacks next) override {
    if (dynamic_cast<StartMessage *>(msg.get())) {
      std::cout << "Parser reading file...\n";

      next.front(std::make_shared<TextMessage>("Hello "));
      next.front(std::make_shared<TextMessage>("DocWire "));
      next.front(std::make_shared<TextMessage>("Pipeline!"));
      next.front(std::make_shared<EndMessage>());
      return Continue::Yes;
    }
    return next.front(msg);
  }
};

struct TextFilter : ChainElement {
  bool is_generator() const override { return false; }
  Continue process(Msg msg, MessageCallbacks next) override {
    if (!dynamic_cast<TextMessage *>(msg.get()))
      return Continue::No;
    return next.front(msg);
  }
};

struct TextExporter : ChainElement {
  bool is_leaf() const override { return true; }
  Continue process(Msg msg, MessageCallbacks) override {
    if (auto t = dynamic_cast<TextMessage *>(msg.get()))
      std::cout << "Exported: " << t->text << "\n";
    return Continue::Yes;
  }
};
```

:::note
`TextExporter` is a leaf node in this chain; it does not propagate the message forward. It acts as the final step of the pipeline processing.
:::

:::tip Developer Note
For the sake of brevity and clarity, this example relies on `dynamic_cast` for message type checking. In a highly optimized production environment, this could be refactored using `std::variant` and `std::visit`, or a custom type-tagging system to avoid the overhead of Run-Time Type Information (RTTI).
:::

## Managing Object Ownership with a Reference Template

One remaining requirement is how to chain the pipeline through the `|` operator, specifically whether we use references of elements in the processing chain or take ownership of them.

```cpp
/**
 * A Class template to own or borrow references
 */
template <typename T> class ref_or_owned {
  std::shared_ptr<T> owned;
  T *ref = nullptr;

  // move ownership of a heap object into owned,
  // and we store a raw pointer alias (ref) for fast, uniform access.
public:
  // reference
  ref_or_owned(T &t) : ref(&t) {}

  // owned
  ref_or_owned(std::shared_ptr<T> t) : owned(std::move(t)), ref(owned.get()) {}

  T &get() { return *ref; }
  const T &get() const { return *ref; }
};
```

In C++, objects can come from different places:

**Example 1: Owned Objects**

```cpp
auto parser = std::make_shared<SimpleParser>();
```

This means the program is responsible for keeping the object alive. Multiple parts of the program can safely share it.

**Example 2: Borrowed Objects**

```cpp
SimpleParser parser;
```

The object lives elsewhere, and the pipeline is simply borrowing it.

Our pipeline must support both cases. The helper class template `ref_or_owned` manages objects regardless of whether they are borrowed or owned. For a borrowed object, it stores a reference, and for an owned object, it takes ownership and keeps it alive.

:::tip Developer Note
This implementation uses `std::shared_ptr` for both message passing and chain elements to maximize flexibility in a shared ownership model. If strict zero-cost abstraction is required, developers could adapt this pattern to utilize `std::unique_ptr` where exclusive ownership is guaranteed.
:::

## Coupling Elements and Overloading the Pipe Operator in C++

We define the structure for a basic parsing engine that inherits the properties of a `ChainElement`. Its purpose is to couple two chain elements: `lhs` (left-side element of the processing chain) and `rhs` (right-side element).

For example, `parser 1 | parser 2` means that the output of `parser 1` will be fed to `parser 2` for further processing.

```cpp
// Shared object pointer
using Element = std::shared_ptr<ChainElement>;

// Basic Parsing engine
struct ParsingChain : ChainElement {
  // should handle elements whether borrowed or owned
  ref_or_owned<ChainElement> lhs;
  ref_or_owned<ChainElement> rhs;

  // Constructors
  ParsingChain(Element a, Element b) : lhs(std::move(a)), rhs(std::move(b)) {}
  ParsingChain(ChainElement &a, ChainElement &b) : lhs(a), rhs(b) {}
  ParsingChain(ref_or_owned<ChainElement> a, ref_or_owned<ChainElement> b)
      : lhs(a), rhs(b) {}

  bool is_generator() const override { return lhs.get().is_generator(); }
  bool is_leaf() const override { return rhs.get().is_leaf(); }

  // Processes the `msg` arriving at the chain, and passes it to `lhs`.
  // When `lhs` wants to propagate the message, it redirects to `rhs`.
  Continue process(Msg msg, MessageCallbacks cb) override {
    MessageCallbacks lhs_cb{
      // front of lhs → rhs
      [&](Msg m) { return rhs.get().process(m, cb); },
      // back of lhs → back of chain
      cb.back
    };
    return lhs.get().process(msg, lhs_cb);
  }
};
```

Beyond handling chain elements in its constructor, this structure facilitates the processing and routing of elements from one stage to another.

We then make use of the `|` operator to perform the chaining and execute the pipeline once it is complete:

```cpp
Element operator|(Element a, Element b) {
  return std::make_shared<ParsingChain>(a, b);
}

Element operator|(ChainElement &a, ChainElement &b) {
  return std::make_shared<ParsingChain>(a, b);
}

ParsingChain operator|(ref_or_owned<ChainElement> a,
                       ref_or_owned<ChainElement> b) {
  ParsingChain chain{a, b};

  if (chain.is_generator() && chain.is_leaf()) {
    chain.process(std::make_shared<StartMessage>(),
                  MessageCallbacks{[](Msg) { return Continue::Yes; },
                                   [](Msg) { return Continue::Yes; }});
  }

  return chain;
}
```

The third overload of the `|` operator checks if the pipeline has both generator and leaf nodes. If affirmative, it automatically starts execution.

## Executing the C++ Pipeline Chain

The implementation can be tested via the following program. The actual Docwire implementation of this feature can be found in the Docwire source repository under the `src/parsing_chain.h` and `src/parsing_chain.cpp` files.

## A Note on Concurrency

One of the hidden benefits of this message-passing architecture is how naturally it lends itself to multithreading. Because each node operates independently on the messages it receives, this pattern lays the groundwork to run individual elements on separate threads, passing messages via concurrent, thread-safe queues.

<iframe
  src="https://tally.so/embed/0QjA2Z?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
  width="100%"
  height="300"
  frameBorder={0}
  marginHeight={0}
  marginWidth={0}
  title="DocWire Engineering Updates"
/>
