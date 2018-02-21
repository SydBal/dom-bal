import React from 'react';
import {connect} from 'react-redux';

class IntroBanner extends React.Component {

	render() {
		return (
            <div className="banner container-fluid bg-clear underNav">
                <div className="container text-center">
                    <h1 className="display-3">Redoot</h1>
                    <h3>A React-Redux + Bootstrap Website Starter</h3>
                    <h3>Powered by NodeJS</h3>
                    <a href="https://github.com/SydBal/redoot" className="btn btn-secondary gitBtn text-white" role="button">
                        <i className="zmdi zmdi-github zmdi-hc-lg"/> Source
                    </a>
                </div>
            </div>
		);
	}
}

export default connect()(IntroBanner)