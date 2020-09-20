/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import faker from 'faker';
import Card from '../../src/components/Card';
import Button from '../../src/components/Button';

const Quotes = () => {
  const [quote, setQuote] = useState(faker.lorem.sentence());
  
  const handlePrevClick = () => setQuote('Not implemented');

  const handleNextClick = () => setQuote(faker.lorem.sentence());

  return (
    <div sx={{ variant: 'containers.page' }}>
      <Card>
        <span data-testid="quote-id">
          {quote}
        </span>
        <Button 
          handlePrevClick={handlePrevClick} 
          handleNextClick={handleNextClick}
        />
      </Card>
    </div>
  );
};

export default Quotes;
