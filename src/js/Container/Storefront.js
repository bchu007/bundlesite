import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Card from '../Components/Card'
import {Route} from '@reach/router'
import Data from '../Data/products.json'

const StoreWall = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color: grey;
`
const StoreWrapper = styled.div`
    margin: 0 auto;
    background-color: white;
    height: 100%;
    padding: 10px;
    margin-left: 50px;
`;

const CardWrapper = styled.div`
    margin: 0 auto;
    width: 95vw;
`;



function getProducts(page, props) {
    var products_url = Data.filter(x => x.group === page).map(product => {
        return (
            <Card
                mode={props.mode}
                product={product}
                key={product.product_id}
                url={product.url}
                name={product.name}
                addCart={props.addCart}
                removeCart={props.removeCart}
                // price={product.price}
                description={product.description} />
        )
    })
    return products_url;
}

const StoreFront = props => {

    return (
        <StoreWrapper >
            <CardWrapper>
                {getProducts(props.category, props)}
            </CardWrapper>
        </StoreWrapper>

    )
}

export default StoreFront;
