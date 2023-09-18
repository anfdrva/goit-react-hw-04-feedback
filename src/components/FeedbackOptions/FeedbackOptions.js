import { OptionBtn } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(item => (
        <OptionBtn
            key={item}
            onClick={() => onLeaveFeedback(item)}
        >
            {item}
        </OptionBtn>
    ))
}