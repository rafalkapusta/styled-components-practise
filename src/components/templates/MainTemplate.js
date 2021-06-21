import React from 'react';
import { Wrapper } from './MainTemplate.styles';
import { Logo } from '../atoms/Logo/Logo';
import { SearchBar } from '../organisms/SearchBar/SearchBar';
import { Navbar } from '../organisms/Navbar/Navbar';
import { Sidebar } from '../organisms/Sidebar/Sidebar';
import { Footer } from '../organisms/Footer/Footer';

export const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Logo />
      <SearchBar />
      <Navbar />
      {children}
      <Sidebar />
      <Footer />
    </Wrapper>
  );
};
