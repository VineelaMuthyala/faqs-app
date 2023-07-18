import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isClicked: true}

  onClickButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  showAnswer = () => {
    const {isClicked} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isClicked) {
      return null
    }
    return (
      <div className="answer-container">
        <hr className="line" />
        <p className="answer-text">{answerText}</p>
      </div>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    const {isClicked} = this.state
    return (
      <li className="faq-item-container">
        <div className="question-container">
          <h1 className="question-text">{questionText}</h1>
          <button
            className="icon-button"
            type="button"
            onClick={this.onClickButton}
          >
            {isClicked ? (
              <img
                className="icon"
                alt="plus"
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png "
              />
            ) : (
              <img
                className="icon"
                alt="minus"
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              />
            )}
          </button>
        </div>
        {this.showAnswer()}
      </li>
    )
  }
}
export default FaqItem
