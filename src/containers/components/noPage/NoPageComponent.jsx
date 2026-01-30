import Link from '@docusaurus/Link';
import React from "react";
import './nopagecomponent.css'

function NoPageComponent() {
    return (
        <div className="docwire__nopage">
            <div className="docwire__nopage-content">
                <div className="docwire__nopage-content404">
                    <h1>404</h1>
                    <h2>Page not found</h2>
                </div>
                <Link to="/" className="button-pill">Homepage</Link>
            </div>
        </div>
    )
}

export default NoPageComponent;