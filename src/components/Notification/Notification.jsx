import PropTypes from 'prop-types';
import { NotificationMessege } from './Notification.styled';

export const Notification = ({ messege }) => {
    return (
        <NotificationMessege>{messege}</NotificationMessege>
    )
};

Notification.propTypes = {
    messege: PropTypes.string.isRequired,
}