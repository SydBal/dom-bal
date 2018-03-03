import React from 'react';
import IntroSVG from 'Frontend/components/svgComponents/IntroSVG'
import { connect } from 'react-redux';

class IntroBanner extends React.Component {

    componentDidMount () {
        const title = document.getElementById('myTitle')
        const titleWords = ['Software Developer', 'Game Maker', 'SVG + CSS Animator', 'JavaScript Tinker']
        let counter = 0

        const changeWord = (word) => {
            title.style.opacity = 0
            if(counter == 3){
                counter = 0
            }else{
                counter++
            }
            setTimeout(()=>{
                title.style.opacity = 1
                title.innerHTML = titleWords[counter]
            },1000)
        }

        setInterval(()=>{
            changeWord()
        },4000)
	}

    render() {
        return (
            <div>
                <div id="introPatternBG"/>
                <div className="banner container-fluid bg-clear text-white">
                    <div id="introBanner" className="container text-center">
                        <div id="svgIntro">
                            <IntroSVG />
                        </div>
                        <div id="introInfo">
                            <div>
                                <h3 id="myTitle">Software Developer</h3>
                                <hr/>
                                <h4><i className="material-icons">mail_outline</i> dominic.balassone [at] gmail [dot] com</h4>
                                <h4><i className="material-icons">phone</i> (510) 461 - 8141</h4>
                            </div>
                        </div>
                        <a href="/docs/DominicBalassoneResume.pdf" target="_blank">
                            <button id="resumeButton" type="button" className="btn btn-secondary">
                                <h4><i className="material-icons">file_download</i> Résumé</h4>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(IntroBanner)