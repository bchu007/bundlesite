import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import useDimensions from 'react-use-dimensions'
import {fullscreen, halfscreen, mobilescreen} from '../../css/variables'

const SearchWrapper = styled.form`
    display: inline-flex;
    height: 28px;
    width: auto;
    padding: 2px;
    margin: auto 0;

    @media (max-width: 700px) {
        width: calc(90vw - 20px);
        margin: auto;

    }
`;

const SearchInput = styled.input`
    display: inline-flex;
    width: 200px;
    padding: 0px 5px;
    border: 0;
    height: 28px;
    font-family: Poppins;


`
const SearchSelect = styled.select`
    width: auto;
    display: inline-flex;
    border: none;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    height: 28px;
    font-size: .5em;
    padding-left: 4px;
    background-color: darkgrey;
    text-rendering: auto;
    align-items: center;
    color: black;
    -webkit-appearance: menulist;
    max-width: 222px;
    cursor: default;
`;

const SearchButton = styled.button`
    padding: 0 10px;
    display: inline-flex;
    border: none;
    height: 28px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    background-color: lightcoral;
`;

const SearchOption = styled.option`
    background-color: whitesmoke;
`;

const PseudoSearchSelect = styled.select`
    display: none;

`;

export default function SearchBar() {
    // const [select, setSelect] = useState('hello')
    return (
        <SearchWrapper>

            <SearchSelect>
                <SearchOption>couples</SearchOption>
                <SearchOption>friends</SearchOption>
                <SearchOption>family</SearchOption>
                <SearchOption>self</SearchOption>
                <SearchOption>stranger</SearchOption>
            </SearchSelect>

            <SearchInput />
            <SearchButton>
                <FontAwesomeIcon icon={ faSearch } />
            </SearchButton>

        </SearchWrapper>

    )
}
