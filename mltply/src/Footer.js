import React from 'react'
import './App.scss';
import logo_footer from './images/Vector_Smart_Object_copy.svg';

function Footer() {
    return (
        <footer>
            <div className="rectangle-2">
                <ul className="foot-links">
                    <li>Apply</li>
                    <li>Portfolio</li>
                    <li>Team</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                </ul>
                <ul className="foot-links">
                    <li>Brava</li>
                    <li>Crossing Borders</li>
                    <li>LatamList Espresso</li>
                    <li>Lorem ipsum</li>
                    <li>Dolor sit amet</li>
                </ul>
                <img src={logo_footer} className="img-footer" ></img>
            </div>
            <div className="rectangle-3"></div>
        </footer>
    )
}

export default Footer