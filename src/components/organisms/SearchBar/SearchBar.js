import React, { useContext } from 'react';
import { Wrapper } from '../../../assets/styles/Wrapper';
import { FormField } from '../../molecules/FormField/FormField';
import { ViewWrapper } from '../../../assets/styles/ViewWrapper';
import { useLocation } from 'react-router-dom';
import { StateContext } from '../../../App';

export const SearchBar = () => {
  const location = useLocation();
  const context = useContext(StateContext);

  const { state, setState } = context;

  const handleSearch = ({ target: { value } }) => {
    setState({ type: 'SEARCH_USER', payload: value });
  };

  return (
    <Wrapper row="1" column="2" background="none">
      <ViewWrapper>
        <FormField
          name="search"
          id="search"
          label="Search user"
          value={state.search}
          onChange={(e) => handleSearch(e)}
          disabled={location.pathname === '/add-user'}
        />
      </ViewWrapper>
    </Wrapper>
  );
};
