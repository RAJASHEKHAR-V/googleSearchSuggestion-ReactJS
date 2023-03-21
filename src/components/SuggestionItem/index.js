import './index.css'

const SuggestionItem = props => {
  const {suggestionObject, onClickOnArrow} = props
  const {suggestion} = suggestionObject

  const onArrow = () => {
    onClickOnArrow(suggestion)
  }

  return (
    <li className="suggestion-list-item">
      <p className="suggestion">{suggestion}</p>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          onClick={onArrow}
          className="arrow-icon"
        />
      </div>
    </li>
  )
}

export default SuggestionItem
