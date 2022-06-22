const initalSate = {
  events: [],
};

export const eventReducer = (state = initalSate, action) => {
  switch (action.type) {
    case "GET_ALL_EVENTS":
      return {
        ...state,
        events: action.paylaod,
      };

    default:
      return state;
  }
};

// module.export = eventReducer;
