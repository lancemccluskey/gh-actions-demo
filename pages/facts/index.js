/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import Card from '../../src/components/Card';
import Button from '../../src/components/Button';

const Facts = ({ data }) => {
  const [fact, setFact] = useState(data);

  const handleNextClick = async () => {
    const res = await fetch('http://numbersapi.com/random/trivia');
    const newFact = await res.text();

    setFact(newFact);
  };

  const handlePrevClick = () => setFact('Not implemented');
  
  return (
    <div sx={{ variant: 'containers.page' }}>
      <Card>
        <span>
          {fact}
        </span>
        <Button 
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
      </Card>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('http://numbersapi.com/random/trivia');

  const data = await res.text();

  return {
    props: { data }
  }
}

export default Facts;
