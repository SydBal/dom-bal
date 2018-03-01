import React from 'react';
import IntroSVG from 'Frontend/components/svgComponents/IntroSVG'
import { connect } from 'react-redux';

class IntroBanner extends React.Component {

    render() {
        return (
            <div>
            <div id="introPatternBG"/>
            <div className="banner container-fluid bg-clear text-white">
                <div id="introBanner" className="container text-center">
                    <div id="svgIntro">
                        <IntroSVG/>
                    </div>
                    <a href="/docs/DominicBalassoneResume.pdf" target="_blank">
                        <button id="resumeButton" type="button" className="btn btn-secondary">
                            <h4><i className="material-icons">file_download</i> Résumé</h4>
                        </button>
                    </a>
                    <div id="introInfo">
                        <div>
                            <h4><i className="material-icons">mail_outline</i> dominic.balassone [at] gmail [dot] com</h4>
                            <h4><i className="material-icons">phone</i> (510) 461 - 8141</h4>
                        </div>
                    </div>
                </div>
            </div>
            </div>
		);
    }
}

export default connect()(IntroBanner)