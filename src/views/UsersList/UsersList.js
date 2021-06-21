import React, { forwardRef, useRef } from 'react';
import { ViewWrapper } from '../../assets/styles/ViewWrapper';
import { ProgressBar } from '../../components/atoms/ProgressBar/ProgressBar';

export const UsersList = forwardRef(({ state, setState, onClick }, ref) => {
  const handleDeleteUser = (id) => {
    setState({ type: 'DELETE_USER', payload: { id: id } });
  };

  if (state.loading) {
    return <ProgressBar>Loading...</ProgressBar>;
  }

  return (
    <ViewWrapper ref={ref}>
      {state.users.length ? (
        state.users.map(({ name, lastName, email, id }) => (
          <ViewWrapper key={id} onClick={() => onClick(id)}>
            <button
              style={{ float: 'right' }}
              onClick={() => handleDeleteUser(id)}
            >
              x
            </button>
            <p>name: {name}</p>
            <p>last name: {lastName}</p>
            <p>e-mail: {email}</p>
          </ViewWrapper>
        ))
      ) : (
        <p>Brak użytkowników do wyświetlenia</p>
      )}
    </ViewWrapper>
  );
});
