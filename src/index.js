import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Navigation from './js/Container/Navigation'
import StoreFront from './js/Container/Storefront'
import GlobalStyle from './css/styles'

function WebContainer() {
    const [cartOpen, setCartOpen] = useState(false);
    return (
        <React.Fragment>
            <GlobalStyle />

            <Navigation />
            <StoreFront />
        </React.Fragment>
    )
}


const wrapper = document.getElementById("site-container");
wrapper ? ReactDOM.render(<WebContainer />, wrapper) : false;
