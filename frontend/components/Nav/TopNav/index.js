import React from 'react';
import {connect} from 'react-redux';

class TopNav extends React.Component {

	componentDidMount () {
		if( window.scrollY > 65){
			document.getElementById('topNav').style.opacity = 1
		}

		window.addEventListener('scroll', function(e) {

			if( window.scrollY > 65){
				document.getElementById('topNav').style.opacity = 1
			}else{
				document.getElementById('topNav').style.opacity = 0
			}
		});
	}

	render() {
		return (
			<div>
				<nav id="topNav" className="navbar navbar-inverse bg-inverse fixed-top text-center">
					<a className="navbar-brand" href="#">
						Dominic Balassone
					</a>
				</nav>
			</div>
		);
	}
}

export default connect()(TopNav)