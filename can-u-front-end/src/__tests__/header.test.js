import React from "react";
import Header from "../components/header/header.js";

import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<Header /> component", () => {
  it("should render as the header", () => {
    const head = shallow(<Header />);
    expect(head.find("header").exists()).toBeTruthy();
  });

  it("should render the h1", () => {
    const head = shallow(<Header />);
    expect(head.find("h1").exists()).toBeTruthy();
  });

  it("should render the nav", () => {
    const head = shallow(<Header />);
    expect(head.find("nav").exists()).toBeTruthy();
  });

  it("should render the Link", () => {
    const head = shallow(<Header />);
    expect(head.find("Link").exists()).toBeTruthy();
  });
});
