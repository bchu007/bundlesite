import React, {useState, useEffect} from 'react'
import { Router, Route, Link, Redirect, navigate  } from "@reach/router"
import ReactDOM from 'react-dom'
import Navigation from './js/Container/Navigation'
import StoreFront from './js/Container/Storefront'
import Details from './js/Container/Details'
import Cart from './js/Container/Cart'
import CartData from './js/Data/cart.json'

import GlobalStyle from './css/styles'
import { faPassport } from '@fortawesome/free-solid-svg-icons'


function WebContainer() {

    const [cartOpen, setCartOpen] = useState(false);
    const [mode, setMode] = useState('Storefront');
    const [itemCount, setItemCount] = useState(CartData.map(item => item.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0));


    const getItemCount = () => {
        setItemCount(cart.map(item => item.quantity)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0))
    }

    var productDummy = {
        name: 'productname',
        description: `this is a product description and
        it should be around 500 words long`,
        images: 'https://via.placeholder.com/500',
        rating: 5,
        product_id: 1
    }

    const [product, setProduct] = useState(productDummy);

    const [cart, setCart] = useState(CartData);
    const [purchased, setPurchased] = useState();
    function addCart(product) {
        var item_index = cart.map(item => item.product_id).indexOf(product.product_id);
        var newCart = cart;
        setPurchased(product);

        if(item_index !== -1) {
            if(product.quantity) {
                //product quantity is being changed in cart
                newCart[item_index].quantity = product.quantity;
            }
            else {
                //product is in cart, adding another one
                newCart[item_index].quantity += 1;
            }
        }
        else {
            //product doesn't exist in cart yet
            product['quantity'] = 1;
            newCart.push(product);
        }
        setCart(newCart)

        getItemCount();
    }


    function removeCart(id) {
        setCart(cart.filter(product => parseInt(product.product_id) !== parseInt(id) ));
        getItemCount();
    }


    return (
        <React.Fragment>
            <GlobalStyle />
            <Navigation itemCount={itemCount} setPurchased={setPurchased}/>
            <Router primary={false}>
                <Redirect
                    from="/"
                    to="bachi"
                />
                <Details path='product/:id'
                    addCart={addCart}
                    removeCart={removeCart}/>
                <Cart path='Cart'
                    addCart={addCart}
                    removeCart={removeCart}
                    cart={cart}
                    setPurchased={setPurchased}
                    purchased={purchased}/>
                <StoreFront  path='/:category' mode={setMode}
                    product={productDummy}
                    change={setProduct}
                    addCart={addCart}
                    removeCart={removeCart}/>


            </Router>
        </React.Fragment>
    )
}



const Basket = props => {
    return (
        <React.Fragment>
            <Cart />

        </React.Fragment>
    )
}

const Product = props => {

}
const wrapper = document.getElementById("site-container");
wrapper ? ReactDOM.render(<WebContainer />, wrapper) : false;
