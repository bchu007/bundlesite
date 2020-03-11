import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import MenuItem from '../Components/MenuItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import useWindowSize from '../../js/CustomHooks/useWindowSize'
import SearchBar from '../Components/Search'
import { fullscreen, halfscreen , mobilescreen } from '../../css/variables'


const MenuWrapper = styled.span`
    display: flex;
    justify-content: space-between;
    background-color: black;
    color: goldenrod;
    flex-wrap: wrap;
    padding-right: 10px;

    @media (max-width: 1067px) {
        display: none;
    }

`
const MenuCondensedWrapper = styled.span`
    display: flex;
    background-color: black;
    color: goldenrod;

    @media (min-width: 1067px) {
        display: none;
    }

    @media (max-width: 600px) {
        display: none;
    }
`;

const MenuBelowWrapper = styled.div`
    display: flex;
    /* justify-content: space-between; */

    text-align: center;
    background-color: rgba(10, 10, 10, 1);
    color: goldenrod;
    /* flex-wrap: wrap; */
    margin: 5px 0px;
    padding-right: 10px;
    width: 100vw;


    @media  (min-width: 1067px) {
        display: none;
    }

`;

const IconWrapper = styled.span`
    display: inline-block;
    margin: auto 15px;;
    border-radius: 3px;
    padding: 2px 4px;
    border: thin midnightblue solid;
`;

const MenuMobile = styled.div`
    font-size: .7em;
    display: flex;
    justify-content: left;
    flex-direction: column;
    text-align: center;
    background-color: rgba(10, 10, 10, 1);
    color: goldenrod;
    flex-wrap: wrap;
    margin: 5px 0px;
    padding-right: 10px;
    width: 100vw;

    @media (min-width: 600px) {
        display: none;
    }
`;
export default function Menu() {
    const [expanded, setExpanded] = useState(false);
    const size = useWindowSize();
    function toggleMenu () {
        expanded ? setExpanded(false) : setExpanded(true);
        console.log(expanded)
    }

    function headerItems()  {

        return (
            <React.Fragment >
                <MenuItem   name="Account & Lists"></MenuItem>
                <MenuItem name="EN"></MenuItem>
                <MenuItem name="Returns & Orders"></MenuItem>
                <MenuItem name="Cart"></MenuItem>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>

            <MenuWrapper>
                <SearchBar/>
                {headerItems()}
            </MenuWrapper>


            <MenuCondensedWrapper>
                <SearchBar />
                <IconWrapper onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} size='2x' />
                </IconWrapper>
            </MenuCondensedWrapper>


            {
                (expanded) ? (
                <MenuBelowWrapper>
                    {headerItems()}
                </MenuBelowWrapper>
                ) : (
                    <MenuMobile>
                        <SearchBar />
                        {headerItems()}
                    </MenuMobile>
                )
            }


        </React.Fragment>

    )
}
