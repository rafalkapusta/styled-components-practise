import styled from 'styled-components';

export const Button = styled.button`
  background: green;
  border: none;
  border-radius: 25px;
  margin: 10px 0;
  padding: 8px 16px;
  float: right;

  &:hover {
    cursor: pointer;
    background: darkGreen;
  }
`;
