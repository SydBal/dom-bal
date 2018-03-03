import React from 'react';
import { connect } from 'react-redux';

class ProjectBanner extends React.Component {

    render() {
        return (
            <div id="projectBanner" className="banner container-fluid bg-clear text-white">
                <div className="container text-center">
                    <h1>Projects</h1>
                    <div className="row justify-content-center">
                        <div className="col-sm-4">Redoot</div>
                        <div className="col-sm-4">FitBit</div>
                        <div className="col-sm-4">Heatmap</div>
                        <div className="col-sm-4">Tuvalu</div>
                        <div className="col-sm-4">256 Bitmap</div>
                        <div className="col-sm-4">Philae Lander</div>
                        <div className="col-sm-4">ML Silhouette</div>

                    </div>
                </div>
            </div>
		);
    }
}

export default connect()(ProjectBanner)