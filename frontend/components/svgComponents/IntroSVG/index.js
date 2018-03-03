import React from 'react';
import { connect } from 'react-redux';

class IntroSVG extends React.Component {
    componentDidMount(){
        let linkIcons = document.getElementsByClassName('personalLink')
        let bigHead = document.getElementById('bigHead')
        let text = document.getElementById('linkName')
        for(let link of linkIcons){
            link.addEventListener("mouseover", () => {
                bigHead.style.opacity = .4
                text.innerHTML = link.dataset.name
                text.style.opacity = 1
            });
            link.addEventListener("mouseout", () => {
                bigHead.style.opacity = 1
                text.style.opacity = 0
            });
        }
    }

    render() {
        return (
            <svg id="personalSVG" width="100%" height="100%" viewBox="0 0 250 250">
                <defs>
                    <path id="namePath"
                        d="M-100,0 a1,1 0 1,1 200,0" />

                    <pattern id="image" patternUnits="userSpaceOnUse" width="250" height="250">
                        <image xlinkHref="img/avatar.png" x="25" y="25" width="200" height="200" />
                    </pattern>

                    <pattern id="gitimage" patternUnits="userSpaceOnUse" x="-25" y="-25" width="50" height="50">
                        <image xlinkHref="img/github.svg" width="50" height="50" />
                    </pattern>

                    <pattern id="linkimage" patternUnits="userSpaceOnUse" x="-25" y="-25" width="50" height="50">
                        <image xlinkHref="img/linkedin.svg" width="50" height="50" />
                    </pattern>

                    <pattern id="codeimage" patternUnits="userSpaceOnUse" x="-19" y="-19" width="50" height="50">
                        <image xlinkHref="img/codepen.svg" width="38" height="38" />
                    </pattern>

                    <pattern id="resumeimage" patternUnits="userSpaceOnUse" x="-19" y="-19" width="50" height="50">
                        <image xlinkHref="img/resume.png" width="38" height="38" />
                    </pattern>

                </defs>
                <circle cx="125" cy="125" r="100" fill="black" />
                <circle id="bigHead" cx="125" cy="125" r="97" fill="url(#image)"/>
                <g transform="translate(125,125)">
                    <a href="https://codepen.io/Greetings" target="_blank" className="personalLink" data-name="CodePen">
                        <g transform="rotate(-90)">
                            <circle fill="black" cx="0" cy="-100" r="25" />
                            <circle fill="black" cx="0" cy="-100" r="22" />
                            <circle cx="0" cy="-100" r="22" fill="url(#codeimage)" transform="rotate(90 0 -100)">
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    values="0 0 -100;45 0 -100;90 0 -100;90 0 -100;90 0 -100;90 0 -100;90 0 -100"
                                    keyTimes="0;0.167;0.33;0.5;0.667;0.83;1"
                                    dur="2s"
                                    fill="freeze"
                                    begin="0s;startAnimation.begin" />
                            </circle>
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                values="0;-45;-90;-90;-90;-90;-90"
                                keyTimes="0;0.167;0.33;0.5;0.667;0.83;1"
                                dur="2s"
                                fill="freeze"
                                begin="0s;startAnimation.begin" />
                        </g>
                    </a>
                    <a href="https://github.com/SydBal" target="_blank" className="personalLink" data-name="GitHub">
                        <g transform="rotate(-135)">
                            <circle fill="black" cx="0" cy="-100" r="25" />
                            <circle fill="white" cx="0" cy="-100" r="22" />
                            <circle cx="0" cy="-100" r="22" fill="url(#gitimage)" transform="rotate(135 0 -100)">
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    values="0 0 -100;45 0 -100;90 0 -100;135 0 -100;135 0 -100;135 0 -100;135 0 -100"
                                    keyTimes="0;0.167;0.33;0.5;0.667;0.83;1"
                                    dur="2s"
                                    fill="freeze"
                                    begin="0s;startAnimation.begin" />
                            </circle>
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                values="0;-45;-90;-135;-135;-135;-135"
                                keyTimes="0;0.167;0.33;0.5;0.667;0.83;1"
                                dur="2s"
                                fill="freeze"
                                begin="0s;startAnimation.begin" />
                        </g>
                    </a>
                    <a href="https://www.linkedin.com/in/dominic-balassone-1991aa38/" target="_blank" className="personalLink" data-name="LinkedIn">
                        <g transform="rotate(-225)">
                            <circle fill="black" cx="0" cy="-100" r="25" />
                            <circle fill="white" cx="0" cy="-100" r="22" />
                            <circle cx="0" cy="-100" r="22" fill="url(#linkimage)" transform="rotate(225 0 -100)">
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    values="0 0 -100;45 0 -100;90 0 -100;135 0 -100;180 0 -100;225 0 -100;225 0 -100"
                                    keyTimes="0;0.167;0.33;0.5;0.667;0.83;1"
                                    dur="2s"
                                    fill="freeze"
                                    begin="0s;startAnimation.begin" />
                            </circle>
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                values="0;-45;-90;-135;-180;-225;-225"
                                keyTimes="0;0.167;0.33;0.5;0.667;0.83;1"
                                dur="2s"
                                fill="freeze"
                                begin="0s;startAnimation.begin" />
                        </g>
                    </a>
                    <a href="/docs/DominicBalassoneResume.pdf" target="_blank" className="personalLink" data-name="Résumé">
                        <g transform="rotate(-270)">
                            <circle fill="black" cx="0" cy="-100" r="25" />
                            <circle fill="white" cx="0" cy="-100" r="22" />
                            <circle cx="0" cy="-100" r="22" fill="url(#resumeimage)" transform="rotate(270 0 -100)">
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    values="0 0 -100;45 0 -100;90 0 -100;135 0 -100;180 0 -100;225 0 -100;270 0 -100"
                                    keyTimes="0;0.167;0.33;0.5;0.667;0.83;1"
                                    dur="2s"
                                    fill="freeze"
                                    begin="0s;startAnimation.begin" />
                            </circle>
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                values="0;-45;-90;-135;-180;-225;-270"
                                keyTimes="0;0.167;0.33;0.5;0.667;0.83;1"
                                dur="2s"
                                fill="freeze"
                                begin="0s;startAnimation.begin" />
                        </g>
                    </a>

                    <text transform="translate(0,-5)" fontSize="22">
                        <textPath xlinkHref="#namePath" textAnchor="middle" startOffset="50%">
                            Dominic Balassone
                                    </textPath>
                        <set
                            attributeName="opacity"
                            to="0"
                            begin="0s;startAnimation.begin" />
                        <animate
                            attributeName="opacity"
                            from="0" to="1" dur="1.5s"
                            begin="0.5;startAnimation.begin+0.5s"
                            fill="freeze" />
                    </text>
                    <text id="linkName" textAnchor="middle" startOffset="50%" fill="white"/>
                </g>
            </svg>
        );
    }
}

export default connect()(IntroSVG)