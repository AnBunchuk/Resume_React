import React from 'react';
import Styled from 'styled-components';


export const InputAgeStyle = Styled.input`{

}`

export const InputAge=({...props})=>{
    
    return(
<InputAgeStyle {...props}>
</InputAgeStyle>
    )
}