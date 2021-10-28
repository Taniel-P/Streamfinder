import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Auth from './Auth.jsx';

// ==== Test Template ====
// ====== index.jsx ======
// For Jest usage, see: https://jestjs.io/docs/getting-started
// For Enzyme usage, see: https://github.com/enzymejs/enzyme-matchers/tree/master/packages/jest-enzyme

describe('Test Component entry point', function () {
  it('renders without crashing given the required props', () => {
    const wrapper = shallow(<Auth />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test if State', function () {
  it('rHas State', () => {
    class Auth extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          foo: false,
        };
      }

      render() {
        return (
          <div />
        );
      }
    }

    const wrapper = mount(<Auth />); // mount/render/shallow when applicable

    expect(wrapper).toHaveState('foo');
    expect(wrapper).toHaveState('foo', false);
    expect(wrapper).toHaveState({ foo: false });
  });
});
