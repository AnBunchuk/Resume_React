import React from 'react';
import Styled from 'styled-components';


export const InputEmailStyle = Styled.input`{

}`

export const InputEmail=({...props})=>{
    
    return(
<InputEmailStyle{...props}>
</InputEmailStyle>
    )
}