import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink).attrs({
  activeClassName: 'active-link',
})`
  color: grey;
  margin: 25px;
  font-weight: bold;
  text-decoration: none;
  position: relative;

  &.active-link {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: '';
    position: absolute;

    opacity: 0;
    transition: opacity 0.4s ease-in-out;

    width: 8px;
    height: 8px;
    border-radius: 100%;
    border: none;
    background: grey;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
  }
`;
