import React from 'react'

export default function SearchResults(props){
    return (
        <div className="searchresults-container">
        {props.term 
        ? <>
              <div className="results-div">
              <h1 className='results'>Results</h1>
              {/* <RatingsFilter ratings={this.props.ratings} restaurants={this.props.restaurants} term={this.props.term}/> */}
              </div>
              {props.searchResultsContainer()}
          </>
        : null}
   </div>
    )
}