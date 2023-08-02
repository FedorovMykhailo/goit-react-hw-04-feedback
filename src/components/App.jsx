import React, { Component } from "react";
import Section from "../components/Section/Section"
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";

export class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad
    }
    
    countPositiveFeedbackPercentage = () => {
        return Math.floor(this.state.good * 100 / this.countTotalFeedback())
    }

      handleClick = (evt) => {
        this.setState(prev => {
          return { [evt.target.name]: prev[evt.target.name] + 1 }
        })
    }

  render () { return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    > <div style={{
        height: '350px',
      }}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick} />
        </Section> 
      <Section title="Statistics">
        {this.countTotalFeedback() ?
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}/> :
          <Notification message="There is no feedback"/>}
        </Section>
        </div>
    </div>
  );}
 
};
