const initialState = {
  jobs: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMPANY":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: [...state.jobs.content, action.payload],
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
