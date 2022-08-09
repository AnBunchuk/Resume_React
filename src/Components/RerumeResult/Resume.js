import React from 'react';
import Styled from 'styled-components';

import {Foto} from './Foto';
import {InfoBlock} from './InfoBlock';
import {WorkHistory} from './WorkHistory';




export const ResumeStyle = Styled.main`{

}`

export const Resume = () =>{
    return(
        <ResumeStyle>
            <Foto></Foto>
            <InfoBlock></InfoBlock>
            <WorkHistory></WorkHistory>
        </ResumeStyle>
    )
}