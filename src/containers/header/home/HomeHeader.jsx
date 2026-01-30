import './homeheader.css';
import React from "react";
import MailImage from '../../../assets/slanted-mail-p-800.png'

function HomeHeader() {
    return(
            <div className='docwire__header docwire__header-software section'>
                <div className="docwire__header-software-content">
                    <h1 className="docwire__header-software-content_header">
                        DocWire SDK: Award-winning modern data processing in C++20
                    </h1>
                    <div className="docwire__header-software-content_text">
                        <p>
                            DocWire is a powerful data extraction tool that converts text from nearly all known file formats into searchable
                            and editable data. Powered by Tesseract OCR engine, DocWire is a solution for digitizing text from many image types,
                            MS Office files, e-mails or e-mail attachments.
                            DocWire outputs data to plain text that may be transmitted for further processing.
                        </p>
                    </div>
                </div>
                <div className="docwire__header-software-content">
                    <img src={MailImage}  alt="Slanted mail"/>
                </div>
            </div>
    )
}

export default HomeHeader;