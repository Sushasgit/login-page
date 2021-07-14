import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import TextField from '../TextField';
import Button from '../Button';

export const FormContainer = styled.div`
    width: 900px;
    margin-left: 140px;
    display: flex;
    align-items: center;
`;

export const Info = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 65px;

    & h1 {
        color: #fff;
        font-size: 30px;
        font-weight: 700;
        line-height: 1.2;

        & span {
            display: block;
            font-weight: 900;
            font-size: 87px;
        }
    }
`;

export const StyledInputLabel = styled(InputLabel)`
    font-size: 24px;
    color: #fff;
    font-weight: 900;

    &.Mui-focused {
        color: #fff;
    }
`;

export const Form = styled.form`
    max-width: 390px;
    width: 100%;
`;

export const ForgotLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
`;

export const Error = styled.p`
    color: #ff0000;
    margin: 0;
    text-align: center;
    font-weight: 900;
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin-top: 26px;
    width: 100%;
`;

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        borderRadius: '30px',
        color: '#fff',
        transition: 'opacity 0.1s linear',
    },
}));

const LoginForm = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { user: { email, password } };

        axios
            .post('https://api.ozonin-staging.com/api/v1/users/login', data)
            .then(() => {
                history.push('/profile');
            })
            .catch((error) => {
                if (
                    error.response &&
                    error.response.data &&
                    error.response.data.errors &&
                    error.response.data.errors.base
                ) {
                    const errorText = error.response.data.errors.base[0];
                    setError(errorText);
                }
            });
    };

    return (
        <FormContainer>
            <Info>
                <h1>
                    MANAGE YOUR TEAM
                    <span>EASILY!</span>
                </h1>

                <Button
                    variant="contained"
                    color="#fff"
                    bgColor="#27AE60"
                    className={classes.button}
                    startIcon={<SearchIcon />}
                >
                    Search in the catalog
                </Button>
            </Info>
            <Form onSubmit={handleSubmit}>
                <FormControl error={!!error} margin="normal" fullWidth className={classes.margin}>
                    <StyledInputLabel shrink disableAnimation htmlFor="login">
                        E-mail
                    </StyledInputLabel>
                    <TextField
                        error={!!error}
                        onChange={(e) => setEmail(e.target.value)}
                        id="login"
                        required
                    />
                </FormControl>
                <FormControl error={!!error} margin="normal" fullWidth className={classes.margin}>
                    <StyledInputLabel shrink disableAnimation htmlFor="password">
                        Password
                    </StyledInputLabel>
                    <TextField
                        error={!!error}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        type="password"
                        required
                    />
                    {error && <Error>{error}</Error>}
                </FormControl>
                <Actions>
                    <div>
                        <Button
                            variant="contained"
                            color="#fff"
                            bgColor="#2979FF"
                            className={classes.button}
                            endIcon={<ArrowRightAltIcon />}
                            component={Link}
                            to="/register"
                        >
                            Register
                        </Button>
                        <Button
                            variant="outlined"
                            className={classes.button}
                            color="#fff"
                            borderColor="#fff"
                            type="submit"
                        >
                            Login
                        </Button>
                    </div>
                    <ForgotLink to="/forgot-password">Forgot pass?</ForgotLink>
                </Actions>
            </Form>
        </FormContainer>
    );
};

export default LoginForm;
