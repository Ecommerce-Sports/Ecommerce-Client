// import {
//     FETCH_PRODUCT,
//     GET_ONE_PRODUCT,
//     ADD_PRODUCT,
//     CHANGE_PRODUCT,
//     DELETE_PRODUCT,
  
//     FETCH_CATEGORY,
//     GET_ONE_CATEGORY,
//     ADD_CATEGORY,
//     DELETE_CATEGORY,
  
//     FETCH_ORDER,
//     GET_ONE_ORDER,
  
//     FETCH_CUSTOMER_LIST,
  
//     FECTH_BANNER,
//     ADD_BANNER,
//     DELETE_BANNER
//   } from "../utils/constants";
  
  const initState = {
    products: [],
    product: {},
    categories: [],
    category: {},
    orders: [],
    order: {},
    customerList: [],
    banners: []
  };
  
  const reducer = (state = initState, action) => {
    switch (action.type) {
  
      default:
        return state;
    }
  };
  
  export default reducer;
  