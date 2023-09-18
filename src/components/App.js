import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { useState } from "react";
import { Notification } from "./Notification/Notification";


export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const options = ["good", "neutral", "bad"];

  const onLeaveFeedback = option => {
    switch (option) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default: {
        alert('There is no such option')
      };

    }
  }

   const countTotalFeedback = (e) => {
     return(good + bad + neutral);
   }
  
   const countPositiveFeedbackPercentage = (e) => {
     return(Math.round((good / (good + neutral + bad)) * 100))
  }
  
  const allFeedBack = countTotalFeedback();
  const total = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

  return (
    <div>
         <Section title={'Please leave feedback'}>
           <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} /> 
         </Section>
         <Section title={'Statistics'}>
           {allFeedBack > 0 ? (
             <Statistics good={good} neutral={neutral} bad={bad} total={total} positiveFeedbackPercentage={positiveFeedbackPercentage} />
           ) : (
               <Notification message={'There is no feedback'} />
           )}
         </Section>
     </div>
  )

}

