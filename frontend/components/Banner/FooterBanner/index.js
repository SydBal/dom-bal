import React from 'react';
import {connect} from 'react-redux';

class FooterBanner extends React.Component {

	render() {
		return (
            <div className="banner container-fluid footer" id="stickyFooter">
                <div className="container text-center text-white">
                    <p>
                        This site is under construction.
                    </p>
                    <p>
                        Thank you for visiting!
                    </p>
                </div>
            </div>
		);
	}
}

export default connect()(FooterBanner)