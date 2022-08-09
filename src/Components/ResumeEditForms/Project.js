import React from "react";
import { ButtonForm } from './ButtonForm';
import '../Styles/project.css'


export const Project = ({ namber, deliteReview, item }) => {

    return (
        <div className="block">
            
            <div className="info_block">

            <h3 className="firma">{++namber}. В компании <span>{item.firma}</span></h3>
            <h4 className="termin">работал в приод с <span>{item.yearOn}</span> по <span>{item.yearOf}</span></h4>
            <p className="text"><span>{item.story}</span></p>
            </div>
            <ButtonForm className="button_delit" onClick={deliteReview} label="x" />
            

        </div>
    )
}