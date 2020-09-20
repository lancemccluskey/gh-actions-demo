/** @jsx jsx */
import { jsx } from 'theme-ui';

const Card = ({ children }) => {
  return (
    <div sx={{ variant: 'containers.card' }}>
      {children}
    </div>
  );
};

export default Card;
