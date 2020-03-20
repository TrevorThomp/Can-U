import React from 'react';
import App from './App';
import createStore from './store'
import { Provider } from 'react-redux';

import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });


const store = createStore();

test('renders learn react link', () => {
  const app = mount(<Provider store={store}><App /></Provider>);
  expect(app.find("div").exists()).toBeTruthy();
});
