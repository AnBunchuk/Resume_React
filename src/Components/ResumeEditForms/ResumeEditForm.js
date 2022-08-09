import React from 'react';
import Styled from 'styled-components';

import { FormAllInput } from './FormAllInput';

import { FormEdit } from "./FormEdit"; //здесь редактируем введенную инфу(при необходимости удаляем)


export const ResumeEditFormStyled = Styled.main`{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 20px;
    border: 1px solid #ccc;
    border-radius: 2px;
    color: lightslategray;
}`

export const ResumeEditForm = ({ person, setValue, skill, setSkill, review, setReview }) => {



    return (
        <ResumeEditFormStyled>
            <FormAllInput
                person={person} setValue={setValue}
                skill={skill} setSkill={setSkill}
                review={review} setReview={setReview}
            >
            </FormAllInput>
            <FormEdit
                person={person} setValue={setValue}
                skill={skill} setSkill={setSkill}
                review={review} setReview={setReview}
            >
            </FormEdit>

        </ResumeEditFormStyled>
    )


}