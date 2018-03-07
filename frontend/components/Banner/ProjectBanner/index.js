import React from 'react';
import { connect } from 'react-redux';

class ProjectBanner extends React.Component {

    render() {
        return (
            <div id="projectBanner" className="banner container-fluid bg-clear text-white">
                <div className="container text-center">
                    <h1>Projects</h1>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="projectCard"  style={{backgroundImage:'url(img/redoot.png)'}}>
                                <div className="projectCardContent">
                                    <h3>Redoot, a Redux-Bootstrap Starter</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="projectCard" style={{backgroundImage:'url(img/fitbit.png)'}}>
                                <div className="projectCardContent">
                                    <h3>FitBit App and Watchface</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="projectCard" style={{backgroundImage:'url(img/psexample.png)'}}>
                                <div className="projectCardContent">
                                    <h3>Real-Time Diagnostics Heatmap</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="projectCard"  style={{backgroundImage:'url(img/seadslogo.png)'}}>
                                <div className="projectCardContent">
                                    <h3>Smart Energy Analytics and Disaggregation Systems</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="projectCard"  style={{backgroundImage:'url(img/facespace.png)'}}>
                                <div className="projectCardContent">
                                    <h3>Gender Classification Using Silhouette Data</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="projectCard" style={{backgroundImage:'url(img/tafl.png)'}}>
                                <div className="projectCardContent">
                                    <h3>The Touchdown Adventures of the Philae Lander</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="projectCard"  style={{backgroundImage:'url(img/tuvalucover.png)'}}>
                                <div className="projectCardContent">
                                    <h3>Tuvalu Salt Company Book Cover</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
    }
}

export default connect()(ProjectBanner)