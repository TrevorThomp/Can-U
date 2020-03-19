import React from "react";
import SignIn from "./signIn.js";
import createStore from '../../store'
import { Provider } from 'react-redux';

import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const store = createStore();

describe("<SignIn /> component", () => {
  it("should render the <div>", () => {
    const signIn = mount(<Provider store={store}><SignIn /></Provider>);
    expect(signIn.find("div").exists()).toBeTruthy();
  });

  it("should render the a form for signing in", () => {
    const signIn = mount(<Provider store={store}><SignIn /></Provider>);
    expect(signIn.find("form").exists()).toBeTruthy();
    expect(signIn.find("input").exists()).toBeTruthy();
  });
});