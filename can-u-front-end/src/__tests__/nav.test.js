import React from "react";
import Nav from "../components/nav/nav.js";

import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<Nav /> component", () => {
  it("should render the nav", () => {
    const nav = shallow(<Nav />);
    expect(nav.find("div").exists()).toBeTruthy();
    expect(nav.find("ul").exists()).toBeTruthy();
    expect(nav.find("li").exists()).toBeTruthy();
    expect(nav.find("span").exists()).toBeTruthy();
  });

});