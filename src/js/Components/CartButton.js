import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ItemWrapper = styled.span`
    display: inline-flex;
    padding: 6px 15px;
    font-family: Poppins;
    color: orange;
    font-size: 12pt;
    &:hover {
        padding: 5px 14px;
        border: white solid 1px;
    }
`
const Badge = styled.span`
    padding-left: 10px;
    padding-right: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;

    font-size: 10px;
    background: red;
    opacity: .9;
    color: #fff;
    padding: 0 6px;
    vertical-align: top;
    margin-left: -8px;
    height: 15px;
`

// .label - warning[href],
// .badge - warning[href] {
//     background - color: #c67605;
// }

const CartTitle = styled.span`
    @media (max-width: 350px) {
        display: none;
    }
`;

export default function CartButton(props) {

    const [label, setLabel] = useState('label')
    // setLabel(props.name)

    return (
        <Link to={props.name} onClick={() => props.expanded(false)}>
            <ItemWrapper>
                <CartTitle>My Cart</CartTitle>
                &nbsp;
                <FontAwesomeIcon icon={faShoppingCart} size='2x' />
                <Badge> {props.itemCount}</Badge>
            </ItemWrapper>
        </Link>
    )
}
