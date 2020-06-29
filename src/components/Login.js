import React, { Component } from 'react'
import AppBar from '../styles/AppBar'

export default class Login extends Component{

    state={
        username:'',
        email: '',
        password:''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state, this.props.history)
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    render(){
        return(
            <>
            <AppBar />
            <label>Login</label>
            <form className='login' onSubmit={this.handleSubmit}>
                <input value={this.state.username} placeholder='username' name='username' onChange={this.handleChange}/>
                <input value={this.state.email} placeholder='email' name='email' onChange={this.handleChange}/>
                <input type='password' value={this.state.password} placeholder='password' name='password' onChange={this.handleChange}/>
                <input type='submit' value='login'/>
            </form>
            </>
        )
    }
}
