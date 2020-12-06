import { apiCall } from "./api";

export const userFetchQuery = () => `
      query {
        getUser {
          name avatarUrl _id
        }
      }
    `;

export const fetchUser = async () =>
  apiCall(userFetchQuery()).then((res: any) => res.data.getUser);

export const usersFetchQuery = () => `
    query {
      getUsers {
        name avatarUrl _id
      }
    }
`;

export const fetchUsers = async () =>
  apiCall(usersFetchQuery()).then((res: any) => res.data.getUsers);

export interface IUserInput {
  name: string;
  avatarUrl?: string;
  password: string;
}

export const userCreateQuery = (user: IUserInput) => `
    mutation {
        createUser(user: {name: "${user.name}", avatarUrl: "${user.avatarUrl}", password: "${user.password}"})
    }
`;

export const createUser = async (user: IUserInput) =>
  apiCall(userCreateQuery(user)).then((res: any) => {
    if (res.errors && res.errors.length) {
      const [error] = res.errors;
      throw new Error(error.message);
    } else {
      const token = res.data.createUser;
      localStorage.setItem("authorization", `Bearer ${token}`);
    }
  });

export const userLoginQuery = (name: string, password: string) => `
    query {
      login(name: "${name}", password: "${password}")
    }
`;

export const loginUser = async (name: string, password: string) =>
  apiCall(userLoginQuery(name, password)).then((res: any) => {
    if (res.errors && res.errors.length) {
      const [error] = res.errors;
      throw new Error(error.message);
    } else {
      const token = res.data.login;
      localStorage.setItem("authorization", `Bearer ${token}`);
    }
  });
