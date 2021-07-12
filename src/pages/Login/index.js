import React from 'react';
import Header from '../../components/Header';
import { LoginContainer } from '../../components/Layout';
import LoginForm from '../../components/LoginForm';
import SocialBlock from '../../components/SocialBlock';

const Login = () => {
    return (
        <LoginContainer>
            <Header />
            <LoginForm />
            <SocialBlock />
        </LoginContainer>
    );
};

export default Login;
