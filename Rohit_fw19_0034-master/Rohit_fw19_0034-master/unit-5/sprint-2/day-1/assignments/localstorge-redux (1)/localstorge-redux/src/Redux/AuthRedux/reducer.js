import { accessdata, savedata } from "../../localstorage/localstorage";
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQ } from "./actiontypes";

const intial = {
  isAuth:accessdata("token") || false,
  token: accessdata("token") || "",
  isAuthLoad: false,
};

export const reducer = (oldstate = intial, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_FAILURE:
      return { ...oldstate, isAuth: false, token: "", isAuthLoad: false };

    case LOGIN_SUCCESS:
      savedata("token",payload)
      return { ...oldstate, isAuth: true, token: payload, isAuthLoad: false };

    case LOGIN_REQ:
      return { ...oldstate, isAuthLoad: true };

    default:
      return oldstate;
  }
};
