import React, {useState, useEffect} from 'react';
import styled, { css } from 'styled-components'
import CartButton from '../Components/CartButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import useWindowSize from '../../js/CustomHooks/useWindowSize'
import SearchBar from '../Components/Search'
import { fullscreen, halfscreen , mobilescreen } from '../../css/variables'
import { Link } from '@reach/router'
import TKO from '../../assets/tko_logo.png'
import Data from '../Data/products.json'
const MenuWrapper = styled.span`
    display: flex;
    justify-content: space-between;
    align-content:center;
    background-color: black;
    color: goldenrod;
    flex-wrap: wrap;
    padding-right: 10px;
    width: 100vw;
    height: 60px;
    z-index: 10;
`
// const MenuCondensedWrapper = styled.span`
//     display: flex;
//     background-color: black;
//     color: goldenrod;

//     @media (min-width: 1067px) {
//         display: none;
//     }

//     @media (max-width: 600px) {
//         display: none;
//     }
// `;

// const MenuBelowWrapper = styled.div`
//     display: flex;
//     /* justify-content: space-between; */

//     text-align: center;
//     background-color: rgba(10, 10, 10, 1);
//     color: goldenrod;
//     /* flex-wrap: wrap; */
//     margin: 5px 0px;
//     padding-right: 10px;
//     width: 100vw;


//     @media  (min-width: 1067px) {
//         display: none;
//     }

// `;

const IconWrapper = styled.span`
    display: inline-flex;
    margin: auto 15px;;
    border-radius: 3px;
    padding: 2px 4px;
    border: thin midnightblue solid;
`;



const LogoWrapper = styled.img`
    display: inline-flex;
    height: 35px;
    width: 100px;

`;

const HeaderItemContainer = styled.span`
    right: 10px;
`


const openSidebarAnimation = css`
  transform: translate(-365px, 0);

`


const FilterContainer = styled.div`
    position: absolute;
    top: 60px;
    padding: 30px;
    background-color: white;
    border-right: medium purple solid;
    width: 365px;
    box-sizing: border-box;
    height: calc(100% - 60px);
    z-index: 20;
    -webkit-transition: 300ms ease-in-out;
    -moz-transition: 300ms ease-in-out;
    -o-transition: 300ms ease-in-out;
    ${props => props.active ?
        `` :
        openSidebarAnimation
    };


    @media (max-width: 365px) {
        width: 100%;
    }

`
const CategoryWrapper = styled.div`
    font-family: Poppins;
    margin: 20px 0px;

    &:hover {
        opacity: .9;
    }
`;

const StoreHeader = styled.div`
    width: 100%;
    height: 100px;
    font-family: Poppins;
    font-size: 1.5em;
`;

export default function Menu(props) {
    const [expanded, setExpanded] = useState(false);
    const size = useWindowSize();
    function toggleMenu () {
        expanded ? setExpanded(false) : setExpanded(true);
    }


    return (
        <React.Fragment>
            <FilterContainer active={expanded}>
                <StoreHeader>
                    Store
                </StoreHeader>
                {
                    [...new Set(Data.map(product => product.group))].map((groups, index) =>
                        {
                            var url = '/' + groups;
                            return (
                                <CategoryWrapper key={index}>
                                    <Link to={url} onClick={() => setExpanded(false)}>
                                        {groups.charAt(0).toUpperCase() + groups.slice(1).replace('-', ' ')}
                                    </Link>
                                </CategoryWrapper>
                            )
                        })
                }
            </FilterContainer>

            <MenuWrapper>
                <div>
                    <IconWrapper onClick={toggleMenu} >
                        <FontAwesomeIcon icon={faBars} size='2x' />
                    </IconWrapper>
                    <Link to='/'>
                        <LogoWrapper src={TKO} onClick={() => setExpanded(false)}/>
                    </Link>
                </div>
                <div>
                    <CartButton name="Cart" expanded={setExpanded} itemCount={props.itemCount}></CartButton>
                </div>

            </MenuWrapper>



        </React.Fragment>

    )
}
