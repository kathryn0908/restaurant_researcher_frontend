import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Review extends Component{
    state={
        review: '',
        reviewForm: true
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const user = localStorage.getItem('id')
        const {id} = this.props.match.params
        const {review} = this.state
        this.props.addReview(review, user, id)
        event.target.reset()
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    toggleForm = () => {
        this.setState({reviewForm: !this.state.reviewForm})
    }



    render(){
        if(!this.state.reviewForm){
            return(
                <div className='review-container' onSubmit={this.handleSubmit}>
                    <form className='review-form'>
                        <input className='review-input' type='text' value={this.state.review} name='review' onChange={this.handleChange}/>
                       <div className='button-container'>
                           <input className='submit-review'  type='submit' />
                           <button onClick={this.toggleForm} className='close-review'><FontAwesomeIcon icon="times-circle" size='lg'/></button>
                        </div> 
                    </form>
                </div>
            )
        }
        return(
            <div>
                <button className='review-button' onClick={this.toggleForm}>Write a Review</button>
            </div>
        )
    }
}