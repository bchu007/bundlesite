import React from 'react'
import styled from 'styled-components'
import AddItem from '../Components/AddItem'

const DetailsWrapper = styled.div`
    display: inline-flex;
    justify-content:space-evenly;
    width: 100vw;
    height: 100%;
    background-color: grey;
    padding: 20px;
    margin: 0 auto;
`;

const ProductImg = styled.img`
    height: 422px;
    background-color: white;
    padding: 10px;
    border-radius: 4px;
    border: thin black solid;

    @media (max-width: 400px) {
      height: 100%;

    }
`;

const ProductDetails = styled.div`
    display: inline-block;

    width: 40vw;
    border: thin solid purple;
    vertical-align: top;
    padding: 10px;
    margin: 10px;
    background-color: black;
    color: white;
    font-family: Poppins;
    word-wrap: normal;
`

const ProductName = styled.h1`

`

const ProductDetailsWrapper = styled.div`
  height: 50vh;
  overflow: auto;
  overflow-x: hidden;
`;

const ProductDescription = styled.div`
  width: auto;
  height: auto;
  white-space: pre-wrap;
  -moz-tab-size: 50; /* Firefox */
  -o-tab-size: 50; /* Opera 10.6-12.1 */
  tab-size: 50;
`

export default function Detail(props) {

  return (


    <DetailsWrapper>
      <ProductImg src={props.location.state.url} />

      <ProductDetails>
        <ProductDetailsWrapper>
          <ProductName>
            {props.location.state.name}

          </ProductName>
          <ProductDescription>
            {props.location.state.description}
          </ProductDescription>
        </ProductDetailsWrapper>

        <AddItem addCart={props.addCart} removeCart={props.removeCart} product={props.location.state.product}/>
      </ProductDetails>

    </DetailsWrapper>
  )
}
