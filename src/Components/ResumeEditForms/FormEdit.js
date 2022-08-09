import React from 'react';
// import Styled from 'styled-components';
import Avatar from '../Avatar/ava.jpg';
import { ButtonForm } from './ButtonForm';
import { useState } from 'react';


import '../Styles/li.css'
import '../Styles/button.css'
import { Project } from './Project'
import '../Styles/formEdit.css'

// export const FormEditStyle = Styled.section`
// {
// width: 100%;
// padding:20px;
// border:1px solid grey;
// color: green;
// font-size: 16px;
// }
// && img{
//     grid-area:1/1/3/2;
//     width:100px;
//     height:100px;
//     border-radius:50%;
//     position:relative;
//     top:10px;
//     left:20px;
// }
// && div{
// margin: 20px;

// }
// `

export const FormEdit = ({ person, setValue, skill, setSkill, review, setReview }) => {
    let Data1="0"
//    рассчет возраста по дате
    // let Years = ((Date.now()) - (Date.parse(person.Age)));
    Data1 = Math.round(((Date.now()) - (Date.parse(person.Age))) / (31536000 * 1000))
let liter = 'лет'
// console.log(Data1.slice(0,-1))
// if(Data1.slice(-1)==="1") liter="год"
// if(Data1.slice(-1)==="2"||Data1.slice(-1)==="3"||Data1.slice(-1)==="4"&&Data1!=11&&Data1!=12&&Data1!=13&&Data1!=14) liter="года"

    // очистка формы
    function delitAll(e) {
        e.preventDefault();
        setValue({ valueName: '', Age: '', Professional: '', Phone: '', Email: '' });
        setSkill([]);
        setReview([]);
    }
// удаление элемента из навыков skill
    function deliteSkill(e) {
        e.preventDefault();
        let element = e.target.parentElement.innerText;
        element = element.slice(0, -2)
        setSkill(skill.filter(f => f !== element))
        console.log(skill)
    }
// удаление элемента из трудового стажа review
    function deData1eview(e) {
        e.preventDefault();
        let element = e.target.parentElement.innerText;
        element = element.split(" ")
        let index = element[0].slice(0, -1) - 1
        setReview(review.filter((f, i) => i !== index))
    }

// список скилов
    let rezSkill = skill.map(items => <li className="li_skill" > {items}<ButtonForm
        onClick={deliteSkill}
        className={"button_delit"} label="X" />, </li>)
// список трудового стажа
    let rezReview = review.map((item, index) =>
        <Project
            namber={index}
            id={index}
            deData1eview={deData1eview}
            item={item}>

        </Project>


    )
    return (
        <section>
            <div>
                <img src={Avatar} alt="vatar"></img>
            </div>
            <h1><span>{person.valueName}</span></h1>
            <h3>Дата рождения / возраст:  <span>{person.Age}</span>/ {Data1} {liter}</h3>
            <h3>Специальность: <span>{person.Professional}</span></h3>
            <h3>Телефон: <span>+38{person.Phone}</span></h3>
            <h3>Email: <span>{person.Email}</span></h3>

            <h3>Мои профессиональные навыки: </h3>
            <ul> {rezSkill}</ul>

            <h3>Проекты:</h3>

            <div>{rezReview} </div>

            <p> <ButtonForm onClick={delitAll} className={"button_style"} label="Очистить" /></p>
        </section>

    )
}

