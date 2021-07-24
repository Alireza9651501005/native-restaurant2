// ================== Cart List ============================///
export const addtocart = data => ({
  type: 'ADD_TO_CART',
  payload: data,
});

export const removefromcart = data => ({
  type: 'REMOVE_FROM_CART',
  payload: data,
});

// ================== Favorits ============================///
export const addtoFavo = data => ({
  type: 'ADD_TO_FAVO',
  payload: data,
});

export const removefromFavo = data => ({
  type: 'REMOVE_FROM_FAVO',
  payload: data,
});

export const addCategory = arr => ({
  type: 'CHANGE_CATEGORY',
  payload: arr,
});

export const checkout = () => ({
  type: 'CHECKOUT',
});
