import "./unlockthepower.css";
import React from "react";
import { BsLightning  } from "react-icons/bs";
function UnlockThePower() {
    return (
            <div className="docwire__unlockthepower-content section">
                <p className="docwire__unlockthepower-content_subheader text-lead">
                    Bespoke Software
                </p>
                <h2 className="docwire__unlockthepower-content_header">
                    Unlock the Power of Docwire SDK
                </h2>
                <p className="docwire__unlockthepower-content_section text-lead">
                    Dealing with unstructured data can be a real hassle, but with Docwire SDK software, you can
                    easily extract text from a variety of file formats. Our powerful C++ library enables lightning-fast text
                    extraction from docx files, PDFs, and even pst/ost files. Our software is not only easy to use but also
                    quick to deploy, saving you time and hassle. Whether you're dealing with legal documents, financial
                    statements, or any other type of unstructured data, Docwire SDK has got you covered. Try it today and
                    experience the power of efficient and accurate text extraction.
                </p>
                <div className="docwire__unlockthepower-content_infocard_section">
                    <div className="docwire__unlockthepower-content_infocard_single">
                        <div className="docwire__unlockthepower-content_infocard_content card">
                            <BsLightning className="lightning"/>
                            <h3 className="infocard_header">Speedy onboarding</h3>
                            <p className="infocard_paragraph">
                                Dodge the learning curve and test your idea as soon as possible.
                            </p>
                        </div>
                    </div>
                    <div className="docwire__unlockthepower-content_infocard_single">
                        <div className="docwire__unlockthepower-content_infocard_content card">
                            <BsLightning className="lightning"/>
                            <h3 className="infocard_header">Frictionless project management</h3>
                            <p className="infocard_paragraph">
                                20+ years of project management helps you swerve every pitfall in the book.
                            </p>
                        </div>
                    </div>
                    <div className="docwire__unlockthepower-content_infocard_single">
                        <div className="docwire__unlockthepower-content_infocard_content card">
                            <BsLightning className="lightning"/>
                            <h3 className="infocard_header">Tech support</h3>
                            <p className="infocard_paragraph">
                                You didn’t think we’d leave you hanging, did you? We’re here when you need us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )

}

export default UnlockThePower;