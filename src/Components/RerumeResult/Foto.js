import React from 'react';
import Styled from 'styled-components';
import Avatar from '../Avatar/ava.jpg'

export const FotoStyle = Styled.img`
{
margin:20px;
width:100px;
height:100px;
border-radius:50%;
border: 1px solid white;
}`


export const Foto = () => {
    return (
<FotoStyle src={Avatar} alt='vatar'>

</FotoStyle>
    )
};