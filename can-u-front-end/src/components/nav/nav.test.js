import React from "react";
import Nav from "./nav.js";

import Enzyme, {shallow} from "enzyme";
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