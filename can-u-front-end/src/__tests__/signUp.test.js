import React from "react";
import SignUp from "../components//signIn/signIn.js";

import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<SignUp /> component", () => {
  it("should render the <div>", () => {
    const signUp = mount(<SignUp />);
    expect(signUp.find("div").exists()).toBeTruthy();
  });

  it("should render a form for signing up", () => {
    const signUp = shallow(<SignUp />);
    expect(signUp.find("form").exists()).toBeTruthy();
    expect(signUp.find("input").exists()).toBeTruthy();
    expect(signUp.find("button").exists()).toBeTruthy();
  });
});