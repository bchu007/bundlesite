import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const SearchWrapper = styled.input`
    display: flex;
    align-self: center;
    width: 260px;
    margin: 10px 15px;
    padding: 5px;
    height: 20px;
    font-family: Poppins;
    border-radius: 30px;

    @media (max-width: 715px) {
        margin: 20px;
    }

    @media (max-width: 414px) {
        width: calc(90vw - 20px);
    }
`
export default function SearchBar() {
    return (
        <React.Fragment>
            {/* <FontAwesomeIcon icon={ faSearch } /> */}
            <SearchWrapper>
            </SearchWrapper>
        </React.Fragment>
        
    )
}