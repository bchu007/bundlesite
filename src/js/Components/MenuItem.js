import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const ItemWrapper = styled.span`
    display: inline-block;
    padding: 6px 15px;
    font-family: Poppins;

    &:hover {
        padding: 5px 14px;
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
