# Docwire Website

This repository contains the source code for the Docwire website. It is built to be easily editable directly through GitHub.

## 🚀 How to Update the Site

You do not need to install any software on your computer. You can edit files directly in your web browser.
1.  **Edit**: Navigate to the file you want to change on GitHub and click the **Pencil icon** (Edit this file).
2.  **Save**: Scroll to the bottom, add a short description of your change, and click **Commit changes**.
3.  **Deploy**: The website will automatically rebuild and update within a few minutes. You can check the progress in the **Actions** tab.

---

## 📝 Editing Content

### 1. Homepage Text
The homepage is made up of several sections. You can find the text for these sections in the `src/containers` folder.

*   **Hero (Top Section)**: `src/containers/header/home/HomeHeader.jsx`
*   **"Have you ever wanted to..."**: `src/containers/components/home/HomeHaveYouEver.jsx`
*   **"Unlock the Power"**: `src/containers/components/home/UnlockThePower.jsx`
*   **Wings Section**: `src/containers/components/home/WingsSection.jsx`
*   **Info/Formats**: `src/containers/components/home/InfoSection.jsx`
*   **Call to Action (Bottom)**: `src/containers/CTA/CTA.jsx`

**Tip:** Look for the white text inside the code. Be careful not to delete code symbols like `<p>`, `<h3>`, `</div>`, or `{`.

### 2. Blog Posts
Blog posts are located in the `blog/` folder.

To add a new post:
1.  Create a new file in the `blog/` folder.
2.  Name it starting with the date, e.g., `2024-01-01-my-new-post.md`.
3.  Paste the following template at the top of the file:

    ```markdown
    ---
    title: My New Post Title
    authors: ferid
    tags: [news, update]
    ---

    Write your introduction here.

    <!--truncate-->

    Write the rest of your post here.
    ```

#### Adding Images & Videos
*   **Images**:
    1.  Upload the image to the `static/img` folder.
    2.  Use standard Markdown syntax to reference it:
    ```markdown
    ![Description](/img/your-image-name.jpg)
    ```
*   **YouTube**: To make the video responsive (adaptable to mobile screens), use the snippet below. Replace `VIDEO_ID` with the ID from your YouTube link.
    ```jsx
    <iframe src="https://www.youtube.com/embed/VIDEO_ID" style={{width: '100%', aspectRatio: '16/9'}} allowFullScreen frameBorder="0"></iframe>
    ```

### 3. Adding Showcases
Showcases are managed in a data file.

1.  Go to `src/data/showcaseData.js`.
2.  You will see a list of items. To add a new one, copy an existing block (everything between `{` and `},`) and paste it as a new item.
3.  Update the text fields (`companyName`, `whatIs`, etc.).
4.  **Images**: Upload new images to `src/assets` and reference the filename in the `image` field.

### 4. Contact Form
The contact form uses **EmailJS**.

If you need to change the email configuration (Service ID, Template ID, or Public Key):
1.  Go to `src/containers/components/contactUs/Form.jsx`.
2.  Look for the `emailjs.sendForm` function (around line 24).
3.  Update the IDs inside the quotes.

---

## ⚙️ Local Development (Optional)

If you are a developer and want to run the site on your computer:

1.  Install Node.js.
2.  Run `npm install` to install dependencies.
3.  Run `npm start` to start the local server.
4.  The site will open at `http://localhost:3000`.
