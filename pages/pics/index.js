/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import faker from 'faker';
import Card from '../../src/components/Card';
import Button from '../../src/components/Button';

const Pics = () => {
  const [pic, setPic] = useState(faker.image.nature());

  const handlePrevClick = () => setPic('Not implemented');

  const handleNextClick = () => setPic(faker.image.nature());

  return (
    <div sx={{ variant: 'containers.page' }}>
      <Card>
        {pic === 'Not implemented'
          ? <span>{pic}</span>
          :  <img 
              src={pic} 
              sx={{ height: '50vh', width: '100%' }}
            />
        }
        <Button 
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
      </Card>
    </div>
  );
};

export default Pics;
