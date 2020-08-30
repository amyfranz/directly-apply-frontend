const BaseUrl = "https://directly-apply.herokuapp.com/";

//Base get req
const get = (url) => {
  return fetch(BaseUrl + url, {
    headers: { "auth-token": localStorage.getItem("auth-token") },
  });
};

//Base post req
const post = (url, body) => {
  var requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  };

  return fetch(BaseUrl + url, requestOptions);
};

//gets the user information () => {{name: string, email: string, date: Date}}
const getUser = () => {
  return get("users").then((res) => res.json());
};

//logs the user in ({email: string, password: string}) => jwt
const logInUser = (body) => {
  return post("users/login", body).then((response) => response.json());
};

//Registers the user in ({email: string, password: string, .....}) => jwt
const registerUser = (body) => {
  return post("users/register", body).then((response) => response.json());
};

export { getUser, logInUser, registerUser };
