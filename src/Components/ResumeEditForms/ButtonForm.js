import React from 'react';
import '../Styles/button.css'

export const ButtonForm = ({ className, onClick, label }) => {

    return (

        <button className={className} onClick={(e)=>onClick(e)}>{label}</button>
    )
}