import React from 'react'

export default function SearchResults(props){
    return(
        <div className="searchresults-container">
            {props.term 
            ? props.searchResultsContainer()
            : null}
         </div>
    )
}