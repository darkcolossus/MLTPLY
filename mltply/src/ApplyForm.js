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


function ApplyForm() {
    return (
        <div className="apply-sections">
         <div id="strategy" className="apply-section">
            <div className="title">MLTPLY Partners Application</div>
            <p className="intro-p-form">Thank you very much for applying! Please fill out our form (in English or Spanish) and one of our partners will contact you. You don't take more than 5 minutes to fill out the form and bullet points are more than welcome.</p> 
            <p className="intro-p-form">Thanks for applying! Please fill out our form in either English or Spanish and one of our partners will contact you. Don't take more than 5 minutes to fill this out, and bullet points are just fine!</p> 

            <div className="form">
                <div className="label">Project Name</div>
                <div className="field" >Project Name</div>

                <div className="label">Company Description</div>
                <div className="field">COmpany Description</div>

                <div className="label">Website</div>
                <div className="field">Website</div>

                <div className="label">City where company is based</div>
                <div className="field">Website</div>

                <div className="label">Email</div>
                <div className="field">Email</div>

                <div className="label">Entrepeneur Name</div>
                <div className="field">Name - Surname</div>
            </div>
            
            <div className="buttons">
                <LinkTo to="applyForm"><div className="back"><p className="txt">Back</p></div></LinkTo>
                <LinkTo to="applyForm"><div className="next"><p className="txt">Next</p></div></LinkTo>
            </div>
            
            

        </div>
        </div>
    );
}

export default ApplyForm