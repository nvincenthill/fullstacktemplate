import Enzyme from 'enzyme';
// import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

import Applet from './Applet';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

describe('Applet', () => {
  it('should run a component level test', () => {
    expect(true).toBe(true);
  });
});
