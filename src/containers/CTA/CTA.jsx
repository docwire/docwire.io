import './cta.css';
import React from "react";

function CTA() {
    return (
            <div className='docwire__cta-background section card'>
                <div className='docwire__cta-background_banner'>
                    <div className='docwire__cta-content'>
                        <h3>Public Binaries</h3>
                        <p className="text-lead">Have a go and experiment with our non-commercial license, without trial periods or gated
                            functions!</p>
                    </div>
                </div>
                <a href="https://github.com/docwire/docwire/releases" target="_blank" rel="noreferrer" className="docwire__cta-button button-pill">Download Binaries</a>
            </div>
    )
}

export default CTA;