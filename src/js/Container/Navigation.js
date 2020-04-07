import React from 'react'
import styled from 'styled-components'
import SearchBar from '../Components/Search'
import Menu from '../Container/Menu'
import { fullscreen, halfscreen, mobilescreen } from '../../css/variables'
import { Link } from '@reach/router'
const NavBar = styled.div`
    height: 100%;
    background-color: black;
    white-space: nowrap;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
`;



export default function Navigation(props) {
    return (
        <NavBar onClick={() => props.setPurchased()}>
            <Menu itemCount={props.itemCount}/>
        </NavBar>
    )
}
