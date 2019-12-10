import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Redirect 
} from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './index.css';

import SignIn from './components/Auth/signin.component';
import SignUp from './components/Auth/signup.component';
import App from './components/App';


const client = new ApolloClient({
    uri: 'http://localhost:4444/graphql'
});

const Root = () =>(
    <Router>
        <Switch>
            <Route path='/' exact component={App} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Redirect to='/' />
        </Switch>
    </Router>
);

ReactDOM.render(
    <ApolloProvider client={client}>
        <Root />
    </ApolloProvider>,
    document.getElementById('root')
);

