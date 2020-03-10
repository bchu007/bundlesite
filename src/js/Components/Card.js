import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const CardWrapper = styled.span`
    height: auto;
    width: 250px;
    border: black solid solid;
    display: inline-block;
    /* border-radius: 5%;  */
    background-color: darkgrey;
    padding: 20px;
    margin: 7px;
    font-family: Poppins;

    @media (max-width: 650px){
        width: calc(95vw - 65px);

    }
`;

const CardText = styled.div`
    word-wrap: break-word;
`;

const ImgWrapper = styled.img`
    margin: 0 auto;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
`;
export default function Card() {
    return (
        <CardWrapper>
            <ImgWrapper src="https://via.placeholder.com/500" />
            <h1>Card Title</h1>
            <CardText>
                Hello this is a test of how this should work so why don't you give it a try

            </CardText>
        </CardWrapper>
    )
}