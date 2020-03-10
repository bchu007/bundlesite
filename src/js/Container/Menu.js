import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import MenuItem from '../Components/MenuItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import useWindowSize from '../../js/CustomHooks/useWindowSize'

const MenuWrapper = styled.span`
    display: flex;
    justify-content: space-between;
    align-content: center;
    background-color: black;
    color: goldenrod;
    flex-wrap: wrap;
    margin: 5px 0px;
    padding-right: 10px;

    @media (max-width: 900px) {
        display: none;
    }

`
const MenuCondensedWrapper = styled.span`
    display: flex;
    background-color: black;
    color: goldenrod;
    margin: 20px 0px;
    padding: 0px 20px;
    @media (min-width: 900px) {
        display: none;
    }

    @media (max-width: 414px) {
        display: none;
    }
`;

const MenuBelowWrapper = styled.div`
    display: flex;
    /* justify-content: space-between; */
    flex-direction: column;
    text-align: center;
    background-color: rgba(10, 10, 10, 1);
    color: goldenrod;
    /* flex-wrap: wrap; */
    margin: 5px 0px;
    padding-right: 10px;
    width: 100vw;

    @media  (min-width: 900px) {
        display: none;
    }

`


export default function Menu() {
    const [expanded, setExpanded] = useState(false);
    const size = useWindowSize();

    function toggleMenu () {
        expanded ? setExpanded(false) : setExpanded(true);
        console.log(expanded)
    }

    const headerItems = (
        <React.Fragment>
            <MenuItem name="Account & Lists"></MenuItem>
            <MenuItem name="EN"></MenuItem>
            <MenuItem name="Returns & Orders"></MenuItem>
            <MenuItem name="Cart"></MenuItem>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            {console.log(size)}
            <MenuWrapper>
                {headerItems}
            </MenuWrapper>
            

            <MenuCondensedWrapper onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} size='2x'/>
            </MenuCondensedWrapper>


            {
                (expanded) ? (
                <MenuBelowWrapper>
                    {headerItems}
                </MenuBelowWrapper>
                ) : (<React.Fragment />)
            }
        </React.Fragment>
        
    )
}