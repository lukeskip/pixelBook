const SET_DIALOG = "SET_DIALOG";
const SET_STATUS = "SET_STATUS";
const SET_TERMINAL = "SET_TERMINAL";
const CLEAN_TERMINAL = "CLEAN_TERMINAL";
const SET_CATEGORY = "SET_CATEGORY";
const SET_PROMPT = "SET_PROMPT";
const SET_ERROR_MODE = "SET_ERROR_MODE";
const SET_MODE = "SET_MODE";
const SET_LANGUAGE = "SET_LANGUAGE";
const SET_BASH = "SET_BASH";

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

const setBash = (payload) => {
  return {
    type: SET_BASH,
    payload: payload,
  };
};

const cleanTerminal = (payload) => {
  return {
    type: CLEAN_TERMINAL,
    payload: payload,
  };
};

const setStatus = (payload) => {
  return {
    type: SET_STATUS,
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
  SET_STATUS,
  SET_DIALOG,
  SET_CATEGORY,
  SET_PROMPT,
  SET_ERROR_MODE,
  SET_LANGUAGE,
  SET_BASH,
  setBash,
  setLang,
  setMode,
  setDialog,
  setPrompt,
  cleanTerminal,
  setStatus,
  setTerminal,
  setCategory,
  setErrorMode,
};
