import React from "react";
import SignIn from "../components//signIn/signIn.js";

import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<SignIn /> component", () => {
  xit("should render the <div>", () => {
    const signIn = shallow(<SignIn />);
    expect(signIn.find("div").exists()).toBeTruthy();
  });

  xit("should render the a form for signing in", () => {
    const signIn = shallow(<SignIn />);
    expect(signIn.find("form").exists()).toBeTruthy();
    expect(signIn.find("input").exists()).toBeTruthy();
    expect(signIn.find("button").exists()).toBeTruthy();
  });
});