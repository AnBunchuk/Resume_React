import React from 'react';
import { useState } from 'react';
// import {WindowFin} from './Components/ResumeEditForms/WindowFin'

import { createGlobalStyle } from 'styled-components';
import { ResumeEditForm } from './Components/ResumeEditForms/ResumeEditForm'


const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
#root {


}
`



export const App = () => {

  const [person, setValue] = useState({ valueName: '', Age: '', Professional: '', Phone: '', Email: '' });
  const [skill, setSkill] = useState([])
  const [review, setReview] = useState([])


  return (
    <>
      <GlobalStyle />
      <ResumeEditForm
        person={person}
        setValue={setValue}
        skill={skill}
        setSkill={setSkill}
        review={review}
        setReview = {setReview}
      />

    </>
  )
};

