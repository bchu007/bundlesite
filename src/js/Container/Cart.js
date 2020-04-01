import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Card from '../Components/CartItem'
import CartData from '../Data/cart.json'
import Moment from 'react-moment';

const CartWrapper = styled.div`

  width: 900px;
  margin: 0 auto;
  margin-top: 10px;
  font-family: Poppins;

  @media (max-width: 1000px) {
    width: 90vw;
  }
`;
const CartImg = styled.img`
  height: 150px;
  width: 150px;
  float: left;
  margin: 10px;
  margin-right: 30px;
`;

const CartItemHeaderWrapper = styled.div`
  height: 40px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 10px 14px;
  margin-top: 10px;
  border-left: thin solid darkgrey;
  border-top: thin solid darkgrey;
  border-right: thin solid darkgrey;
  background-color: whitesmoke;
`;
const CartItem = styled.div`
  height: 200px;
  border: thin darkgrey solid;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  color: black;
  margin-bottom: 10px;
  padding: 10px;
`;
const CartHeader = styled.div`
  display: inline-flex;
  align-content: space-around;

  width: 100%;
`;
const CartHeaderTitle = styled.h1`
  display: inline-block;
  float: left;
`;

const CartHeaderSearch = styled.input`
  display: flexbox;
  right: 0px;
  margin: 4px;
  height: 20px;
`;
const CardItemHeader = styled.div`
  height: 30px;
  font-size: .6em;
  margin: 5px;
  margin-right: 24px;
  margin-bottom: 0;
`;

const CardItemHeaderContent = styled.div`
  display: block;
  margin-top: 2px;
  font-family: Arial, Helvetica, sans-serif;
`;
const FloatLeftWrapper = styled.div`
  display: inline-flex;
  width: 400px;
  align-content: space-between;
  float: left;

`;
const FloatRightWrapper = styled.div`
  float: right;
`;

const QuantityWrapper = styled.div`

`;
const QuantityLabel = styled.div`

`;
const QuantitySelector = styled.select`
  border-radius: 3px;
`;

const DeleteItemButton = styled.span`
  font-size: .7em;
  margin: 0px 7px;
  color: navy;

  &:hover {
    text-decoration: underline;
    color: orange;
  }
`;


const Stocked = styled.div`
  font-size: .7em;
  margin: 3px 0px;
  color: ${props => props.stocked ? `green` : `red`};
`;

const CheckoutButton = styled.button`
  margin-top: 30px;
  margin-left: 40px;
  float: right;
  width: 150px;
  height: 30px;
  padding: 3px;
  background-color: orange;
  text-align: center;
  padding: 3px;
  border-radius: 3px;


  &:hover {
      box-shadow: 2px 2px 2px black;
  }
`;

const Cart = props => {
  var date = new Date();

  var cartitems = props.cart.map((item, index) => {
    return (
      <React.Fragment key={index.toString()}>
        <CartItemHeaderWrapper>
          <FloatLeftWrapper>
            <CardItemHeader>
              ORDER PLACED
              <CardItemHeaderContent>
                <Moment format="MM/DD/YYYY">
                  {date}
                </Moment>
              </CardItemHeaderContent>
            </CardItemHeader>
            <CardItemHeader>
              TOTAL
              <CardItemHeaderContent>
                Total Price
              </CardItemHeaderContent>
            </CardItemHeader>
            <CardItemHeader>
              SHIP TO
              <CardItemHeaderContent>
                Buyer
              </CardItemHeaderContent>
            </CardItemHeader>
          </FloatLeftWrapper>
          <FloatRightWrapper>

          </FloatRightWrapper>
        </CartItemHeaderWrapper>
        <CartItem>
          <CartImg src={item.url}/>
          <div>
            <b>{item.name}</b>
          </div>
          <Stocked stocked={item.quantity > 0}>
            {
              (item.quantity > 0) ? "In Stock" : "Out of Stock"
            }
          </Stocked>
          <QuantityWrapper>
            <QuantitySelector onClick={(event) => {
              console.log(event.target.value);
              if (parseInt(event.target.value) === 0) {
                props.removeCart(item.product_id);
                console.log('reove thi item', item.product_id)
              }
              else if(parseInt(event.target.value) !== item.quantity) {
                var refreshedItem = item;
                refreshedItem['quantity'] = parseInt(event.target.value);
                props.addCart(refreshedItem);

              }
            }}>
              <option value={item.quantity} selected disabled hidden>Qty: {item.quantity}</option>


              {Array.from(Array(10).keys()).map(number => {
                return (
                  <option value={number + 1}>
                    {number + 1}
                  </option>
                )
              })}
              <option value="0">0 (Delete)</option>
            </QuantitySelector>
            &nbsp;
            <DeleteItemButton onClick={() => {
              props.removeCart(item.product_id);
            }}>
              Delete
            </DeleteItemButton>
          </QuantityWrapper>


        </CartItem>
      </React.Fragment>



    )
  })
  return (
    <CartWrapper>
      <CartHeader>
        <CartHeaderTitle>Your Orders</CartHeaderTitle>
        <CheckoutButton>
          Checkout
      </CheckoutButton>
      </CartHeader>

      {cartitems}

    </CartWrapper>

  )
}

export default Cart;
