import React, { Component } from "react";
import css from "../FeedbackOptions/FeedbackOptions.module.css"
import PropTypes from "prop-types";

export default class FeedbackOptions extends Component {
    render() {  
        const { options, onLeaveFeedback} = this.props
        return (
            <div className={css.buttons}>
                {options.map(option =>
                    <button
                        type="button"
                        key={option}
                        onClick={onLeaveFeedback}
                        name={option}
                        className={css.button}>
                        {option}</button>)} 
          {/* <button type="button" onClick = {onLeaveFeedback} name="good" className={css.button}>Good</button>
          <button type="button" onClick = {onLeaveFeedback} name="neutral" className={css.button}>Neutral</button>
          <button type="button" onClick = {onLeaveFeedback} name="bad" className={css.button}>Bad</button> */}
        </div>);
  }
}

FeedbackOptions.propTypes = { 
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}
