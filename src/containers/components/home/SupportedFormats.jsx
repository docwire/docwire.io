import './supportedFormats.css';
import React from "react";
import { formatGroups } from '../../../data/supportedFormatsData';

function SupportedFormats() {
    return (
            <div className="docwire__supported-formats-container section">
                <div className="docwire__supported-formats_header">
                    <h2 className="text-display">One SDK, All Formats</h2>
                    <p className="text-lead">
                        No matter if it’s scanned reports or structured Excel sheets, the Docwire SDK helps you
                        identify and extract the data you need from virtually any file type.
                    </p>
                </div>
                <div className="docwire__formats-grid">
                    {formatGroups.map((group, index) => (
                        <div key={index} className="docwire__format-group-card_container">
                            <div className="docwire__format-group-card card">
                                <div className="docwire__format-icon">
                                    <group.icon />
                                </div>
                                <h4 className="docwire__format-group-name">{group.groupName}</h4>
                                <p className="docwire__format-group-formats">
                                    {group.formats.join(', ')}
                                </p>
                                <p className="docwire__format-group-description">
                                    {group.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    )

}

export default SupportedFormats;
