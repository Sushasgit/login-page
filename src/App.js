import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from '../theme';
import GlobalStyles from '../theme/GlobalStyles';

import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <div className="app">
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/forgot-password" component={ForgotPassword} />
                        <Route exact path="/register" component={SignUp} />
                        <Route exact path="/profile" component={Profile} />
                    </Switch>
                </div>
            </Router>
        </MuiThemeProvider>
    );
};

export default App;
