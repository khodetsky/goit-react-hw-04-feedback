import { useState, useRef} from "react";

import { GlobalStyle } from './GlobalStyles';
import {Statistics} from './Statistics/Statistics'
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import {Notification} from './Notification/Notification'

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const positiveFeedback = useRef(0);
  const totalValue = useRef(0);

  const onBtnClick = (evt) => {
    switch (evt.target.textContent.toLowerCase()) {
      case "good":
        setGood(prevState => (prevState + 1));
        break;
      case "neutral":
        setNeutral(prevState => (prevState + 1));
        break;
      case "bad":
        setBad(prevState => (prevState + 1));
        break;
      default:
        console.log('Что-то пошло не так')
    }
  };

  const countTotalFeedback = () => {
    totalValue.current = good + neutral + bad;
    return totalValue.current;
  }

  const countPositiveFeedbackPercentage = () => {
    positiveFeedback.current = Math.round(good / totalValue.current * 100);
    return positiveFeedback.current;
  }

  countTotalFeedback();
  countPositiveFeedbackPercentage();
 
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={onBtnClick}/>
        </Section>
      
        <Section title="Statistics">
          {totalValue.current === 0 ? (<Notification messege="There is no feedback" />) : (
            <Statistics good={good} neutral={neutral} bad={bad} total={totalValue.current} positivePercentage={positiveFeedback.current} />)} 
        </Section>
        
        <GlobalStyle/>
      </>
    );
};
