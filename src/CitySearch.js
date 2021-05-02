import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {

  state = {
    query: "",
    suggestions: [],
    showSuggestions: undefined,
    infoText: ''
  };


  handleInputChanged = (event) => {

    const value = event.target.value;
    const suggestions = this.props.locations.filter(
      (location) => {
        return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
      }
    );

    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'City not found. Please try another city.'
      });
    } else {
      this.setState({
        query: value,
        suggestions,
        infoText: ''
      });
    }

  };

  handleItemClicked = (suggestion) => {
    alert('11111');
    this.setState({
      query: suggestion,
      showSuggestions: false
    });
    alert('22222');

    this.props.updateEvents(suggestion);
    alert('33333');

  };

  render() {


    return (
      <div className="CitySearch">
        <h3>Location: </h3>
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => {
            this.setState({
              showSuggestions: true
            });
          }}
          onBlur={() => {
            this.setState({
              showSuggestions: false
            });
          }}
        />
        <InfoAlert
          text={this.state.infoText}
        />
        <ul
          className="suggestions"
          style={
            this.state.showSuggestions ?
              {} :
              { display: 'none' }
          }
        >
          {
            this.state.suggestions.map(
              (suggestion) => (
                <li
                  key={suggestion}
                  onClick={() => this.handleItemClicked(suggestion)}
                >
                  {suggestion}
                </li>
              )
            )
          }
          <li
            key='all'
            onClick={() => this.handleItemClicked("all")}
          >
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
