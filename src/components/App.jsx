import { useState, useEffect } from "react";
import Section from "../components/Section/Section"
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";

const App = () => {

 const[stat, setStat] = useState({
        good: 0,
        neutral: 0,
        bad: 0
 })
 // console.log(stat);

  const countTotalFeedback = () => {
      console.log(stat.good + stat.neutral + stat.bad);
        return stat.good + stat.neutral + stat.bad
    }
    
    const countPositiveFeedbackPercentage = () => {
        return Math.floor(stat.good * 100 / countTotalFeedback())
    }

  const handleClick = (evt) => {
    const { name } = evt.target;
     console.log(stat[evt.target.name]+1);
    setStat(prev => ({ ...prev, [name]: prev[name] + 1 })) 

        }
    

return (
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
        <FeedbackOptions options={Object.keys(stat)} onLeaveFeedback={handleClick} />
        </Section> 
      <Section title="Statistics">
        {countTotalFeedback() ?
          <Statistics
            good={stat.good}
            neutral={stat.neutral}
            bad={stat.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}/> :
          <Notification message="There is no feedback"/>}
        </Section>
        </div>
    </div>
  );
};

export default App;