import React from 'react'
import './App.scss';
import v1 from './images/vector_1.png';
import v2 from './images/vector_2.png';
import v3 from './images/v3.png';
import feature from './images/Vector_Smart_Object_copy.svg';
import top_teams from './images/top_teams.png';
import big_markets from './images/big_markets.svg';
import investment from './images/investment.svg';
import {Link as LinkTo} from 'react-router-dom';


function Apply() {
    return (
        <div className="apply-sections">
         <div id="home" className="apply-section-coloured">
            <div className="title-home">Apply to MLTPLY Partners</div>
            <p className="intro-p-home">Omni, Albo and 30+ startups from our portfolio got funding via this application</p> 

            <span className="ellipse"></span>
            <span className="ellipse-2"></span>
            <span className="ellipse-3"></span>
         </div>


         <div id="strategy" className="apply-section">
            <div className="title">We really invest via the MLTPLY Memo!</div>
            <div className="strategy-list">
                <ul className="features">
                    <li className="feature">
                        <img src={feature} className="feature-logo"></img>
                        <div className="feature-details">
                            <div className="feature-description"><p>You shouldn't need a warm intro to access venture capital. Our Magma Memo democratizes access to venture capital and is the best way to get in touch with us. Don't spend more than 5-10 minutes on it. Bullet points are just fine.</p><p>Your Magma Memo helps us be ready for a first meeting by getting to know you and your business so that we can dig in during our first meeting.</p></div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="description-list">
                <ul className="features">
                    <li className="feature">
                        <img src={top_teams} className="feature-logo"></img>
                        <div className="feature-details">
                            <div className="feature-title">Top Teams</div>
                            <div className="feature-description">We like to partner with entrepreneurs who have "founder market fit," founders who have an unfair advantage. We want to understand why you're the best team in the world to solve the problem you're trying to solve.</div>
                        </div>
                    </li>

                    <li className="feature">
                        <img src={big_markets} className="feature-logo"></img>
                        <div className="feature-details">
                            <div className="feature-title">Big Markets, Scalable Growth</div>
                            <div className="feature-description">We want to understand how you can build a fast growth, scalable, technology driven business with $25M-$100M+ of revenue over the next 5-10 years.</div>
                        </div>
                    </li>

                    <li className="feature">
                        <img src={investment} className="feature-logo"></img>
                        <div className="feature-details">
                            <div className="feature-title">Apply for Investment, Apply for Feedback</div>
                            <div className="feature-description">Whether you're looking for investment or just want feedback on your business, we promise to give you personalized, direct feedback on 100% of the applications via our application process.</div>
                        </div>
                    </li>
                </ul>
            </div>
            
            <LinkTo to="applyForm"><div className="get-funded"><p className="txt">Apply</p></div></LinkTo>
            

        </div>
        </div>
    );
}

export default Apply