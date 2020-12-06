const initialState = {
  me: {},
  allUsers: [],
};

const user = (state = initialState, action: any) => {
  if (action.type === "USER_AUTHORIZE_SUCCESS") {
    return {
      ...state,
      me: action.payload,
    };
  } else if (action.type === "USERS_FETCH_SUCCESS") {
    return {
      ...state,
      allUsers: action.payload,
    };
  }

  return state;
};

export default user;
