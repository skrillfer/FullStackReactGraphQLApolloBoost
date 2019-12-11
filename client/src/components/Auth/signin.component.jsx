import React from 'react';
import { Mutation } from 'react-apollo';

import Error from '../Error/error.component';

import { SIGNIN_USER } from '../../queries/index';

const initialState = {
    username:'',
    password:''
};

class SignIn extends React.Component{
    state = { ...initialState };

    clearState = () =>{
        this.setState({ ...initialState });
    }

    handleChange = event => {
        const { name, value }  = event.target;
        this.setState({ [name] : value });
    }

    handleSubmit = (event, signinUser)  => {
        event.preventDefault();
        signinUser().then(data => {
                console.log(data);
                this.clearState();
        }).catch(error=>error);
        
    }

    render(){
        const { username, password } = this.state;
        return(
            <div className='App'>
                <h2 className='App'>SignIn</h2>
                <Mutation mutation={SIGNIN_USER} variables={{ username, password }}>
                    {( signinUser, { data, loading, error } )=>{
                        return(
                            <form className='form' 
                                    onSubmit = { event => this.handleSubmit(event, signinUser)}
                            > 
                                <input 
                                    type='text' 
                                    name='username' 
                                    placeholder='Username'
                                    onChange = { this.handleChange }
                                    value = { username }
                                    required
                                />
                                <input 
                                    type='password' 
                                    name='password' 
                                    placeholder='Password'
                                    onChange = { this.handleChange }
                                    value = { password }
                                    required
                                />
                                <button 
                                    disabled = { loading }
                                    type='submit' 
                                    className='button-primary'>
                                    Submit 
                                </button>
                                {error && <Error error={ error }/>}
                            </form>
                        )
                    }}
                    
                </Mutation>
            </div>
        )
    }
}

export default SignIn;