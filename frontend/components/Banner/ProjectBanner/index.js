import React from 'react';
import { connect } from 'react-redux';

class ProjectBanner extends React.Component {

    render() {
        return (
            <div id="projectBanner" className="banner container-fluid bg-clear text-white">
                <div className="container text-center">
                    <h1 className="display-1">Projects</h1>
                    <h1>Coming Soon!</h1>
                </div>
            </div>
		);
    }
}

export default connect()(ProjectBanner)