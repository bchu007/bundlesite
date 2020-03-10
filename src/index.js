import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './js/Container/Navigation'
import StoreFront from './js/Container/Storefront'
import GlobalStyle from './css/styles'

function WebContainer() {
    return (

            <React.Fragment>
                <GlobalStyle />
                <Navigation />
                <StoreFront>

                </StoreFront>
            </React.Fragment>
    )
}


const wrapper = document.getElementById("site-container");
wrapper ? ReactDOM.render(<WebContainer />, wrapper) : false;