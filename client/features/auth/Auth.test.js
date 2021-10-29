import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

require('dotenv').config()
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

describe('Should have correct state when information is provided', function () {
  it('rHas State', () => {
    class Auth extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          name: 'John',
          username: 'Doe',
          email: 'jd@gmail.com',
          password: process.env.temp_db_pass,
          platforms: [
            { name: 'Netflix', id: 'netflix', isSelected: false },
            { name: 'Amazon', id: 'amazon', isSelected: false },
            { name: 'HBO', id: 'hbo', isSelected: false },
            { name: 'Disney', id: 'disney', isSelected: false }
          ]
        };
      }

      render() {
        return (
          <div />
        );
      }
    }

    const wrapper = mount(<Auth />); // mount/render/shallow when applicable

    expect(wrapper).toHaveState('name');
    expect(wrapper).toHaveState('name', 'John');
    expect(wrapper).toHaveState(
      {
        name: 'John',
        username: 'Doe',
        email: 'jd@gmail.com',
        password: 'password',
        platforms: [
          { name: 'Netflix', id: 'netflix', isSelected: false },
          { name: 'Amazon', id: 'amazon', isSelected: false },
          { name: 'HBO', id: 'hbo', isSelected: false },
          { name: 'Disney', id: 'disney', isSelected: false }
        ]
      });
  });

  it('State should be null when no information is provided', () => {
    class Auth extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          name: null,
          username: null,
          email: null,
          password: null,
          platforms: null
        };
      }

      render() {
        return (
          <div />
        );
      }
    }

    const wrapper = mount(<Auth />); // mount/render/shallow when applicable

    expect(wrapper).toHaveState('name');
    expect(wrapper).toHaveState('name', null);
    expect(wrapper).toHaveState(
      {
        name: null,
        username: null,
        email: null,
        password: null,
        platforms: null
      });
  });
});
