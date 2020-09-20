/** @jsx jsx */
import { jsx } from 'theme-ui';

const Button = ({ handleNextClick, handlePrevClick }) => {
  return (
    <div sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <button sx={{ backgroundColor: 'highlight' }} onClick={handlePrevClick}>
        Like
      </button>
      <button sx={{ backgroundColor: 'highlight' }} onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Button;
