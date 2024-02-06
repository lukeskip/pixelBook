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
  terminalData: [
    "Bienvenido a mi website",
    String.raw`
      ________         __            ______                _      
      / ____/ /_  ___  / /______     / ________ ___________(_____ _
    / /   / __ \/ _ \/ //_/ __ \   / / __/ __  / ___/ ___/ / __  /
    / /___/ / / /  __/ ,< / /_/ /  / /_/ / /_/ / /  / /__/ / /_/ / 
    \____/_/ /_/\___/_/|_|\____/   \____/\__,_/_/   \___/_/\__,_/  
                                                                  
  `,
    "version 1.0.0",
    "teclea la palabra init y presiona enter",
  ],
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
      return {
        ...state,
        terminalData: action.payload,
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
