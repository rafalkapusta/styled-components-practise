export const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        loading: false,
      };
    case 'INPUT_CHANGE':
      delete state.formErrors[action.payload.name];
      return {
        ...state,
        newUser: {
          ...state.newUser,
          [action.payload.name]: action.payload.value,
        },
      };
    case 'ADD_USER': {
      let id = state.newUser.id + 1;
      const usersArray = [state.newUser, ...state.users];
      if (action.payload.isValid) {
        return {
          ...state,
          users: usersArray,
          newUser: {
            id: id,
            name: '',
            lastName: '',
            email: '',
          },
          usersCopy: usersArray,
          formErrors: action.payload.errors,
        };
      }
      return {
        ...state,
        formErrors: action.payload.errors,
      };
    }
    case 'DELETE_USER': {
      const usersArray = state.usersCopy.filter(
        ({ id }) => id !== action.payload.id
      );
      return {
        ...state,
        users: usersArray,
        usersCopy: usersArray,
        search: '',
      };
    }
    case 'SEARCH_USER':
      return {
        ...state,
        users: action.payload
          ? state.usersCopy.filter(({ name }) =>
              name.startsWith(action.payload)
            )
          : state.usersCopy,
        search: action.payload,
      };
    case 'CLEAR_SEARCH':
      return {
        ...state,
        users: state.usersCopy,
        search: '',
      };
    default:
      return state;
  }
};

export const initialState = {
  users: [
    {
      id: 3,
      name: 'aa',
      lastName: 'aa',
      email: 'aa',
    },
    {
      id: 2,
      name: 'bb',
      lastName: 'bb',
      email: 'bb',
    },
    {
      id: 1,
      name: 'cc',
      lastName: 'cc',
      email: 'cc',
    },
    {
      id: 0,
      name: 'bc',
      lastName: 'bc',
      email: 'bc',
    },
  ],
  usersCopy: [
    {
      id: 3,
      name: 'aa',
      lastName: 'aa',
      email: 'aa',
    },
    {
      id: 2,
      name: 'bb',
      lastName: 'bb',
      email: 'bb',
    },
    {
      id: 1,
      name: 'cc',
      lastName: 'cc',
      email: 'cc',
    },
    {
      id: 0,
      name: 'bc',
      lastName: 'bc',
      email: 'bc',
    },
  ],
  newUser: {
    id: 4,
    name: '',
    lastName: '',
    email: '',
  },
  formErrors: {},
  search: '',
  loading: true,
};
