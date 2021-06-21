import React from 'react';
import styled from 'styled-components';
import { Label } from '../../atoms/Label/Label';
import { Input } from '../../atoms/Input/Input';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 10px 0;
  }
`;

export const FormField = ({
  type = 'text',
  name,
  id,
  label,
  value,
  error,
  onChange,
  disabled,
}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <small style={{ color: 'red' }}>{error}</small>}
    </Wrapper>
  );
};
