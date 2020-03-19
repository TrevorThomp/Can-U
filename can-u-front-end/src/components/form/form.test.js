import React from "react";
import TodoForm from "./form.js";
import createStore from '../../store'
import { Provider } from 'react-redux';

import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const store = createStore();

describe("<TodoForm /> component", () => {
    it("should render as a form", () => {
      const form = mount(<Provider store={store}><TodoForm /></Provider>);
      expect(form.find("form").exists()).toBeTruthy();
    });
  
    it("should render the label", () => {
      const form = mount(<Provider store={store}><TodoForm /></Provider>);
      expect(form.find("label").exists()).toBeTruthy();
    });

    it("should render the Field", () => {
      const form = mount(<Provider store={store}><TodoForm /></Provider>);
        expect(form.find("Field").exists()).toBeTruthy();
      });
});