import React from 'react';
import faker from 'faker';
import Card from '../../src/components/Card';

const Jokes = () => {
  return (
    <div>
      <Card />
      <div>
        {faker.internet.domainName()}
      </div>
    </div>
  );
};

export default Jokes;
