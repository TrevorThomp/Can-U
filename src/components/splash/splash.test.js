import React from "react";
import Splash from "./splash.js";

import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<Splash /> component", () => {
  it("should render the <div>", () => {
    const splash = shallow(<Splash />);
    expect(splash.find("div").exists()).toBeTruthy();
  });

  it("should render the <h1>", () => {
    const splash = shallow(<Splash />);
    expect(splash.find("h1").exists()).toBeTruthy();
  });

  it("should render the <p>", () => {
    const splash = shallow(<Splash />);
    expect(splash.find("p").exists()).toBeTruthy();
  });
  it("should render the Login component", () => {
    const splash = shallow(<Splash />);
    expect(splash.find("Login").exists()).toBeTruthy();
  });
});