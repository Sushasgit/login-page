import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export default styled(({ color, ...otherProps }) => <Button {...otherProps} />)`
    color: ${(props) => props.color};
    background-color: ${(props) => props.bgColor};
    transition: opacity 0.1s linear;
    border: ${(props) => props.borderColor && `1px solid ${props.borderColor}`};

    &:hover,
    &:focus {
        opacity: 0.7;
        background-color: ${(props) => props.bgColor};
    }
`;
