import './usecases.css';
import React from "react";
import {data} from '../../data/showcaseData'
import Link from '@docusaurus/Link';

function UseCases() {
    return (
        <div className='docwire__usecases'>
            <div className='docwire__usecases-hero'>
                <div className='docwire__usecases-hero_top'>
                    <h1>
                        Explore how the <span>Docwire SDK</span> is applied in the world
                    </h1>
                    <p>
                        The Docwire SDK provides the core functionality of services delivered to hundreds of thousands
                        of users. These cases cover how the text extractor has been operationally implemented for our
                        clients.
                    </p>
                </div>
                <div className='docwire__usecases-hero_bottom'>
                    {
                        data.map((item) =>
                            <div className="docwire__usecases-single" key={item.linkName}>
                                <Link to={`/showcases/${item.linkName}`}>
                                    <div className="docwire__usecases-single_wrapper">
                                        <div className="docwire__usecases-single_wrapper_img">
                                            <img src={require(`../../assets/${item.image}`)} alt={item.companyName}/>
                                        </div>
                                    </div>
                                    <h2>{item.companyName}</h2>
                                </Link>
                                <p>{item.showcasesShortInfo}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )

}

export default UseCases;