import React from 'react'
import styled from 'styled-components'
import SearchBar from '../Components/Search'
import Menu from '../Container/Menu'
import { fullscreen, halfscreen, mobilescreen } from '../../css/variables'

const NavBar = styled.div`
    height: 100%;
    background-color: black;
    white-space: nowrap;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
`;

const LogoWrapper = styled.img`
    height: 35px;
    width: 100px;
    margin: 5px;

    @media (max-width: 700px) {
        margin: 10px auto;
    }
`;

export default function Navigation() {

    return (
        <NavBar>

            <LogoWrapper src="https://via.placeholder.com/100x50" />
            <Menu />
        </NavBar>
    )
}
