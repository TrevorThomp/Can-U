import React from "react";
import TodoForm from "../components/form/form.js";

import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<TodoForm /> component", () => {
    it("should render as a form", () => {
      const head = shallow(<TodoForm />);
      expect(head.find("form").exists()).toBeTruthy();
    });
  
    it("should render the label", () => {
      const head = shallow(<TodoForm />);
      expect(head.find("label").exists()).toBeTruthy();
    });

    it("should render the Field", () => {
        const head = shallow(<TodoForm />);
        expect(head.find("Field").exists()).toBeTruthy();
      });

      it("should render the button", () => {
        const head = shallow(<TodoForm />);
        expect(head.find("button").exists()).toBeTruthy();
      });
});