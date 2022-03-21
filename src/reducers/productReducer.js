import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from '../constants/productConstants';

export const productReducer = (state = { products: [] }, action) => {
  if (action.type === ALL_PRODUCT_REQUEST) {
    return {
      loading: true,
      products: [],
    };
  } else if (action.type === ALL_PRODUCT_SUCCESS) {
    return {
      loading: false,
      products: action.payload.products,
      productCount: action.payload.productCount,
      resultPerPage: action.payload.resultPerPage,
    };
  } else if (action.type === ALL_PRODUCT_FAIL) {
    return {
      loading: false,
      error: action.payload,
    };
  } else if (action.type === CLEAR_ERRORS) {
    return {
      ...state,
      error: null,
    };
  }
  return state;
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  if (action.type === PRODUCT_DETAILS_REQUEST) {
    return {
      loading: true,
      product: {},
    };
  } else if (action.type === PRODUCT_DETAILS_SUCCESS) {
    return {
      loading: false,
      product: action.payload,
    };
  } else if (action.type === PRODUCT_DETAILS_FAIL) {
    return {
      loading: false,
      error: action.payload,
    };
  } else if (action.type === CLEAR_ERRORS) {
    return {
      ...state,
      error: null,
    };
  }
  return state;
};
