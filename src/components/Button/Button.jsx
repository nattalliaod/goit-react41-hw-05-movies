import PropTypes from 'prop-types';
import { ButtonGoBack } from './Button.styled';

export const Button = ({ onClick }) => {
    return <ButtonGoBack type='button' onClick={onClick}>Go back</ButtonGoBack>
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}