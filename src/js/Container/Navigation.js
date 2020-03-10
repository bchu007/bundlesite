import React from 'react'
import styled from 'styled-components'
import SearchBar from '../Components/Search'
import Menu from '../Container/Menu'

const NavBar = styled.div`
    height: auto;
    background-color: black;
    padding: 2px;
    white-space: nowrap;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
`;

const LogoWrapper = styled.img`
    height: 50px;
    width: 100px;
    margin: 10px;
`;

export default function Navigation() {

    return (
        <NavBar>

            <LogoWrapper src="https://via.placeholder.com/100x50" />
            <SearchBar />
            <Menu />
        </NavBar>
    )
}