import { useState } from 'react';

import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/Feedback/Feedback';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export function App () {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good , setgood] = useState(0);
  const [neutral , setneutral] = useState(0);
  const [bad , setbad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(
      (good /
        (good + neutral + bad)) *
        100
    );
  };

  const handleIncrement = event => {
    event.preventDefault();
    this.setState(prevState => {
      return  event.target.name + 1 ;
    });
  };

    return (
      <>
        <Section title="Please leave feed back">
          <FeedbackOptions
            // options={Object.keys(state)}
            onLeaveFeedback={handleIncrement}
          />
        </Section>
        {countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
}
