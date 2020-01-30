export const projectState = {
  dummy: '',
};

export const projectReducer = (state = projectState, action) => {
  switch (action.type) {
    case 'DO_THING': {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
