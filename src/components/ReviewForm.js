import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StarRating from '../styles/StarRating'

export default class Review extends Component{
    state={
        review: '',
        reviewForm: true
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const user = localStorage.getItem('id')
        const restaurant = this.props.match.params.id
        const {name} = this.props.restaurant
        const {review} = this.state
        this.props.addReview(review, user, name, restaurant)
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
                    <p>Rate your experience:</p><StarRating />
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