import React from 'react';
import Styled from 'styled-components';
// import  {useState}  from 'react';

import { InputName } from './InputName';
import { InputAge } from './InputAge';
import { InputProfessional } from './InputProfessional';
import { InputPhone } from './InputPhone';
import { InputEmail } from './InputEmail';
import { ButtonForm } from './ButtonForm';
import Avatar from '../Avatar/ava.jpg'

export const FormPersonStyle = Styled.form`{
    display: grid;
    margin:10px;
}
&& h3{
    margin: 10px;
}
&& div{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows:repeat(6, 60px);
    grid-gap: 10px 10px;
    top:10px;
    left:20px;
    font-size: 24px;
    align-items: center;
    margin:20px;


}
&& img{
    grid-area:1/1/3/2;
    width:100px;
    height:100px;
    border-radius:50%;
    position:relative;
    top:10px;
    left:20px;
}
&& input{
    margin:5px;
    width:400px;
    height: 50px;
    font-size: 24px;
    color:black
    border-radius: 3px;
}
&& label{
    width:400px;
    height: 50px;
    color: #fff;
    border: 1px solid #afafaf;
    border-radius: 3px;
    background-color:#afafaf;
padding:10px 10px;


}
&& button{
    width:200px;
    height: 40px;
    font-size: 18px;
}

`



export const FormPerson = ({ person, setValue }) => {

    return (
        <FormPersonStyle action="hz" name="resume" autocomplite="Введите данные о себе">
            <fieldset>
                <legend><h3>Персональные данные</h3></legend>
                <img src={Avatar} alt="vatar"></img>
                <div>

                    <label>
                        "Фамилия Имя Отчество"
                    </label>
                    <InputName
                        placeholder="Иванов Иван Иванович"
                        value={person.valueName}
                        onChange={e => setValue({...person, valueName: e.target.value})}
                        type="text"
                        minLength="4" maxLength="40">
                    </ InputName>


                    <label>
                        Дата рождения
                    </label>
                    <InputAge
                        placeholder="Дата рождения"
                        value={person.Age}
                        onChange={e => setValue({...person, Age: e.target.value})}
                        type="date"
                        minLength="3" maxLength="20">
                    </ InputAge>
                    <label>
                        Специальность
                    </label>
                    <InputProfessional
                        value={person.Professional}
                        onChange={e => setValue({...person, Professional: e.target.value})}
                        type='text'
                        placeholder='Ваша профессия' minLength="3" maxLength="20">
                    </ InputProfessional>
                    <label>
                        Телефон
                    </label>
                    <InputPhone
                        value={person.Phone}
                        onChange={e => setValue({...person, Phone: e.target.value})}
                        type='tel'
                        placeholder='Ваш номер телефона +380' minLength="3" maxLength="20">

                    </InputPhone>
                    <label>
                        Электронная почта
                    </label>
                    <InputEmail
                        value={person.Email}
                        onChange={e => setValue({...person, Email: e.target.value})}
                        type='email'
                        placeholder='Укажите адрес электронной почты' minLength="3" maxLength="20"
                        />

{/* <ButtonForm  classname={"button_style"} onClick={person} label="Добавить"/> */}

                </div>

            </fieldset>

        </FormPersonStyle >
    );
};