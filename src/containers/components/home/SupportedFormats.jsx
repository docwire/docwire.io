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
    const size = 32;
    const color = "#555"; // Neutral gray, or use your brand color
    const props = { size, color };

    switch (format) {
        case "HTML": return <BsFiletypeHtml {...props} />;
        case "EML": return <BsEnvelopePaper {...props} />;
        case "PDF": return <BsFiletypePdf {...props} />;
        case "ODFXML":
        case "OOXML": return <BsFiletypeXml {...props} />;
        case "iWork": return <BsApple {...props} />;
        case "ODT": return <BsFileEarmarkText {...props} />;
        case "ODF":
        case "PRF": return <BsFileEarmark {...props} />;
        case "PPT": return <BsFiletypePpt {...props} />;
        case "XLSB":
        case "XLS": return <BsFiletypeXls {...props} />;
        case "DOC": return <BsFiletypeDoc {...props} />;
        case "PAGES": return <BsFileEarmarkRichtext {...props} />;
        case "KEYNOTE": return <BsFileEarmarkSlides {...props} />;
        default: return <BsFileEarmark {...props} />;
    }
};

function SupportedFormats() {
    return (
        <div className='docwire__supported-formats'>
            <div className="docwire__formats-grid">
                {formats.map((format, index) => (
                    <div key={index} className="docwire__format-item">
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