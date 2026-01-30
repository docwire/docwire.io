import './supportedFormats.css';
import React from "react";
import {
    BsFiletypeHtml, BsFiletypePdf, BsFiletypeXml, BsFiletypePpt,
    BsFiletypeXls, BsFiletypeDoc, BsFileEarmark, BsFileEarmarkText,
    BsFileEarmarkSlides, BsFileEarmarkRichtext, BsEnvelopePaper, BsApple
} from "react-icons/bs";

const formats = [
    "HTML", "EML", "PDF", "ODFXML", "iWork", "OOXML", "ODT",
    "ODF", "PRF", "PPT", "XLSB", "DOC", "XLS", "PAGES", "KEYNOTE"
];

const getIcon = (format) => {
    switch (format) {
        case "HTML": return <BsFiletypeHtml />;
        case "EML": return <BsEnvelopePaper />;
        case "PDF": return <BsFiletypePdf />;
        case "ODFXML":
        case "OOXML": return <BsFiletypeXml />;
        case "iWork": return <BsApple />;
        case "ODT": return <BsFileEarmarkText />;
        case "ODF":
        case "PRF": return <BsFileEarmark />;
        case "PPT": return <BsFiletypePpt />;
        case "XLSB":
        case "XLS": return <BsFiletypeXls />;
        case "DOC": return <BsFiletypeDoc />;
        case "PAGES": return <BsFileEarmarkRichtext />;
        case "KEYNOTE": return <BsFileEarmarkSlides />;
        default: return <BsFileEarmark />;
    }
};

function SupportedFormats() {
    return (
            <div className="docwire__supported-formats-container section">
                <div className="docwire__formats-grid">
                    {formats.map((format, index) => (
                        <div key={index} className="docwire__format-item card">
                            <div className="docwire__format-icon">
                                {getIcon(format)}
                            </div>
                            <h4 className="docwire__format-name">{format}</h4>
                        </div>
                    ))}
                </div>
            </div>
    )

}

export default SupportedFormats;
