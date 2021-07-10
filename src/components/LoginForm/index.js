import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Button from '../Button';

export const FormContainer = styled.div``;

export const Info = styled.section``;

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        borderRadius: '30px',
        backgroundColor: theme.palette.green,
    },
}));

const LoginForm = () => {
    const classes = useStyles();
    return (
        <FormContainer>
            <Info>
                <h1>
                    MANAGE YOUR TEAM
                    <span>EASILY!</span>
                </h1>

                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<SearchIcon />}
                >
                    Search in the catalog
                </Button>
            </Info>
        </FormContainer>
    );
};

export default LoginForm;
