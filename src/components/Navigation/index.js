import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #000;
    padding: 0 10px;
`;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const NavLItem = styled.li`
    &:not(:last-child) {
        margin-right: 15px;
    }
    & a {
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 900;
    }
`;

const Navigation = () => {
    return (
        <Nav>
            <NavList>
                <NavLItem>
                    <Link to="/home">Home</Link>
                </NavLItem>
                <NavLItem>
                    <Link to="/trade">Trade</Link>
                </NavLItem>
                <NavLItem>
                    <Link to="/plantations">Plantations</Link>
                </NavLItem>
                <NavLItem>
                    <Link to="/analyze">Analyze</Link>
                </NavLItem>
                <NavLItem>
                    <Link to="/plantations">Plantations</Link>
                </NavLItem>
                <NavLItem>
                    <Link to="/teams">Teams</Link>
                </NavLItem>
                <NavLItem>
                    <Link to="/contacts">Contacts</Link>
                </NavLItem>
            </NavList>
        </Nav>
    );
};

export default Navigation;
