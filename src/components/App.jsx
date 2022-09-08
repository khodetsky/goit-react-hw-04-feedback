import { Component } from "react";

import { GlobalStyle } from './GlobalStyles';
import {Statistics} from './Statistics/Statistics'
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import {Notification} from './Notification/Notification'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onBtnClick = (evt) => {
    if (evt.target.textContent.toLowerCase() === "good") {
      this.setState(prevState => ({ good: prevState.good + 1 }))
    } else if (evt.target.textContent.toLowerCase() === "neutral") {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }))
    } else if (evt.target.textContent.toLowerCase() === "bad") {
      this.setState(prevState => ({ bad: prevState.bad + 1 }))
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    let positiveFeedback = 0;
    let totalValue = 0;

    const countTotalFeedback = () => {
      totalValue = good + neutral + bad;
      return totalValue;
    }
    const countPositiveFeedbackPercentage = () => {
      if (good !== 0) {
        positiveFeedback = Math.round(good / totalValue * 100);
      return positiveFeedback;
      }
    }

    countTotalFeedback();
    countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onBtnClick}/>
        </Section>
      
        <Section title="Statistics">
          {totalValue === 0 ? (<Notification messege="There is no feedback" />) : (
            <Statistics good={good} neutral={neutral} bad={bad} total={totalValue} positivePercentage={positiveFeedback} />
          )} 
        </Section>
        
        <GlobalStyle/>
      </>
    );
  }
};
