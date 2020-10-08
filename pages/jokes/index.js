/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import Card from '../../src/components/Card';
import Button from '../../src/components/Button';

const Jokes = ({ data }) => {
  const [joke, setJoke] = useState(data.joke);
  console.log('asdf');
  const handleNextClick = async () => {
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    });

    const data = await res.json();

    setJoke(data.joke);
  };

  const handlePrevClick = () => setJoke('Not implemented');

  return (
    <div sx={{ variant: 'containers.page' }}>
      <Card>
        {joke}
        <Button 
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
      </Card>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  });
  
  const data = await res.json();

  return {
    props: { data }
  }
}

export default Jokes;
