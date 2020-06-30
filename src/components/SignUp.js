import React, { Component } from 'react'
import AppBar from '../styles/AppBar'
import { Link } from 'react-router-dom';

export default class Login extends Component{

    state={
        username:'',
        email: '',
        password:''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.signup(this.state, this.props.history)
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    render(){
        return(
            <>
            <AppBar />
            <div className='login-container'>
            <form className='login' onSubmit={this.handleSubmit}>
                <label className='login-header'>Sign Up</label>
                <div className='input-container'>
                    <input className='login-input' value={this.state.username} placeholder='username' name='username' onChange={this.handleChange}/>
                    <input className='login-input' value={this.state.email} placeholder='email' name='email' onChange={this.handleChange}/>
                    <input className='login-input' type='password' value={this.state.password} placeholder='password' name='password' onChange={this.handleChange}/>
                    <input className='login-submit' type='submit' value='login'/>
                </div>
            </form>
            </div>
            </>
        )
    }
}