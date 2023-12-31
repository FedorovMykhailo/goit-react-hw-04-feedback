import css from "../Section/Section.module.css";
import PropTypes from "prop-types";

const Section = ({title, children}) => {
        return(
            <div className={css.section}>
                <h2>{title}</h2>
                {children}
            </div>)
  }

export default Section

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}