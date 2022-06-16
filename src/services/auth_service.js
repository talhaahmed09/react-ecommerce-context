import axios from "axios";

const AUTH_URL = "https://dummyjson.com/auth/login";
const REGISTER_API = "https://dummyjson.com/users/";
let errMsg = "";

export const loginApi = async (body) => {
  const response = await axios.post(AUTH_URL, JSON.stringify(body), {
    headers: { "Content-Type": "application/json" },
  });

  return response;
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
   
  } catch (err) {
    if (!err?.response) {
        errMsg ='No Server Response';
    } else if (err.response?.status === 409) {
        errMsg ='Username Taken';
    } else {
        errMsg = 'Registration Failed'
    }
  }finally{
    return response;
  }
  
};
