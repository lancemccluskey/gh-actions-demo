import React from 'react';
import faker from 'faker';
import Card from '../../src/components/Card';

const Quotes = () => {
  return (
    <div>
      <Card />
      <span>
        {faker.lorem.sentence()}
      </span>
    </div>
  );
};

export default Quotes;
