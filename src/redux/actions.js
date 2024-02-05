const SET_DIALOG = "SET_DIALOG";

const setDialog = (payload) => {
  return {
    type: SET_DIALOG,
    payload: payload,
  };
};

export { SET_DIALOG, setDialog };
