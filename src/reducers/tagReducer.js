//Lab23-T1
export const tagState = {
    dummy: '',
  };
  
  export const tagReducer = (state = tagState, action) => {
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
  