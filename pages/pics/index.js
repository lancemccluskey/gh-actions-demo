import React from 'react';
import faker from 'faker';
import Card from '../../src/components/Card';

const Pics = () => {
  return (
    <div>
      <Card />
      <img src={faker.image.nature()} />
    </div>
  );
};

export default Pics;
