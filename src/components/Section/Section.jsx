import React, { Component } from "react";
import css from "../Section/Section.module.css";
import PropTypes from "prop-types";

export default class Section extends Component {
    render() {
        const { title, children } = this.props;
        return(
            <div className={css.section}>
                <h2>{title}</h2>
                {children}
            </div>)
  }
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}