export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

//For Delete Item From Cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

export const incriment = () => {
  return {
    type: "INCRIMENT",
    payload: id,
  };
};

export const decriment = () => {
  return {
    type: "DECRIMENT",
    payload: id,
  };
};
