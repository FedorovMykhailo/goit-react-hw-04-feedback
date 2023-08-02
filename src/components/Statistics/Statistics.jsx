import React, { Component } from "react";
import css from "../Statistics/Statistics.module.css"
import PropTypes from "prop-types";

export default class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props
        return (
        <div className={css.statistics}>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </div>)
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
}