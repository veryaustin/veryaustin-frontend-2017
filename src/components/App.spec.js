import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App Component', () => {
  it('should render the application', () => {
    const wrapper = shallow(<App />);
    const app = wrapper.find('div').length;
    expect(app).toBe(1);
  });
});