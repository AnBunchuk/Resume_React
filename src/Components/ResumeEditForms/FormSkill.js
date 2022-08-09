import React from 'react';
import Styled from 'styled-components';
import { useState } from 'react';

import { InputSkill } from './InputSkill';
import { ButtonForm } from './ButtonForm';

export const FormSkillStyle = Styled.form`
{
    display: grid;
    grid-template-columns: 1fr;
    margin:10px;
}
&& fieldset{
    display: grid;
    grid-template-columns: 1fr;
    // margin: 10px;
}
&& h3{
    margin: 10px;
}
&& input{
    margin:20px;
    width:95%;
    height: 50px;
    font-size: 24px;
    color:black
    // border-color: #afafaf;
    border-radius: 3px;
}
&& button{
    margin:20px;
    width:200px;
    height: 40px;
    font-size: 18px;
}
`

// export const skillAll = [];



export const FormSkill = ({ skill, setSkill }) => {

    const [resetButton, setResetButton] = useState('');

    function addSkill(e) {
        // убираем перезагрузку страницы после нажатия кнопки "добавить"
        e.preventDefault();
        // меняем поле skill добавляя к старому полю новый скил
        //  из поля value изменение которого отслеживает resetButton
        setSkill([...skill, resetButton])
    // удаление данных из полей ввода
        setResetButton('')
    }

    return (
        <FormSkillStyle action="hz" name="skill" autocomplite="Профессиональные качества">

            <fieldset>
                <legend><h3>Профессиональные навыки</h3></legend>

                <InputSkill
                    value={resetButton}
                    onChange={e => setResetButton(e.target.value)}
                    type='text'
                    placeholder='Ваш опыт' minLength="3" maxLength="100">
                </InputSkill>
                <ButtonForm onClick={addSkill} label="Добавить" />

            </fieldset>

        </FormSkillStyle >
    )
};