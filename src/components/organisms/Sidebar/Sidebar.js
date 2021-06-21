import React, { useState } from 'react';
import { Wrapper } from '../../../assets/styles/Wrapper';
import { Button } from '../../atoms/Button/Button';
import { Portal } from '../Portal/Portal';
import styled from 'styled-components';

const TooltipWrapper = styled.div`
  width: 150px;
  height: 150px;
  background: white;
  position: absolute;
  left: ${({ left }) => `${left}px`};
  top: ${({ top }) => `${top}px`};
  text-align: center;
  border-radius: 25px;
`;

export const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);
  const [coords, setCoords] = useState({});

  return (
    <Wrapper row="1/3" column="3" background="red">
      <Button
        onClick={(e) => {
          const rect = e.target.getBoundingClientRect();
          setCoords({
            left: rect.x - 35,
            top: rect.y - 150,
          });
          setOpen(!isOpen);
        }}
      >
        Click me
      </Button>
      {isOpen && (
        <Portal>
          <TooltipWrapper left={coords.left} top={coords.top}>
            Tooltip
          </TooltipWrapper>
        </Portal>
      )}
    </Wrapper>
  );
};
