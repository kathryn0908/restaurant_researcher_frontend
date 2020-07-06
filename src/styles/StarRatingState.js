import React from 'react';
import OverallStarRating from './OverallStarRating'
import StarRating from './StarRating';

export default function StarRatingState(){
    
    const [value, setValue] = React.useState(2);
    render(){
        return(
            <OverallStarRating value={value}/>
            <StarRating value={value} onChange={(event, newValue) => {
                setValue(newValue);
              }}/>
        )
    }
   
}