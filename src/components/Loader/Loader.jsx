import './Loader.styled.js';
import { SpinnerEl, SpinnerContainer } from './Loader.styled.js';

// взяли иконку из реакт-айкон и просто ей прикрутили анимацию и дали клас
import { ImSpinner9 } from 'react-icons/im';

export default function Loader() {
  return (
    <div role="alert">
      <SpinnerContainer>
        <SpinnerEl>
          <ImSpinner9 size="32" />
        </SpinnerEl>
        Loading...
      </SpinnerContainer>
    </div>
  );
}
