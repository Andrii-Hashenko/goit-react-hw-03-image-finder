import PropTypes from 'prop-types';
import './Button.styled.js';
import { ButtonContainer, Button } from './Button.styled.js';

export default function ButtonLoadMore({ onClick }) {
  return (
    <ButtonContainer className="Button-container">
      <Button type="button" onClick={onClick}>
        Load more...
      </Button>
    </ButtonContainer>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
