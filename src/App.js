import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from '../theme';
import GlobalStyles from '../theme/GlobalStyles';

import Login from './pages/Login';

const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <div className="app">
                    <Switch>
                        <Route exact path="/" component={Login} />
                    </Switch>
                </div>
            </Router>
        </MuiThemeProvider>
    );
};

export default App;
