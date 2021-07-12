import React from 'react';
import styled from 'styled-components';
import LanguageSelect from '../LanguageSelect';
import Navigation from '../Navigation';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 770px;
    margin-left: 100px;
`;

const Header = () => {
    return (
        <StyledHeader>
            <Navigation />
            <LanguageSelect />
        </StyledHeader>
    );
};

export default Header;
