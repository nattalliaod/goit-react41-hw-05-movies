import PropTypes from 'prop-types';
import { TitleText } from "./PageHeading.styled"

export const PageHeading = ({ text }) => (
    <TitleText>{text}</TitleText>
)

PageHeading.propTypes = {
  text: PropTypes.string.isRequired,
};