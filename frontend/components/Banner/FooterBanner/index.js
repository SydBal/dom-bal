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
                    <kbd>
                        const code = (❤️, &#x1F35D;, ☕) => ({'{quality: '}❤️, speed: Math.pow(&#x1F35D;, ☕){'}'})
                    </kbd>
                    <p>
                        <br/>Send &#x1F35D; ☕ and ❤️ to<br/>
                        BTC: 1FirT3AVP3qcNxaemdpdPSAxSqcEUsn3Un<br/>
                        ETH: 0x39e6745e5b4ac07189f92647206f63c152b66c30
                    </p>
                </div>
            </div>
		);
	}
}

export default connect()(FooterBanner)