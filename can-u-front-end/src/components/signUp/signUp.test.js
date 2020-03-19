import React from "react";
import SignUp from "./signUp";
import createStore from '../../store'
import { Provider } from 'react-redux';

import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const store = createStore();

describe("<SignUp /> component", () => {
  it("should render the <div>", () => {
    const signUp = mount(<Provider store={store}><SignUp /></Provider>);
    expect(signUp.find("div").exists()).toBeTruthy();
  });

  it("should render a form for signing up", () => {
    const signUp = mount(<Provider store={store}><SignUp /></Provider>);
    expect(signUp.find("form").exists()).toBeTruthy();
    expect(signUp.find("input").exists()).toBeTruthy();
  });
});