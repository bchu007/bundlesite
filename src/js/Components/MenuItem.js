import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const ItemWrapper = styled.span`
    display: inline-block;
    padding: 9px;
    margin-left: 10px;
    font-family: Poppins;

    &:hover {
        padding: 8px;
        border-radius: 5%;
        border: white solid 1px;
    }
`



export default function MenuItem(props) {

    const [label, setLabel] = useState('label')
    // setLabel(props.name)

    return (

        <ItemWrapper>
            {props.name}
        </ItemWrapper>
    )
}