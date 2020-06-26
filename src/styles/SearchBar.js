import React from 'react';


class SearchBar extends React.Component {
  
  state={
      term: '',
      results: []
  }  
  onInputChange(term){
    const name = this.props.searchBoxName || undefined
    this.setState({term});
    if(this.props.onSearchTermChange){
      this.props.onSearchTermChange({name,term})
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push(`/${this.state.term}`)

  }

    render() {
      const name = this.props.searchBoxName || undefined
        return (
            <div className="search-container">
                <div className="search-box">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input name={name} className="search-input" id="search" type="text" placeholder="Search" value={this.state.term}
                            onChange={event=>this.onInputChange(event.target.value)} onKeyPress={this.props.onKeyPress|| null}/>
                        <input type="submit" className='submit' />
                    </form>
                </div>
            </div>
        );
    }
}
 
export default SearchBar;