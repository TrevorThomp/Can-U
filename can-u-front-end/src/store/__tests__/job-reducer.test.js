import reducer from "../job-reducer";

describe("Job Reducer Tests", () => {
  it("GET reducer", () => {
    let initialState = {};
    let action = {
      type: "GET",
      payload: { name: "Johnny" }
    };

    let expected = {
      jobList: action.payload
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});