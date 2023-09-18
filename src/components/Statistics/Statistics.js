import { StatisticsTitle, Wrapper } from "./Statistics.styled"

export const Statistics = ({ good, neutral, bad, total, positiveFeedbackPercentage}) => {
    return (
        <Wrapper>
            <StatisticsTitle>Good: {good}</StatisticsTitle>
            <StatisticsTitle>Neutral: {neutral}</StatisticsTitle>
            <StatisticsTitle>Bad: {bad}</StatisticsTitle>
            <StatisticsTitle>Total: {total}</StatisticsTitle>
            <StatisticsTitle>Positive feedback: {positiveFeedbackPercentage}%</StatisticsTitle>
        </Wrapper>
    )
}