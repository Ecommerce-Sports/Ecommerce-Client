import {
    FETCH_PRODUCT,
    GET_ONE_PRODUCT,
    // ADD_PRODUCT,
    // CHANGE_PRODUCT,
    // DELETE_PRODUCT,
  
    FETCH_CATEGORY,
    GET_ONE_CATEGORY,
    // ADD_CATEGORY,
    // DELETE_CATEGORY,
  
    // FETCH_ORDER,
    // GET_ONE_ORDER,
  
    // FETCH_CUSTOMER_LIST,
  
    FECTH_BANNER,
    // ADD_BANNER,
    // DELETE_BANNER

    FETCH_USER,
    GET_ONE_USER,

    FETCH_CART,
    GET_ONE_CART,
    CHANGE_CART,
    ADD_CART,
    DELETE_CART
  } from "../utils/constants";
  // import swal from 'sweetalert';
  import api from "../api/api";
  
  export const fetchProducts = (token, params, filter) => {
    return async (dispatch) => {
      try {
        const response = await api.get("admin/product", token, params, filter);
        if (response) {
          dispatch({ type: FETCH_PRODUCT, payload: response.data });
        }
      } catch (error) {
        console.log(error, `<<<<<<<<< error fetch products`);
      }
    };
  };
  
  export const getOneProducts = (id, token) => {
    return async (dispatch) => {
      try {
        const response = await api.get(`admin/product/${id}`, token);
        if (response) {
          dispatch({ type: GET_ONE_PRODUCT, payload: response.data });
        }
      } catch (error) {
        console.log(error, `<<<<<<<<< error`);
      }
    };
  };
  
  // export const addProduct = (payload, token) => {
  //   return async (dispatch) => {
  //     try {
  //       const response = await api.post("admin/product", payload, token);
  //       if (response) {
  //         dispatch({ type: ADD_PRODUCT, payload: response.data });
  //       }
  //     } catch (error) {
  //       console.log(error, `<<< error add product`);
  //     }
  //   };
  // };
  
//   export const changeProduct = (payload, id, token) => {
//     return async (dispatch) => {
//       try {
//         const response = await api.put(`admin/product/${id}`, payload, token);
//         if (response) {
//           dispatch({ type: CHANGE_PRODUCT, payload: response.data });
//         }
//       } catch (error) {
//         console.log(error, `<<< error add product`);
//       }
//     };
//   };
  
//   export const deleteProduct = (id, token, params, filter) => {
//     return async (dispatch) => {
//       try {
//         const response = await api.delete(`admin/product/${id}`, token);
//         if (response) {
//           dispatch({ type: DELETE_PRODUCT });
//           dispatch(fetchProducts(token, params, filter));
//         }
//       } catch (error) {
//         console.log(error, `<<< error add product`);
//       }
//     };
//   };

// CART
  export const fetchCart = (token) => {
    return async (dispatch) => {
      try {
        const response = await api.get("cart", token);
        if (response) {
          dispatch({ type: FETCH_CART, payload: response.data });
        }
      } catch (error) {
        console.log(error, `<<<<<<<<< error fetch cart`);
      }
    };
  };

  export const addCart = (payload, token) => {
    return async (dispatch) => {
      try {
        const response = await api.post("cart", payload, token);
        if (response) {
          dispatch({ type: ADD_CART, payload: response.data });
        }
      } catch (error) {
        console.log(error, `<<< error add cart`);
      }
    };
  };

  export const getOneCart = (email, token) => {
    return async (dispatch) => {
      try {
        const response = await api.get(`cart/${email}`, token);
        if (response) {
          dispatch({ type: GET_ONE_CART, payload: response.data });
        }
      } catch (error) {
        console.log(error, `<<<<<<<<< error get one cart`);
      }
    };
  };

  export const changeCart = (payload, id, token) => {
    return async (dispatch) => {
      try {
        const response = await api.put(`cart/${id}`, payload, token);
        if (response) {
          dispatch({ type: CHANGE_CART, payload: response.data });
        }
      } catch (error) {
        console.log(error, `<<< error edit cart`);
      }
    };
  };

  export const deleteCart = (id, token) => {
    return async (dispatch) => {
      try {
        const response = await api.delete(`cart/${id}`, token);
        if (response) {
          dispatch({ type: DELETE_CART });
          dispatch(fetchCart(token));
        }
      } catch (error) {
        console.log(error, `<<< error delete cart`);
      }
    };
  };

  // USER
  export const fetchUser = (token) => {
    return async (dispatch) => {
      try {
        const response = await api.get("user", token);
        if (response) {
          dispatch({ type: FETCH_USER, payload: response.data });
        }
      } catch (error) {
        console.log(error, `<<<<<<<<< error fetch user`);
      }
    };
  };

  export const getOneUser = (email, token) => {
    return async (dispatch) => {
      try {
        const response = await api.get(`user/${email}`, token);
        if (response) {
          dispatch({ type: GET_ONE_USER, payload: response.data });
        }
      } catch (error) {
        console.log(error, `<<<<<<<<< error get one user`);
      }
    };
  };
  
  export const fetchCategories = (token) => {
    return async (dispatch) => {
      try {
        const response = await api.get("admin/category", token);
        if (response) {
          dispatch({ type: FETCH_CATEGORY, payload: response.data });
        }
      } catch (error) {
        console.log(error, `<<<<<<<<< error fetch category`);
      }
    };
  };

  export const getOneCategory = (id, token) => {
    return async (dispatch) => {
      try {
        const response = await api.get(`admin/category/${id}`, token);
        if (response) {
          dispatch({ type: GET_ONE_CATEGORY, payload: response.data });
        }
      } catch (error) {
        console.log(error, `<<<<<<<<< error get one category`);
      }
    };
  };
  
