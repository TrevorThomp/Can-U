const initialState = {
  jobList: [{}],
  showDetails: null,
  details: {}
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "DETAILS":
      let item = state.jobList.filter(item => item._id === payload)[0] || {};
      return { ...state, showDetails: !state.showDetails, details: item };

    case "GET":
      return { ...state, jobList: payload };

    case "POST":
      return { ...state, jobList: [...state.jobList, payload] };

    case "TOGGLE":
      return {
        ...state,
        jobList: state.todoList.map(item =>
          item._id === payload ? { ...item, complete: !item.complete } : item
        )
      };

    case "DELETE":
      return {
        ...state,
        jobList: state.jobList.filter(item => item._id !== payload)
      };

    default:
      return state;
  }
};
