import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


export default class Review extends Component{
    state={
        review: '',
        reviewForm: true, 
        rating: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const user = localStorage.getItem('id')
        const restaurant = this.props.match.params.id
        const {name} = this.props.restaurant
        const {review} = this.state
        const {rating} = this.state
        this.props.addReview(review, user, name, restaurant, rating)
        this.setState({review: ''})
    }

    handleClick = (event) => {
        const rating = event.target.value
        const user = localStorage.getItem('id')
        console.log(user)
        console.log(this.props.match.params.id)
        const restaurant = this.props.match.params.id
        this.props.addStarRating(rating, user, restaurant)
        document.querySelector('.review-form').reset();
      }
    
    change = (event) => {
        const { name, value } = event.target
        this.setState({[name]: value})
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
                    <p className='rate'>Rate your experience:</p>
                    <div><Box className='stars' component="fieldset" mb={3} borderColor="transparent">
                        <Rating
                            className='stars'
                            name="rating"
                            value={this.state.rating} 
                            onChange={this.change}
                            onClick={this.handleClick}
                            
                        />
                        </Box>
                    </div>
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