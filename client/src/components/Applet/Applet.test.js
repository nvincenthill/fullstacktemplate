import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Applet from './Applet';

Enzyme.configure({ adapter: new Adapter() });

describe('Applet', () => {
  it('should render an Applet', () => {
    const app = shallow(<Applet />);
    expect(app).toMatchSnapshot();
  });
});
