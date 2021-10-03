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

            <form className="form">
                <label for="project-name" className="label">Project Name</label>
                <input type="text" className="field" name="Project Name" value="Project Name"/>

                <label for="company-description" className="label">Company Description</label>
                <input type="text" className="field" name="Company Description" value="Company Description"/>

                <label for="website" className="label">Website</label>
                <input type="text" className="field" name="Website" value="Website"/>

                <label for="city" className="label">City where company is based</label>
                <input type="text" className="field" name="City" value="City where company is based"/>

                <label for="email" className="label">Email</label>
                <input type="text" className="field" name="Email" value="Email"/>

                <label for="entrepeneur" className="label">Entrepeneur Name</label>
                <input type="text" className="field" name="Entrepeneur Name" value="Entrepeneur Name"/>
            </form>
            
            <div className="buttons">
                <LinkTo to="apply"><div className="back"><p className="txt">Back</p></div></LinkTo>
                <LinkTo to="applyForm"><div className="next"><p className="txt">Submit</p></div></LinkTo>
            </div>
            
            

        </div>
        </div>
    );
}

export default ApplyForm