const SET_DIALOG = "SET_DIALOG";
const SET_CONSOLE = "SET_CONSOLE";
const SET_TERMINAL = "SET_TERMINAL";
const CLEAN_TERMINAL = "CLEAN_TERMINAL";
const SET_CATEGORY = "SET_CATEGORY";
const SET_PROMPT = "SET_PROMPT";
const SET_ERROR_MODE = "SET_ERROR_MODE";
const SET_MODE = "SET_MODE";
const SET_LANGUAGE = "SET_LANGUAGE";

const setDialog = (payload) => {
  return {
    type: SET_DIALOG,
    payload: payload,
  };
};

const setMode = (payload) => {
  return {
    type: SET_MODE,
    payload: payload,
  };
};

const setPrompt = (payload) => {
  return {
    type: SET_PROMPT,
    payload: payload,
  };
};

const setCategory = (payload) => {
  return {
    type: SET_CATEGORY,
    payload: payload,
  };
};

const setLang = (payload) => {
  return {
    type: SET_LANGUAGE,
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
const setErrorMode = (payload) => {
  return {
    type: SET_ERROR_MODE,
    payload: payload,
  };
};

export {
  SET_TERMINAL,
  SET_MODE,
  CLEAN_TERMINAL,
  SET_CONSOLE,
  SET_DIALOG,
  SET_CATEGORY,
  SET_PROMPT,
  SET_ERROR_MODE,
  SET_LANGUAGE,
  setLang,
  setMode,
  setDialog,
  setPrompt,
  cleanTerminal,
  setConsole,
  setTerminal,
  setCategory,
  setErrorMode,
};
