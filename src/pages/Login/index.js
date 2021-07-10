import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { LoginContainer } from '../../components/Layout';
import LoginForm from '../../components/LoginForm';

const Login = () => {
    return (
        <LoginContainer>
            <Header />
            <LoginForm />
            <Button>Test</Button> Login
        </LoginContainer>
    );
};

export default Login;
