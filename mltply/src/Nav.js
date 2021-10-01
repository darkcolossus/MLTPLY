import React from 'react'
import {Link} from 'react-scroll'
import './App.scss';
import logo from './images/logo.svg';
import {Link as LinkTo} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <a href="/"><img src={logo} className="logo" /></a>
            <ul className="nav-links">
                <li><Link  to="companies" spy={true} smooth={true}>Companies</Link></li>
                <li><Link  to="team" spy={true} smooth={true}>Team</Link></li>
                <li><Link  to="contact" spy={true} smooth={true}>Blog</Link></li>
                <li><Link  to="service" spy={true} smooth={true}>Agency</Link></li>
                <li><Link  to="home" spy={true} smooth={true}>Contact Us</Link></li>
                <LinkTo to="apply"><li  className="apply-link">Apply</li></LinkTo>
            </ul>
        </nav>
    )
}

export default Nav