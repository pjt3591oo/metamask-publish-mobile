const INCREMENT = "TEST/INCREMENT";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

const initialState = {
  number: 0
};

export const Test = function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };

    default:
      return state;
  }
};