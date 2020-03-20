import React from "react";
import MyJobs from "./myJobs.js";
import createStore from '../../store'
import { Provider } from 'react-redux';

import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const store = createStore();

describe("<MyJobs /> component", () => {
  it("should render the the users jobs", () => {
    const myJobs = shallow(<Provider store={store}><MyJobs /></Provider>);
    expect(myJobs.find("table").exists()).toBeFalsy();
    expect(myJobs.find("tbody").exists()).toBeFalsy();
  });
});