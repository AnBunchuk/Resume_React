import React from 'react';
import Styled from 'styled-components';


export const InputNameStyle = Styled.input`{
    // width:100%;
    // hight: 150px;
// margin:10px;
}`

export const InputName=({...props})=>{
    
    return(
<InputNameStyle {...props}>

</InputNameStyle>
    )
}