const SET_DIALOG = "SET_DIALOG";
const SET_CONSOLE = "SET_CONSOLE";
const SET_TERMINAL = "SET_TERMINAL";
const CLEAN_TERMINAL = "CLEAN_TERMINAL";

const setDialog = (payload) => {
  return {
    type: SET_DIALOG,
    payload: payload,
  };
};

const cleanTerminal = (payload) => {
  return {
    type: CLEAN_TERMINAL,
    payload: payload,
  };
};

const setConsole = (payload) => {
  return {
    type: SET_CONSOLE,
    payload: payload,
  };
};

const setTerminal = (payload) => {
  return {
    type: SET_TERMINAL,
    payload: payload,
  };
};

export {
  SET_TERMINAL,
  CLEAN_TERMINAL,
  SET_CONSOLE,
  SET_DIALOG,
  setDialog,
  cleanTerminal,
  setConsole,
  setTerminal,
};
