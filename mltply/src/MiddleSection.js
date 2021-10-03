import React from 'react'
import './App.scss';
import ellipse from './images/Ellipse_2.png';
import feature from './images/Vector_Smart_Object_copy.svg';
import laptop from './images/keyboard_elements.svg';
import v1 from './images/vector_1.png';
import v2 from './images/vector_2.png';
import v3 from './images/v3.png';
import gloria from './images/gloria.jpeg';
import steve from './images/steve.jpeg';
import tom from './images/tom.jpeg';


function MiddleSection() {
        return (
            <div className="sections">
         <div id="home" className="section-coloured">
            <div className="title-home">We are early investors who support top entrepreneurs</div>
            <p className="intro-p-home">We invest 25k to 5m to back founders raising venture capital at pre-seed, and seed in Insurtech, if you are interested in investing or just want feedback on your business, Apply to MLTPLY, to tell us about your business and get direct feedback from our team.</p> 
            <div className="get-funded"><p className="txt">Get funded</p></div>

            <span className="ellipse"></span>
            <span className="ellipse-2"></span>
            <span className="ellipse-3"></span>
            <img src={laptop} className="laptop-img" />
            </div>
        
        <div id="strategy" className="section-coloured-company">
            <div className="title">Strategy</div>
            <p className="intro-p">MLTPLY is focused on investment that will accelerate delivery of early stage companies in the market. We seek to partner with startups that have the potential to transform the insurance and financial services industries. We invest in early stage organizations, typically early/seed investment, and possess capital flexibility to deploy both operational and financing capital to support the launch of new company.</p> 
            <div className="strategy-list">
                <ul className="features">
                    <li className="feature">
                        <img src={v1} className="feature-logo"></img>
                        <div className="feature-details">
                            <div className="feature-title">Comercial Fleet</div>
                            <div className="feature-description">Provide services for consumers or busineses utilizing new types of mobility, vehicle, connectiviy and telematics.</div>
                        </div>
                    </li>

                    <li className="feature">
                        <img src={v2} className="feature-logo"></img>
                        <div className="feature-details">
                            <div className="feature-title">Cyber security and risk</div>
                            <div className="feature-description">Protect businesses and consumes from new and evolving digital exposures, risks, and attacks by inventing new platforms or reenginering existing products that seamlessly solve for novel 21st century challenges.</div>
                        </div>
                    </li>
                </ul>

                <ul className="features">
                    <li className="feature">
                        <img src={v3} className="feature-logo"></img>
                        <div className="feature-details">
                            <div className="feature-title">Digital Infrastructure</div>
                            <div className="feature-description">Invest in the advancing infrastructure behind the insurance and financial services industries in the areas of underwriting, data & analytics, IoT, alternative distribution and more.</div>
                        </div>
                    </li>

                    <li className="feature">
                        <img src={v1} className="feature-logo"></img>
                        <div className="feature-details">
                            <div className="feature-title">Home</div>
                            <div className="feature-description">Assist our members in better protecting and managing their most valuable assets through alternative data and analytics, risk intervention technologies, and home services solutions.</div>
                        </div>
                    </li>
                </ul>

                <ul className="features">
                    <li className="feature">
                        <img src={v2} className="feature-logo"></img>
                        <div className="feature-details">
                            <div className="feature-title">Living in retirement</div>
                            <div className="feature-description">Deliver products and services to help consumers prepare for and live better in their next stage of life.</div>
                        </div>
                    </li>

                    <li className="feature">
                        <img src={v3} className="feature-logo"></img>
                        <div className="feature-details">
                            <div className="feature-title">Small and medium sized business</div>
                            <div className="feature-description">Enhance current products and solutions that protect small and medium sized businesses (SMBs) and take friction out of the value chain while helping them operate efficiently.</div>
                        </div>
                    </li>
                </ul>
            </div>




            <div className="strategy-list-mobile">
                <ul className="features">
                    <li className="feature">
                        <img src={v1} className="feature-logo"></img>
                        <div className="feature-details">
                            <div className="feature-title">Comercial Fleet</div>
                            <div className="feature-description">Provide services for consumers or busineses utilizing new types of mobility, vehicle, connectiviy and telematics.</div>
                        </div>
                    </li>
                </ul>

                <ul className="features">
                    <li className="feature">
                            <img src={v2} className="feature-logo"></img>
                            <div className="feature-details">
                                <div className="feature-title">Cyber security and risk</div>
                                <div className="feature-description">Protect businesses and consumes from new and evolving digital exposures, risks, and attacks by inventing new platforms or reenginering existing products that seamlessly solve for novel 21st century challenges.</div>
                            </div>
                    </li>
                </ul>

                <ul className="features">
                    <li className="feature">
                        <img src={v3} className="feature-logo"></img>
                        <div className="feature-details">
                            <div className="feature-title">Digital Infrastructure</div>
                            <div className="feature-description">Invest in the advancing infrastructure behind the insurance and financial services industries in the areas of underwriting, data & analytics, IoT, alternative distribution and more.</div>
                        </div>
                    </li>
                </ul>

                <ul className="features">
                    <li className="feature">
                        <img src={v1} className="feature-logo"></img>
                        <div className="feature-details">
                            <div className="feature-title">Home</div>
                            <div className="feature-description">Assist our members in better protecting and managing their most valuable assets through alternative data and analytics, risk intervention technologies, and home services solutions.</div>
                        </div>
                    </li>
                </ul>

                <ul className="features">
                    <li className="feature">
                        <img src={v2} className="feature-logo"></img>
                        <div className="feature-details">
                            <div className="feature-title">Living in retirement</div>
                            <div className="feature-description">Deliver products and services to help consumers prepare for and live better in their next stage of life.</div>
                        </div>
                    </li>
                </ul>

                <ul className="features">
                    <li className="feature">
                        <img src={v3} className="feature-logo"></img>
                        <div className="feature-details">
                            <div className="feature-title-last">Small and medium sized business</div>
                            <div className="feature-description-last">Enhance current products and solutions that protect small and medium sized businesses (SMBs) and take friction out of the value chain while helping them operate efficiently.</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>


        <div id="companies" className="section">
            <div className="title">Companies</div>
            <p className="intro-p-company">Aimed at seed-stage companies that are solving small businesses’ and consumers’ protection and insurance needs in areas of property and casualty, MLTPLY will place a special focus on companies where technology and coverage are key areas of innovation, including telematics, new data, new markets, complex markets, and non-admitted offerings that need technology scale.</p> 
            <div className="companies-list">
                <ul className="c-list">
                    <li className="card">
                        <div className="card-content">
                            <div className="card-date">2020</div>
                            <div className="card-company-type">Fintech</div>
                            <div className="card-company-name">Pouch</div>
                            <div className="card-company-description">Small Business Commercial Auto with Free vehicle tracking software. Better coverages and better protection for fleets under 10 vehicles.</div>
                        </div>
                    </li>

                    <li className="card">
                        <div className="card-content">
                                <div className="card-date">2020</div>
                                <div className="card-company-type">Fintech</div>
                                <div className="card-company-name">Viva Seguros</div>
                                <div className="card-company-description">Latino first brand focused on delivering the next generation of personal lines insurance.</div>
                            </div>
                    </li>
                    {/* <li className="card">
                    <div className="card-content">
                            <div className="card-date">2020</div>
                            <div className="card-company-type">Fintech</div>
                            <div className="card-company-name">Viva Seguros</div>
                            <div className="card-company-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                    </li>

                    <li className="card">
                    <div className="card-content">
                            <div className="card-date">2020</div>
                            <div className="card-company-type">Fintech</div>
                            <div className="card-company-name">Albo</div>
                            <div className="card-company-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                    </li> */}
                </ul>

                {/* <ul className="c-list"> */}
                    
                    {/* <li className="card">
                    <div className="card-content">
                            <div className="card-date">2020</div>
                            <div className="card-company-type">Fintech</div>
                            <div className="card-company-name">Truora</div>
                            <div className="card-company-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                    </li>

                    <li className="card">
                    <div className="card-content">
                            <div className="card-date">2020</div>
                            <div className="card-company-type">Fintech</div>
                            <div className="card-company-name">Nuovo Cargo</div>
                            <div className="card-company-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                    </li> */}
                {/* </ul> */}
                
            </div>
        </div>
        <div id="team"  className="section">
            <div className="title">MLTPLY Team</div>
            <p className="intro-p-team">Our entire team have been entrepreneurs or early employees at early stage startups and is built to support you on your entrepreneurial journey. In addition to our Investment Team, our Insurtech experts will be dedicate to your success.</p>
       
            <div className="team-list">
                <ul className="c-list">
                    <li className="card">
                        <div className="card-content">
                            <img src={gloria} />
                            <div className="card-company-name">Gloria Guntinas</div>
                            <div className="card-company-description">Founder & CEO.</div>
                        </div>
                        

                    </li>
                    <li className="card">
                    <div className="card-content">
                            <img src={steve} />
                            <div className="card-company-name">Steve McKay</div>
                            <div className="card-company-description">Co-Founder & Investment Advisor.</div>
                        </div>
                    </li>

                    <li className="card">
                    <div className="card-content">
                            <img src={tom} />
                            <div className="card-company-name">Tom Libassi</div>
                            <div className="card-company-description">ILS Capital Management.</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
            </div>
        )
}

export default MiddleSection