import css from "../Statistics/Statistics.module.css"
import PropTypes from "prop-types";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
        return (
        <div className={css.statistics}>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </div>)
  }

  export default Statistics

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
}