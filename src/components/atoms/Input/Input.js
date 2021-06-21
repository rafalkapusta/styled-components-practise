import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 5px 8px;
  border: 1px solid black;
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }

  &:disabled {
    background-image: linear-gradient(
      45deg,
      #000000 25%,
      #ffffff 25%,
      #ffffff 50%,
      #000000 50%,
      #000000 75%,
      #ffffff 75%,
      #ffffff 100%
    );
    background-size: 28.28px 28.28px;
    cursor: not-allowed;
  }
`;
