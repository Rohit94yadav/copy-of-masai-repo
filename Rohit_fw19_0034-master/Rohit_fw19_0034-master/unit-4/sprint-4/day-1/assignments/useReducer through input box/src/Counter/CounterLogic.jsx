export const incrementation = { type: "INC_COUNT" };
export const deccrementation = { type: "DEC_COUNT" };
export const resetcount = { type: "RESET_COUNT" };

export const incrementationBy2000 = { type: "INCREASE_COUNTBY2000" };
export const deccrementationBy2000 = { type: "DECREASE_COUNTBY2000" };

export const addvalueByInput = (amount) => {
  return {
    type: "ADD_VALUE_BY_INPUT",
    payload: amount
  };
};
