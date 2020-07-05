import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function OverallStarRating() {
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}

// import BeautyStars from 'beauty-stars';

// export default class App extends Component {
//   state = { value: 0 };
//   render() {
//     return (
//       <BeautyStars
//         value={this.state.value}
//         onChange={value => this.setState({ value })}
//       />
//     );
//   }
// }