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

  it("Creates DETAIL action", () => {
    const store = mockStore({});
    const details = [
      {
        type: "DETAILS",
        payload: undefined
      }
    ];
    store.dispatch(actions.details());
    let dispatchedActions = store.getActions();
    expect(dispatchedActions).toEqual(details);
  });

  it("Creates DELETE action", () => {
    const store = mockStore({});
    const destroy = [
      {
        type: "DELETE",
        payload: undefined
      }
    ];
    store.dispatch(actions.destroy());
    let dispatchedActions = store.getActions();
    expect(dispatchedActions).toEqual(destroy);
  });
});