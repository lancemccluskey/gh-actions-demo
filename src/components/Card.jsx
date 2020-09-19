import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledCard = styled.div`
  display: flex;
  width: 50vw;
  height: 50vh;
  border: 1px solid black;
`;

const StyledContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const Card = () => {
  return (
    <StyledContainer>
      <StyledCard>
            <Button />
      </StyledCard>
    </StyledContainer>
  );
};

export default Card;
