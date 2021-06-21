import React, { forwardRef, useEffect } from 'react';
import { ViewWrapper } from '../../assets/styles/ViewWrapper';
import { FormField } from '../../components/molecules/FormField/FormField';
import { Button } from '../../components/atoms/Button/Button';
import { useHistory } from 'react-router-dom';
import { validateForm } from '../../assets/helpers/validateForm';

export const AddUser = forwardRef(({ setState, state }, ref) => {
  const history = useHistory();

  useEffect(() => {
    setState({ type: 'CLEAR_SEARCH' });
  }, []);

  const handleInputChange = ({ target: { value, name } }) => {
    setState({
      type: 'INPUT_CHANGE',
      payload: { name: name, value: value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const [isValid, formErrors] = validateForm(state.newUser);
    setState({
      type: 'ADD_USER',
      payload: { errors: formErrors, isValid: isValid },
    });
    if (isValid) {
      history.push('/');
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={(e) => handleSubmit(e)} ref={ref}>
      <FormField
        name="name"
        id="name"
        label="Name"
        value={state.newUser['name']}
        error={state.formErrors['name']}
        onChange={(e) => handleInputChange(e)}
      />
      <FormField
        name="lastName"
        id="lastName"
        label="Last Name"
        value={state.newUser['lastName']}
        error={state.formErrors['lastName']}
        onChange={(e) => handleInputChange(e)}
      />
      <FormField
        name="email"
        id="email"
        label="E-mail"
        value={state.newUser['email']}
        error={state.formErrors['email']}
        onChange={(e) => handleInputChange(e)}
      />
      <Button>Add User</Button>
    </ViewWrapper>
  );
});
