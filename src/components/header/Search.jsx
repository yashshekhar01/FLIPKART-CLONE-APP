

import { InputBase, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
   background: #fff;
   width: 38%;
   border-radius: 2px;
   margin-left: 10px;
   display: flex;
   `;

const InputSearchBase = styled(InputBase)`
padding-left: 20px;
width: 100%; 
font-size: unset;
`;

const SearchIconwrapper = styled(Box)`
color: blue;
padding: 5px;
`;


const Search = () => {
    return (
        <SearchContainer>
        <InputSearchBase 
        placeholder='Search for products, Brands and more'
        />

        <SearchIconwrapper>
        <SearchIcon />
        </SearchIconwrapper>
        </SearchContainer>
    )
}

export default Search;