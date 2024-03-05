import {
  SET_TERMINAL,
  CLEAN_TERMINAL,
  SET_DIALOG,
  SET_STATUS,
  SET_CATEGORY,
  SET_PROMPT,
  SET_ERROR_MODE,
  SET_MODE,
  SET_LANGUAGE,
  SET_BASH,
} from "./actions";
import strings from "../utils/strings";

const initValue = {
  dialog: [],
  prompt: "$",
  status: "running",
  category: "",
  errorMode: false,
  mode: "stopped",
  lang: "en",
  bash: undefined,
  terminalData: [...strings.en.welcome],
};

const reducer = (state = initValue, action) => {
  switch (action.type) {
    case SET_DIALOG:
      return {
        ...state,
        dialog: action.payload,
      };
      break;
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
      break;
    case SET_BASH:
      return {
        ...state,
        bash: action.payload,
      };
      break;
    case SET_ERROR_MODE:
      return {
        ...state,
        errorMode: action.payload,
      };
      break;
    case SET_PROMPT:
      return {
        ...state,
        prompt: action.payload,
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

    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
      break;

    case SET_MODE:
      return {
        ...state,
        mode: action.payload,
      };
      break;
    case SET_LANGUAGE:
      return {
        ...state,
        lang: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
