import "./homehaveyouever.css";
import React from "react";
import Graphic from '../../../assets/Hero graphics-p-1600.png'

function HomeHaveYouEver() {
    return (
            <div className="docwire__haveyouever-section section">
                <h2 className="docwire__haveyouever-title">Have you ever wanted to:</h2>
                {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                <ul role="list">
                    <li className="text-lead">Extract text data from images and scanned documents without the need for
                        manual input?
                    </li>
                    <li className="text-lead">Automatically parse through and extract important data from incoming
                        emails,
                        such as customer information or order details?
                    </li>
                    <li className="text-lead">Parse through a large amount of documents and extract specific data
                        points,
                        such as dates, names, or product numbers, with ease?
                    </li>
                    <li className="text-lead">Utilize the OCR technology to recognize and extract text from various
                        sources,
                        including images, PDFs, and scanned documents?
                    </li>
                    <li className="text-lead">Integrate a data extraction SDK into your workflow to streamline data
                        extraction processes and increase efficiency for your team?
                    </li>
                </ul>
                <p className="docwire__haveyouever-text">
                    Our cutting-edge data extraction SDK offers advanced capabilities for extracting text and data from
                    a wide range of sources, including images, PDFs, emails, and iWork files.
                    With powerful OCR technology and advanced document parsing features, our software is optimized
                    for fast and accurate data extraction and document parsing. Whether you need to extract data from
                    invoices,
                    forms, or any other document, our data extraction SDK will revolutionize the way you extract and
                    manage data.
                    Say goodbye to manual input and hello to increased productivity and efficiency
                    for your team with our data extraction solution.
                </p>
                <img src={Graphic} alt="Text extraction platforms"/>
            </div>
    )

}

export default HomeHaveYouEver;