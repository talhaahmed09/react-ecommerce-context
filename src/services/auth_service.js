import axios from "axios";

const AUTH_URL = 'https://dummyjson.com/auth/login';
const REGISTER_API = 'https://dummyjson.com/users/';

export const loginApi = async(obj) => {
    const response = await axios.post(
        AUTH_URL,
        JSON.stringify(obj),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      return response;
}

export const emailCheck = async (obj) => {
    const response = await axios.get(
        REGISTER_API+`search?q=${obj}`
    )
    return response;
}