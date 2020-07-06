import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import OverallStarRating from './OverallStarRating';


export default function StarRating(props) {
  console.log(props)
  const [value, setValue] = React.useState(2);
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={value} 
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      <OverallStarRating value={value}/>
    </div>
  );
}
