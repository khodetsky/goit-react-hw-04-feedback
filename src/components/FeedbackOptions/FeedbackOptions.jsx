import { Box } from '../Box';
import PropTypes from 'prop-types';
import { FeedbackBtn } from './FeedbackOptions.styled'

export const FeedbackOptions = ({ onLeaveFeedback }) => {
    return (
        <Box
            display='inline-flex'
            gridGap={4}
            ml={5}
        >
            <FeedbackBtn onClick={onLeaveFeedback}>Good</FeedbackBtn>
            <FeedbackBtn onClick={onLeaveFeedback}>Neutral</FeedbackBtn>
            <FeedbackBtn onClick={onLeaveFeedback}>Bad</FeedbackBtn>
        </Box>
    )
};

FeedbackOptions.propTypes = {
    nLeaveFeedback: PropTypes.elementType.isRequired,
}