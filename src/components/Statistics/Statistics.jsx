import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { StatListElement, BigPercents } from './Statistics.module';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <Box as="ul" ml={5}>
            <StatListElement>Good: {good}</StatListElement>
            <StatListElement>Neutral: {neutral}</StatListElement>
            <StatListElement>Bed: {bad}</StatListElement>
            <StatListElement>Total: {total}</StatListElement>
            <StatListElement>Positive feedback: <BigPercents>{positivePercentage}%</BigPercents></StatListElement>
        </Box>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}