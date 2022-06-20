import axios from "axios";

const CATEGORY_URL = 'https://dummyjson.com/products/categories/';
const CATEGORY_PRODUCTS_URL = 'https://dummyjson.com/products/category/'
let errMsg = null;

export const getCategories = async () => {
    let response;
    try {
      response = await axios.get(CATEGORY_URL);
      return await response.data;
     
    } catch (err) {
      if (!err?.response) {
          errMsg ='No Server Response';
      } else if (err.response?.status === 409) {
          errMsg =err.msg;
      } else {
          errMsg = 'Category Fetch Failed'
      }
    }
  }

  export const getCategoryProducts = async (category) => {  
    let response;
    try {
      response = await axios.get(`${CATEGORY_PRODUCTS_URL}${category}`);
      return await response;
     
    } catch (err) {
      if (!err?.response) {
          errMsg ='No Server Response';
      } else if (err.response?.status === 409) {
          errMsg =err.msg;
      } else {
          errMsg = 'Category Fetch Failed'
      }
    }
  }