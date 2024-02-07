import {
  SET_TERMINAL,
  SET_DIALOG,
  SET_CONSOLE,
  setDialog,
  setConsole,
} from "./actions";

const initValue = {
  dialog: "",
  consoleOpen: "open",
  terminalData: undefined,
};

const reducer = (state = initValue, action) => {
  switch (action.type) {
    case SET_DIALOG:
      return {
        ...state,
        dialog: action.payload,
      };
      break;

    case SET_TERMINAL:
      const newTerminal = state.terminalData
        ? [...state.terminalData, action.payload]
        : [action.payload];
      return {
        ...state,
        terminalData: newTerminal,
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
