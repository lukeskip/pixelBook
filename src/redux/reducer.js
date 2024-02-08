import {
  SET_TERMINAL,
  CLEAN_TERMINAL,
  SET_DIALOG,
  SET_CONSOLE,
} from "./actions";
import welcome from "../utils/welcome";

const initValue = {
  dialog: "",
  consoleOpen: "open",
  terminalData: [...welcome],
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
      let newTerminal = [];
      if (!state.terminalData.includes(action.payload)) {
        if (state.terminalData.length > 3) {
          newTerminal = [...action.payload];
        } else {
          newTerminal = [...state.terminalData, ...action.payload];
        }
      }

      return {
        ...state,
        terminalData: newTerminal,
      };
      break;

    case CLEAN_TERMINAL:
      return {
        ...state,
        terminalData: [action.payload],
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
