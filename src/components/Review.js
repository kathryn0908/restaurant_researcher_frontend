import React, { Component } from 'react'

export default class Review extends Component{
    state={
        review: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const user = localStorage.getItem('id')
        this.props.addReview(this.state, user, this.props.match.params.id)
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='review-container' onSubmit={this.handleSubmit}>
            <form className='review-form'>
                <input type='text' value={this.state.review} name='review' placeholder='Write your review here...' onChange={this.handleChange}/>
                <input type='submit' className='submit-review'/>
            </form>
        </div>
        )
    }
}