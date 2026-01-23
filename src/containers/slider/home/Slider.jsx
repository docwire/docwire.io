import './slider.css';
import React from "react";

const formats = [
    "HTML", "EML", "PDF", "ODFXML", "iWork", "OOXML", "ODT",
    "ODF", "PRF", "PPT", "XLSB", "DOC", "XLS", "PAGES", "KEYNOTE"
];

const MarqueeContent = () => (
    <div className="docwire__slider-marquee_content">
        {formats.map((format, index) => (
            <div key={index} className="docwire__slider-marquee_content_text">
                <h4>{format}</h4>
            </div>
        ))}
    </div>
);

function Slider() {
    return (
        <div className='docwire__slider'>
            <div className="docwire__slider-marquee">
                <MarqueeContent />
                <MarqueeContent />
                <MarqueeContent />
                <MarqueeContent />
            </div>
        </div>
    )

}

export default Slider;