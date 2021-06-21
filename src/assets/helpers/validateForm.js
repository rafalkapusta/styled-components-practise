export const validateForm = (obj) => {
  let formErrors = {};
  let isValid = true;
  for (let key in obj) {
    if (!obj[key] && key !== 'id') {
      formErrors[key] = 'to pole jest wymagane';
      isValid &= false;
    } else {
      isValid &= true;
    }
  }
  return [isValid, formErrors];
};
