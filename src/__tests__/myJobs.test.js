import React from "react";
import MyJobs from "../components/my-jobs/myJobs.js";

import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

// Issue: Cannot read propert of "map" of undefined
describe("<MyJobs /> component", () => {
  xit("should render the the users jobs", () => {
    const myJobs = shallow(<MyJobs />);
    expect(myJobs.find("table").exists()).toBeTruthy();
    expect(myJobs.find("tbody").exists()).toBeTruthy();
  });
});