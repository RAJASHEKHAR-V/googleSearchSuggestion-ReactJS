import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeOfInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickOnArrow = suggestion => {
    const inputEl = document.getElementsByTagName('input')
    inputEl.value = suggestion
    this.setState({searchInput: suggestion})
    console.log(inputEl)
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchedList = suggestionsList.filter(suggestItem =>
      suggestItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-image"
          alt="google logo"
        />
        <div className="body">
          <div className="card">
            <div className="input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-icon"
                alt="search icon"
              />
              <input
                placeholder="Search Google"
                type="search"
                value={searchInput}
                onChange={this.onChangeOfInput}
                className="input"
              />
            </div>
            <ul className="suggestion-card">
              {searchedList.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  suggestionObject={eachItem}
                  onClickOnArrow={this.onClickOnArrow}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
