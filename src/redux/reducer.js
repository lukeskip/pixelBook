import { SET_DIALOG, SET_CONSOLE, setDialog, setConsole } from "./actions";

const initValue = {
  dialog: "",
  consoleOpen: "open",
};

const reducer = (state = initValue, action) => {
  switch (action.type) {
    case SET_DIALOG:
      return {
        ...state,
        dialog: action.payload,
      };
      break;

    case SET_CONSOLE:
      return {
        ...state,
        consoleOpen: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
