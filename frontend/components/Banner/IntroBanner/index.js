import React from 'react';
import { connect } from 'react-redux';

class IntroBanner extends React.Component {

    render() {
        return (
            <div className="banner container-fluid bg-clear underNav">
                <div className="container text-center">
                    <svg width="500" height="500" viewBox="0 0 250 255">
                        <defs>
                            <path id="namePath"
                                d="M-100,0 a1,1 0 1,1 200,0" />

                            <pattern id="image" patternUnits="userSpaceOnUse" width="250" height="250">
                                <image xlinkHref="img/avatar.png" x="25" y="25" width="200" height="200" />
                        </pattern>

                            <pattern id="gitimage" patternUnits="userSpaceOnUse" x="-25" y="-25" width="50" height="50">
                                <image xlinkHref="https://upload.wikimedia.org/wikipedia/commons/e/eb/Ei-sc-github.svg" width="50" height="50" />
                        </pattern>

                            <pattern id="linkimage" patternUnits="userSpaceOnUse" x="-25" y="-25" width="50" height="50">
                                <image xlinkHref="https://upload.wikimedia.org/wikipedia/commons/c/ce/Linkedin_circle.svg" width="50" height="50" />
                        </pattern>

                            <pattern id="codeimage" patternUnits="userSpaceOnUse" x="-19" y="-19" width="50" height="50">
                                <image xlinkHref="https://cdn.worldvectorlogo.com/logos/codepen-icon.svg" width="38" height="38" />
                        </pattern>


                        </defs>
                        <circle cx="125" cy="125" r="100" fill="black" />
                        <circle cx="125" cy="125" r="97" fill="url(#image)" />
                        <g transform="translate(125,125)">
                            <a href="https://codepen.io/Greetings" target="_blank">
                                <g transform="rotate(-120)">
                                    <circle fill="black" cx="0" cy="-100" r="25" />
                                    <circle fill="white" cx="0" cy="-100" r="22" />
                                    <circle class="link" cx="0" cy="-100" r="22" fill="url(#codeimage)" transform="rotate(120 0 -100)">
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            values="0 0 -100;60 0 -100;120 0 -100;120 0 -100;120 0 -100"
                                            keyTimes="0;0.25;0.5;0.75;1"
                                            dur="2s"
                                            fill="freeze"
                                            begin="0s;startAnimation.begin" />
                                    </circle>
                                    <animateTransform
                                        attributeName="transform"
                                        type="rotate"
                                        values="0;-60;-120;-120;-120"
                                        keyTimes="0;0.25;0.5;0.75;1"
                                        dur="2s"
                                        fill="freeze"
                                        begin="0s;startAnimation.begin" />
                                </g>
                            </a>
                            <a href="https://www.linkedin.com/in/dominic-balassone-1991aa38/" target="_blank">
                                <g transform="rotate(-180)">
                                    <circle fill="black" cx="0" cy="-100" r="25" />
                                    <circle fill="white" cx="0" cy="-100" r="22" />
                                    <circle class="link" cx="0" cy="-100" r="22" fill="url(#linkimage)" transform="rotate(180 0 -100)">
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            values="0 0 -100;60 0 -100;120 0 -100;180 0 -100;180 0 -100"
                                            keyTimes="0;0.25;0.5;0.75;1"
                                            dur="2s"
                                            fill="freeze"
                                            begin="0s;startAnimation.begin" />
                                    </circle>
                                    <animateTransform
                                        attributeName="transform"
                                        type="rotate"
                                        values="0;-60;-120;-180;-180"
                                        keyTimes="0;0.25;0.5;0.75;1"
                                        dur="2s"
                                        fill="freeze"
                                        begin="0s;startAnimation.begin" />
                                </g>
                            </a>
                            <a href="https://github.com/SydBal" target="_blank">
                                <g transform="rotate(-240)">
                                    <circle fill="black" cx="0" cy="-100" r="25" />
                                    <circle fill="white" cx="0" cy="-100" r="22" />
                                    <circle class="link" cx="0" cy="-100" r="22" fill="url(#gitimage)" transform="rotate(240 0 -100)">
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            values="0 0 -100;60 0 -100;120 0 -100;180 0 -100;240 0 -100"
                                            keyTimes="0;0.25;0.5;0.75;1"
                                            dur="2s"
                                            fill="freeze"
                                            begin="0s;startAnimation.begin" />
                                    </circle>
                                    <animateTransform
                                        attributeName="transform"
                                        type="rotate"
                                        values="0;-60;-120;-180;-240"
                                        keyTimes="0;0.25;0.5;0.75;1"
                                        dur="2s"
                                        fill="freeze"
                                        begin="0s;startAnimation.begin" />
                                </g>
                            </a>

                            <text transform="translate(0,-1)" font-size="22">
                                <textPath xlinkHref="#namePath" text-anchor="middle" startOffset="50%">
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
                        </g>
                    </svg>
                    <p>
                        dominic.balassone [at] gmail [dot] com
                    </p>
                    <p>
                        (510) 461 - 8141
                    </p>

                </div>
            </div >
		);
    }
}

export default connect()(IntroBanner)