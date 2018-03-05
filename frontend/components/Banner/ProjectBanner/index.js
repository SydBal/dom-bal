import React from 'react';
import { connect } from 'react-redux';

class ProjectBanner extends React.Component {

    render() {
        return (
            <div id="projectBanner" className="banner container-fluid bg-clear text-white">
                <div className="container text-center">
                    <h1>Projects</h1>
                    <div className="row justify-content-center">
                        <div className="col-md-4 col-sm-6">
                            <div className="projectCard">
                                Redoot
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="projectCard">
                                FitBit
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="projectCard">
                                Heatmap
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="projectCard">
                                Tuvalu
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="projectCard">
                                256 Bitmap
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="projectCard">
                                Philae Lander
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="projectCard">
                                ML Silhouette
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
    }
}

export default connect()(ProjectBanner)