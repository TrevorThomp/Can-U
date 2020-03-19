import thunk from "redux-thunk";
import configMockStore from "redux-mock-store";
import * as actions from "../action";

const mockStore = configMockStore([thunk]);

describe("Actions", () => {
  it("Creates POST action", () => {
    const store = mockStore({});
    const expectedAction = [
      {
        type: "POST",
        payload: "foo"
      }
    ];
    store.dispatch(actions.post("foo"));
    let dispatchedActions = store.getActions();
    expect(dispatchedActions).toEqual(expectedAction);
  });

  it("Creates GET action", () => {
    const store = mockStore({});
    const post = [
      {
        type: "GET",
        payload: undefined
      }
    ];
    store.dispatch(actions.get());
    let dispatchedActions = store.getActions();
    expect(dispatchedActions).toEqual(post);
  });
});

// describe("async Action Creator", () => {
//   it("should create a GET action", () => {
//     const store = mockStore({ results: [] });
//     return store.dispatch(actions._getTodoItems()).then(() => {
//       let dispatchedActions = store.getActions();
//       expect(dispatchedActions[0].type).toEqual("GET");
//     });
//   });
// });