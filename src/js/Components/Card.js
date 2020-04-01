import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import {Link, navigate} from '@reach/router'


const CardWrapper = styled.span`
    height: 420px;
    width: 238px;
    border: thick solid darkslateblue;
    display: inline-block;
    /* border-radius: 5%;  */
    background-color: black;
    color: white;
    padding: 16px;
    margin: 7px;
    font-family: Poppins;
    vertical-align: top;

    @media (max-width: 650px){
        width: calc(100vw - 90px);

    }

    &:hover {
        background-color: green;
    }
`;

const CardText = styled.div`
    height: 100px;
    word-wrap: break-word;
    font-size: 13px;
    overflow: hidden;
`;

const ImgWrapper = styled.img`
    margin: 0 auto;
    margin-left: auto;
    margin-right: auto;
    width: 238px;
    height: 238px;
    background-color: white;

    @media (max-width: 650px){
        width: 100%;
        margin: 0 auto;
        /* background-size: contain; */

    }

`;

const CardTitle = styled.div`
    font-size: 16px;
    height: 40px;
    overflow: hidden;
    &:hover {
        text-decoration: underline;
    }
`;

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

const BuyWrapper = styled.div`
    position: relative;
    bottom: 0px;
    display: flex;
    justify-content: center;
`


export default function Card(props) {
    const newpath = '/product/' + props.product.product_id;
    const [hover, setHover] = useState(false);

    return (
        // <Link to={newpath} state={
        //         {url: props.url,
        //         name: props.name,
        //         description: props.description}
        //     } onMouseDown={e => e.stopPropagation()}>
            <CardWrapper onMouseEnter={() => setHover(true) }
                onMouseLeave={() => setHover(false)}
                onClick={() => navigate(newpath, {state: {
                    url: props.url,
                    name: props.name,
                    description: props.description,
                    product: props.product,
                    // addCar: props.addCart,

                    // removeCart: props.removeCart
                }})}
                >

                <ImgWrapper src={props.url} />
                <CardTitle>{props.name}</CardTitle>
                <CardText>
                    {props.description}
                </CardText>

                {
                    hover &&
                    <BuyWrapper onClick={(e) => {

                        e.stopPropagation();
                        props.addCart(props.product)
                        navigate('/Cart');
                        }}>
                        {/* <Link to={'/Cart'} style={{ textDecoration: 'none' }}
                            state={props} onClick={() => props.mode('Cart')}> */}
                        <CartButton >
                            Add to Cart&nbsp;
                            <FontAwesomeIcon icon={faCartPlus} />
                        </CartButton>

                        {/* </Link> */}
                    </BuyWrapper>
                }




            </CardWrapper>
        // </Link>
    )
}
