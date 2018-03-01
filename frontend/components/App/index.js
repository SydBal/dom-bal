import React from 'react';
import {connect} from 'react-redux';

import TopNav from 'Frontend/components/Nav/TopNav';
import IntroBanner from 'Frontend/components/Banner/IntroBanner';
import ProjectBanner from 'Frontend/components/Banner/ProjectBanner';
import FooterBanner from 'Frontend/components/Banner/FooterBanner';

require('Frontend/styles/root.scss');

class App extends React.Component {
	render() {
		return (
			<div className="app-container">
				<TopNav/>
				<div className="app-content">
					<IntroBanner/>
					<ProjectBanner/>
				</div>
				<FooterBanner/>
			</div> 
		);
	}
}

export default connect()(App);