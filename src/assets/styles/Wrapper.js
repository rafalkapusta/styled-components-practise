import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-row: ${({ row }) => row};
  grid-column: ${({ column }) => column};
  background: ${({ background }) => background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;
