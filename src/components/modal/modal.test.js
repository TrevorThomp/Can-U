import React from "react";
import Modal from "./modal";

import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<Modal /> component", () => {
  it("should render as expected", () => {
    const modal = shallow(<Modal />);
    expect(modal.find("header").exists()).toBeTruthy();
  });

  it("should render as expected", () => {
    const modal = shallow(<Modal />);
    expect(modal.find("button").exists()).toBeTruthy();
  });

  it("should render as expected", () => {
    const modal = shallow(<Modal />);
    expect(modal.find("span").exists()).toBeTruthy();
  });
});