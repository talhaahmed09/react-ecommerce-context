import axios from "axios";
import { openNotificationWithIcon } from "../utilities/toast";

const AUTH_URL = "https://dummyjson.com/auth/login";
const REGISTER_API = "https://dummyjson.com/users/";
let errMsg = "";

export const loginApi = async (body) => {
  // const response = await axios.post(AUTH_URL, JSON.stringify(body), {
  //   headers: { "Content-Type": "application/json" },
  // });

  // return response;
  let response;
  try {
    response = await axios.post(AUTH_URL, JSON.stringify(body), {
      headers: { "Content-Type": "application/json" },
       
    });
    openNotificationWithIcon('success', 'Successs', 'Login Successfull.')
   return response
  } catch (err) {
    if (!err?.response) {
     return openNotificationWithIcon('error', 'ERROR', 'No Server Response')
    }  else {
      return openNotificationWithIcon('error', 'ERROR', 'Registration Failed')
    }
  }
};

export const emailCheck = async (body) => {
  const response = await axios.get(REGISTER_API + `search?q=${body}`);
  return response;
};

export const registerUser = async (obj) => {
    let response;
  try {
    response = await axios.post(REGISTER_API + "add", JSON.stringify(obj), {
      headers: { "Content-Type": "application/json" },
       
    });
   return response
  } catch (err) {
    if (!err?.response) {
      return openNotificationWithIcon('error', 'ERROR', 'No Server Response');
    } else {
      return openNotificationWithIcon('error', 'ERROR', 'Registration Failed');
  }
}
};
