import React from 'react';
import Styled from 'styled-components';



import { FormPerson } from './FormPerson';
import { FormSkill } from './FormSkill';
import { FormReview } from './FormReview';
import { ButtonForm } from './ButtonForm';



const FormAllInputStyle = Styled.section`{

    }

`

export const FormAllInput = ({person, setValue, skill, setSkill, review, setReview}) => {

   

    return (
        <FormAllInputStyle>
            <FormPerson person={person} setValue={setValue}></FormPerson>
            <FormSkill skill={skill} setSkill={setSkill}></FormSkill>
            <FormReview review={review} setReview={setReview}></FormReview>

<ButtonForm className={"button_style"} label="Опубликовать"/>
        </FormAllInputStyle>
    );
}