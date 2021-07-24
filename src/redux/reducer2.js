const initial = '';

const reducer2 = (state = initial, action) => {
  switch (action.type) {
    case 'CHANGE_CATEGORY':
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default reducer2;
