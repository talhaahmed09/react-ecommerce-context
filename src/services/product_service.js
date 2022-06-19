import axios from "axios";

const PRODUCT_URL = 'https://dummyjson.com/products';
let errMsg;

export const getPopularProducts = async (limit, skip)  => {
    let response;
    try {
      response = await axios.get(`${PRODUCT_URL}?limit=${limit}&skip=${skip}`)
     
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
}