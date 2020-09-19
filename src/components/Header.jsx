import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  height: 75px;
  background-color: #99022a;
  justify-content: center;
  align-content: center;
`;

const StyledTitle = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 18px;
  color: white;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle>
        GH Actions Demo
      </StyledTitle>
    </StyledHeader>
  );
};

export default Header;
