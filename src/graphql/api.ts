// const host = "http://localhost:777";
const host = "https://hybrid-messanger-server-1622.herokuapp.com/";

export const apiCall = (query: string) =>
  fetch(`${host}/graphql`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      authorization: localStorage.getItem("authorization") || "",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.errors) {
        const authentificationError = res.errors.find(
          (error: any) => error.message === "Authentification error"
        );
        if (authentificationError) {
          window.open("/login", "_self");
        }
      }
      return res;
    });
