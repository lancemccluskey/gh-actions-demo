/** @jsx jsx */
import { jsx } from 'theme-ui';

const Homepage = () => {
  return (
    <div sx={{ height: `calc(100vh - 60px)` }}>
      <div sx={{ variant: 'containers.page' }}> 
        <h1 sx={{ fontSize: 8, my: 0 }} >GH Actions</h1>
      </div>
    </div>
  );
};

export default Homepage;
