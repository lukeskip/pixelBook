const SET_DIALOG = "SET_DIALOG";
const SET_CONSOLE = "SET_CONSOLE";
const SET_TERMINAL = "SET_TERMINAL";

const setDialog = (payload) => {
  return {
    type: SET_DIALOG,
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
  SET_CONSOLE,
  SET_DIALOG,
  setDialog,
  setConsole,
  setTerminal,
};
