import store from "../store";
import authorizeSuccessAction, {
  allUsersFetchSuccessAction,
} from "../actions/user";
import { fetchUser, fetchUsers as fetchUsersApi } from "../graphql/user";

const authorizeUser = () => {
  fetchUser().then((user) => {
    store.dispatch(authorizeSuccessAction(user));
  });
};

export const fetchUsers = () => {
  fetchUsersApi().then((users) =>
    store.dispatch(allUsersFetchSuccessAction(users))
  );
};

export default authorizeUser;
