import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Card from '../Components/Card'
const StoreWrapper = styled.div`
    height: 100%;
    background-color: grey;
    padding: 10px;
`;

const CardWrapper = styled.div`
    margin: 0 auto;
    width: 95vw;
`;

export default function StoreFront() {

    return (
        <StoreWrapper>
            <CardWrapper>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </CardWrapper>
        </StoreWrapper>
    )
}
