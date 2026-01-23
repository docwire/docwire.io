import './showcaseTemplate.css'
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {Redirect} from "@docusaurus/router";
import {HiExternalLink, HiArrowRight} from "react-icons/hi";
import {CTAcontact} from "../index";
import {data} from "../../data/showcaseData";

// Use require.context to automatically import and map all images in the assets folder.
const assets = require.context('../../assets', false, /\.(png|jpe?g|svg|gif|webp)$/i);

function ShowcaseTemplate(props) {
    const { linkName } = props;
    const params = props.match ? props.match.params : {};
    const link = linkName || params.link;

    const showcase = data.find((show) => show.linkName === link)
    if (showcase === undefined) {
        return <Redirect to="/404"/>
    }

    // Resolve the image from the context. Handles both ES Module and CommonJS exports.
    let imageSrc = null;
    try {
        const imageModule = assets(`./${showcase.image}`);
        imageSrc = imageModule.default || imageModule;
    } catch (error) {
        console.error(`Failed to load image: ${showcase.image}`, error);
    }

    return (
        <Layout title={showcase.companyName}>
            <div className="docwire__showcase-template">
                <div className="docwire__showcase-template_header">
                    <h1>{showcase.companyName}</h1>
                    <h2>{showcase.subtitle}</h2>
                    <div className="docwire__showcase-template_header-buttons">
                        <a href={showcase.website} className="link" target="_blank" rel="noopener noreferrer">
                            <div>Website</div>
                            <HiExternalLink className="icon"/>
                        </a>
                        <Link to="/contact-us" className="cta">Get licence</Link>
                    </div>
                </div>
                <div className="docwire__showcase-template_content">
                    <div className="docwire__showcase-template_content-left">
                        <div className="top_left">
                            <img src={imageSrc} alt={showcase.companyName}/>
                            <p>{showcase.whoWeAre}</p>
                        </div>
                        <Link to="/showcases">
                            <div className="text">Other showcases</div>
                            <div className="arrow"><HiArrowRight/></div>
                        </Link>
                    </div>
                    <div className="docwire__showcase-template_content-right">
                        <div className="question"><h4>What is {showcase.companyName}</h4></div>
                        <div className="answer"><p>{showcase.whatIs}</p></div>

                        <div className="question"><h4>Why were Docwire approached?</h4></div>
                        <div className="answer"><p>{showcase.WhyWereDocwireApproached}</p></div>

                        <div className="question"><h4>What did we do?</h4></div>
                        <div className="answer"><p>{showcase.WhatDidWeDo}</p></div>

                        <div className="question"><h4>What were the results?</h4></div>
                        <div className="answer"><p>{showcase.WhatWereTheResults}</p></div>
                    </div>
                </div>
            </div>
            <CTAcontact/>
        </Layout>
    )
}

export default ShowcaseTemplate;