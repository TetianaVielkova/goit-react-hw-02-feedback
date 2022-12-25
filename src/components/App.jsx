import  React, { Component } from 'react';

import { Section } from "./Section/Section";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import {Statistics} from './Statistics/Statistics';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
};

handleClick = event => {
  const feedback = event.target.textContent;
  this.setState(prevState => {
    return ({
      [feedback]: prevState[feedback] + 1,
    });
  });
};


countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
}

countPositiveFeedbackPercentage = () => {
  return ((this.state.good * 100) / this.countTotalFeedback()).toFixed(0);
}

render(){
  
  const {good, neutral, bad} = this.state;
  const total = this.countTotalFeedback();
  const percentage = this.countPositiveFeedbackPercentage();

  return(
  <>
    <Section title="Please leave feedback">
      <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick} />
    </Section>
    <Section title="Statistic">
        {total === 0 ? (<Notification message="There is no feedback" />) :
          (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage} />)}
      </Section>
    </>
  )
  }}