//   export const addCategory = (payload, token) => {
//       return async (dispatch) => {
//         try {
//           const response = await api.post("admin/category", payload, token);
//           if (response) {
//             dispatch({ type: ADD_CATEGORY, payload: response.data });
//             dispatch(fetchCategories(token));
//           }
//         } catch (error) {
//           console.log(error, `<<< error add category`);
//         }
//       };
//   };
  
//   export const deleteCategory = (id, token) => {
//       return async (dispatch) => {
//         try {
//           const response = await api.delete(`admin/category/${id}`, token);
//           if (response) {
//             dispatch({ type: DELETE_CATEGORY });
//             dispatch(fetchCategories(token));
//           }
//         } catch (error) {
//           console.log(error, `<<< error add category`);
//         }
//       };
//   };
  
//   export const fetchOrders = (token, params, filter) => {
//     return async (dispatch) => {
//       try {
//         const response = await api.get("admin/order", token, params, filter);
//         if (response) {
//           dispatch({ type: FETCH_ORDER, payload: response.data });
//         }
//       } catch (error) {
//         console.log(error, `<<<<<<<<< error`);
//       }
//     };
//   };
  
//   export const getOneOrder = (id, token) => {
//       return async (dispatch) => {
//         try {
//           const response = await api.get(`admin/order/${id}`, token);
//           if (response) {
//             dispatch({ type: GET_ONE_ORDER, payload: response.data });
//           }
//         } catch (error) {
//           console.log(error, `<<<<<<<<< error get one order`);
//         }
//       };
//   };
  
//   export const fetchCustomerList = (token, params, filter) => {
//     return async (dispatch) => {
//       try {
//         const response = await api.get("admin/customer", token, params, filter);
//         if (response) {
//           dispatch({ type: FETCH_CUSTOMER_LIST, payload: response.data });
//         }
//       } catch (error) {
//         console.log(error, `<<<<<<<<< error`);
//       }
//     };
//   };
  
  export const fetchBanner = (token) => {
    return async (dispatch) => {
      try {
        const response = await api.get("admin/banner", token);
        if (response) {
          dispatch({ type: FECTH_BANNER, payload: response.data });
        }
      } catch (error) {
        console.log(error, `<<<<<<<<< error fetch banner`);
      }
    };
  };
  
//   export const addBanner = (payload, token) => {
//       return async (dispatch) => {
//         try {
//           const response = await api.post("admin/banner", payload, token);
//           if (response) {
//             dispatch({ type: ADD_BANNER, payload: response.data });
//             dispatch(fetchBanner(token));
//           }
//         } catch (error) {
//           console.log(error, `<<< error add banner`);
//         }
//       };
//   };
  
//   export const deleteBanner = (id, token) => {
//       return async (dispatch) => {
//         try {
//           const response = await api.delete(`admin/banner/${id}`, token);
//           if (response) {
//             dispatch({ type: DELETE_BANNER });
//             dispatch(fetchBanner(token));
//           }
//         } catch (error) {
//           console.log(error, `<<< error add banner`);
//         }
//       };
//   };
  