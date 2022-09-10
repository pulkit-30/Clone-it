export const initialState = {
  basket: [],
  isUser: false,
  username: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "Add_To_Cart":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "Remove_From_Cart":
      return {
        ...state,
        basket: state.basket.filter((item, index) => {
          return index !== action.item.index;
        }),
      };

    case "User_Sign_In":
      return state;
    default:
      return state;
  }
}
export default reducer;
