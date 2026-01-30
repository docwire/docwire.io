import './cta.css';
import React from "react";
import Link from '@docusaurus/Link';

function CTAcontact() {
    return (
            <div className='docwire__cta-background section card'>
                <div className='docwire__cta-background_banner'>
                    <div className='docwire__cta-content'>
                        <h3>Give our demo a try</h3>
                        <p className="text-lead">Have a go and experiment with our non-commerical license, without trial periods or gated
                            functions!</p>
                    </div>
                </div>
                <Link to="/contact-us" className="docwire__cta-button button-pill">Get licence</Link>
            </div>
    )
}

export default CTAcontact;