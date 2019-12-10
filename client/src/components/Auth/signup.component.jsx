import React from 'react';

class SignUp extends React.Component{
    state = {
        username:'',
        email:'',
        password:'',
        passwordConfirmation:''
    };

    handleChange = event => {
        const { name, value }  = event.target;
        this.setState({ [name] : value });
    }

    render(){
        const { username, email, password, passwordConfirmation } = this.state;
        return(
            <div className='App'>
                <h2 className='App'>SignUp</h2>
                <form className='form'>
                    <input 
                        type='text' 
                        name='username' 
                        placeholder='Username'
                        onChange = { this.handleChange }
                        value = { username }
                    />
                    <input 
                        type='email' 
                        name='email' 
                        placeholder='Email'
                        onChange = { this.handleChange }
                        value = { email }
                    />
                    <input 
                        type='password' 
                        name='password' 
                        placeholder='Password'
                        onChange = { this.handleChange }
                        value = { password }
                    />
                    <input 
                        type='password' 
                        name='passwordConfirmation' 
                        placeholder='Confirm Password'
                        onChange = { this.handleChange }
                        value = { passwordConfirmation }
                    />
                    <button type='submit' className='button-primary'>Submit </button>
                </form>
            </div>
        )
    }
}

export default SignUp;