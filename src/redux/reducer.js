import { SET_DIALOG, setDialog } from "./actions";

const initValue = {
  dialog: "",
};

const reducer = (state = initValue, action) => {
  switch (action.type) {
    case SET_DIALOG:
      return {
        ...state,
        dialog: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
