import {
  FETCH_PRODUCT,
  GET_ONE_PRODUCT,
  ADD_PRODUCT,
  CHANGE_PRODUCT,
  DELETE_PRODUCT,

  FETCH_CATEGORY,
  ADD_CATEGORY,
  DELETE_CATEGORY,

  FETCH_ORDER,
  GET_ONE_ORDER,

  FETCH_CUSTOMER_LIST,

  FECTH_BANNER,
  ADD_BANNER,
  DELETE_BANNER
} from "../utils/constants";
// import swal from 'sweetalert';
import api from "../api/api";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await api.get("product");
      if (response) {
        dispatch({ type: FETCH_PRODUCT, payload: response.data });
      }
    } catch (error) {
      console.log(error, `<<<<<<<<< error`);
    }
  };
};

export const getOneProducts = (id) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`product/${id}`);
      if (response) {
        dispatch({ type: GET_ONE_PRODUCT, payload: response.data });
      }
    } catch (error) {
      console.log(error, `<<<<<<<<< error`);
    }
  };
};

export const addProduct = (payload) => {
  return async (dispatch) => {
    try {
      const response = await api.post("product", payload);
      if (response) {
        dispatch({ type: ADD_PRODUCT, payload: response.data });
      }
    } catch (error) {
      console.log(error, `<<< error add product`);
    }
  };
};

export const changeProduct = (payload, id) => {
  return async (dispatch) => {
    try {
      const response = await api.put(`product/${id}`, payload);
      if (response) {
        dispatch({ type: CHANGE_PRODUCT, payload: response.data });
      }
    } catch (error) {
      console.log(error, `<<< error add product`);
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await api.delete(`product/${id}`);
      if (response) {
        dispatch({ type: DELETE_PRODUCT });
        dispatch(fetchProducts());
      }
    } catch (error) {
      console.log(error, `<<< error add product`);
    }
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await api.get("category");
      if (response) {
        dispatch({ type: FETCH_CATEGORY, payload: response.data });
      }
    } catch (error) {
      console.log(error, `<<<<<<<<< error`);
    }
  };
};

export const addCategory = (payload) => {
    return async (dispatch) => {
      try {
        const response = await api.post("category", payload);
        if (response) {
          dispatch({ type: ADD_CATEGORY, payload: response.data });
          dispatch(fetchCategories());
        }
      } catch (error) {
        console.log(error, `<<< error add category`);
      }
    };
};

export const deleteCategory = (id) => {
    return async (dispatch) => {
      try {
        const response = await api.delete(`category/${id}`);
        if (response) {
          dispatch({ type: DELETE_CATEGORY });
          dispatch(fetchCategories());
        }
      } catch (error) {
        console.log(error, `<<< error add category`);
      }
    };
};

export const fetchOrders = () => {
  return async (dispatch) => {
    try {
      const response = await api.get("order");
      if (response) {
        dispatch({ type: FETCH_ORDER, payload: response.data });
      }
    } catch (error) {
      console.log(error, `<<<<<<<<< error`);
    }
  };
};

export const getOneOrder = (id) => {
    return async (dispatch) => {
      try {
        const response = await api.get(`order/${id}`);
        console.log(response, `<<<< response`);
        if (response) {
          dispatch({ type: GET_ONE_ORDER, payload: response.data });
        }
      } catch (error) {
        console.log(error, `<<<<<<<<< error get one order`);
      }
    };
};

export const fetchCustomerList = () => {
  return async (dispatch) => {
    try {
      const response = await api.get("customer");
      if (response) {
        dispatch({ type: FETCH_CUSTOMER_LIST, payload: response.data });
      }
    } catch (error) {
      console.log(error, `<<<<<<<<< error`);
    }
  };
};

export const fetchBanner = () => {
  return async (dispatch) => {
    try {
      const response = await api.get("banner");
      if (response) {
        dispatch({ type: FECTH_BANNER, payload: response.data });
      }
    } catch (error) {
      console.log(error, `<<<<<<<<< error fetch banner`);
    }
  };
};

export const addBanner = (payload) => {
    return async (dispatch) => {
      try {
        const response = await api.post("banner", payload);
        if (response) {
          dispatch({ type: ADD_BANNER, payload: response.data });
          dispatch(fetchBanner());
        }
      } catch (error) {
        console.log(error, `<<< error add banner`);
      }
    };
};

export const deleteBanner = (id) => {
    return async (dispatch) => {
      try {
        const response = await api.delete(`banner/${id}`);
        if (response) {
          dispatch({ type: DELETE_BANNER });
          dispatch(fetchBanner());
        }
      } catch (error) {
        console.log(error, `<<< error add banner`);
      }
    };
};
