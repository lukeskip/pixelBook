const SET_DIALOG = "SET_DIALOG";
const SET_CONSOLE = "SET_CONSOLE";

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

export { SET_CONSOLE, SET_DIALOG, setDialog, setConsole };
