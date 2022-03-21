import axios from 'axios';
import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from '../constants/productConstants';

// const dispatch = useDispatch();
export const getProducts =
  (keyword = '', currentPage = 1, price = [0, 25000]) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });
      // console.log(price);
      const link = `https://ecommerceapipublic-2.saghirahmad.repl.co/api/v1/products?keyword=${keyword}&page=${currentPage}&price[$gt]=${price[0]}&price[$lt]=${price[1]}`;

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DETAILS_REQUEST,
    });

    console.log('getting product details');

    const data = await axios.get(
      `https://ecommerceapipublic-2.saghirahmad.repl.co/api/v1/product/${id}`
    );

    console.log('product details have been fetched');

    const productDetails = data.data.singleProduct;

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: productDetails,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Action for clearing errors
export const clearError = async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
