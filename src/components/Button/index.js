import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export default styled(({ color, ...otherProps }) => <Button {...otherProps} />)`
    color: ${(props) => props.color};
    transition: opacity 0.1s linear;

    &:hover {
        opacity: 0.8;
    }
`;
