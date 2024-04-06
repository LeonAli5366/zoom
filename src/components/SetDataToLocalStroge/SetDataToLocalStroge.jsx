/* eslint-disable no-unused-vars */

const SetDataToLocalStorage = (userData) => {
  const userDataJSON = JSON.stringify(userData);
  const oldData = localStorage.getItem("chat-user");
  if (oldData) {
    localStorage.removeItem("chat-user");
    localStorage.setItem("chat-user", userDataJSON);
  }
  localStorage.setItem("chat-user", userDataJSON);
};

export default SetDataToLocalStorage;
