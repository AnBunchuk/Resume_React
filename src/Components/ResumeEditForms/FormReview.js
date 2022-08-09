import React from 'react';
import Styled from 'styled-components';
import { useState } from "react";

import { InputFirma } from './InputFirma';
import { InputYearsOfWork } from './InputYearsOfWork';
import { InputReviewWork } from './InputReviewWork';
import { InputYearsOfWorkEnd } from './InputYearsOfWorkEnd';
import { ButtonForm } from './ButtonForm';


export const FormReviewStyle = Styled.form`
    {
        display: grid;
        grid-template-columns: 1fr;
        margin:10px;
    }
    && fieldset{
        display: grid;
        // grid-template-columns: 1fr;
        // margin: 10px;
    }
    && h3{
        margin: 10px;
    }
    && label{
        width:400px;
        height: 50px;
        font-size: 24px;
        color: #fff;
        border: 1px solid #afafaf;
        border-radius: 3px;
        background-color:#afafaf;
        padding:10px 10px;
    }
    && input{
        width:400px;
        height: 50px;
        font-size: 24px;
        color: black;
        padding:10px;
      }
    && div{
        margin:20px;
        display: grid;
        grid-template-columns: 49% 49%;
    }
    && button{
        margin:30px 0 ;
        width:200px;
        height: 40px;
        font-size: 18px;
    }
    && article{
        margin:20px;
        display: grid;
        grid-template-columns: 1fr;
    }
&& article input{
    width:100%;
    height: 50px;
    font-size: 24px;
    color:black
    border-radius: 3px;
}

    `

export const FormReview = ({ review, setReview }) => {

    const [resetButton, setResetButton] = useState({ firma: '', yearOn: '', yearOf: '', story: '' });
// удаление данных из полей ввода
    function addReview(e) {
        e.preventDefault();
        if (resetButton.firma === '' || resetButton.yearOn === '' || resetButton.yearOf === '' || resetButton.story === '') return;
        setReview([...review, resetButton])
        setResetButton({ firma: '', yearOn: '', yearOf: '', story: '' })
    }



    return (
        <FormReviewStyle>
            <fieldset>
                <legend><h3>Трудовой стаж/проекты</h3></legend>
                <div>
                    <label>Название Компании</label>
                    <InputFirma
                        value={resetButton.firma}
                        onChange={e => setResetButton({ ...resetButton, firma: e.target.value })}
                        type='text'
                        placeholder='Название Фирмы' minLength="3" maxLength="20">
                    </InputFirma>
                </div>

                <div>
                    <InputYearsOfWork
                        value={resetButton.yearOn}
                        onChange={e => setResetButton({ ...resetButton, yearOn: e.target.value })}
                        type='date'
                        placeholder='дата начала работ' minLength="3" maxLength="20">
                    </InputYearsOfWork>
                    <InputYearsOfWorkEnd
                        value={resetButton.yearOf}
                        onChange={e => setResetButton({ ...resetButton, yearOf: e.target.value })}
                        type='date'
                        placeholder='дата окончания работ' minLength="3" maxLength="20">
                    </InputYearsOfWorkEnd>
                </div>
                <article>
                    <InputReviewWork
                        value={resetButton.story}
                        onChange={e => setResetButton({ ...resetButton, story: e.target.value })}
                        rows='7' cols="45"
                        name="text" placeholder="Опишите работу" maxLength="300">
                    </InputReviewWork>
                    <ButtonForm className={"button_style"}
                        onClick={addReview}
                        label="Добавить" />
                </article>

            </fieldset>
        </FormReviewStyle>
    )
}