const authorizeSuccessAction = (user: any) => ({
  type: "USER_AUTHORIZE_SUCCESS",
  payload: user,
});
export const userOnlineUpdateAction = (user: any) => ({
  type: "USER_ONLINE_UPDATE",
  payload: user,
});

export const allUsersFetchSuccessAction = (users: any) => ({
  type: "USERS_FETCH_SUCCESS",
  payload: users,
});

export default authorizeSuccessAction;
