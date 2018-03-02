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
                        const code = (&#x2764;, &#x1F552;, &#x2615;) => ({'{quality: '}&#x2764;, speed: Math.pow(&#x1F552;, &#x2615;){'}'})
                    </kbd>
                    <p>
                        <br/>Send &#x2615; to<br/>
                        BTC: 1FirT3AVP3qcNxaemdpdPSAxSqcEUsn3Un<br/>
                        ETH: 0x39e6745e5b4ac07189f92647206f63c152b66c30
                    </p>
                </div>
            </div>
		);
	}
}

export default connect()(FooterBanner)