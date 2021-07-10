import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route exact path="/" component={Login} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
