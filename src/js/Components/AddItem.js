import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Link, navigate } from '@reach/router'

const BuyWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-self: flex-end;
`


const CartButton = styled.div`

    width: 150px;
    padding: 3px;
    background-color: orange;
    text-align: center;
    padding: 3px;
    border-radius: 3px;


    &:hover {
        box-shadow: 2px 2px 2px black;
    }

`

export default function AddItem(props) {

  return (
    <BuyWrapper onClick={() => {
      props.addCart(props.product);
      navigate('/Cart');
      // console.log('clicked on add item')
      }}>
        <CartButton>
          Add to Cart
          <FontAwesomeIcon icon={faCartPlus} />
        </CartButton>
    </BuyWrapper>
  )
}
