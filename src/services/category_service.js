import axios from "axios";

const CATEGORY_URL = 'https://dummyjson.com/products/categories';
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