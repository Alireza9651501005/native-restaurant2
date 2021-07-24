const initialState = [];

const reducer3 = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVO':
      // const item = state.find(e => e.id === action.payload.id);
      // if (item) {
      //   item.flag = true;
      //   return [...state];
      // }
      return [...state, {...action.payload, flag: true}];

    case 'REMOVE_FROM_FAVO':
      const item2 = state.find(e => e.id === action.payload.id);
      if (item2) {
        item2.flag = false;
        return state.filter(e => e.id !== action.payload.id);
      } else {
        return state;
      }
    case 'CHECKOUT':
      state = [];
      return state;
    default:
      return state;
  }
};

export default reducer3;
