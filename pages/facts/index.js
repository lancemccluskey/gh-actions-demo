import React from 'react';
import faker from 'faker';
import Card from '../../src/components/Card';

const Facts = () => {
  return (
    <div>
      <Card />
      <div>
        {faker.phone.phoneNumber()}
      </div>
    </div>
  );
};

export default Facts;
