import React from 'react';
import { StyledLink } from '../../atoms/StyledLink/StyledLink';
import { NavbarWrapper } from './Navbar.styles';

export const Navbar = () => {
  return (
    <NavbarWrapper row="2" column="1" background="">
      <StyledLink exact to="/">
        Users List
      </StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
    </NavbarWrapper>
  );
};
