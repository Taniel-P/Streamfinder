import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Account from './Account.jsx';

// ==== Test Template ====
// ====== index.jsx ======
// For Jest usage, see: https://jestjs.io/docs/getting-started
// For Enzyme usage, see: https://github.com/enzymejs/enzyme-matchers/tree/master/packages/jest-enzyme

describe('Test Component entry point', function () {
  it('renders without crashing given the required props', () => {

    const props = {
      location: {
        state: {
          user: 'taniel location.state object'
        }
      },
      serverResponse: {
        username: 'taniel',
        email: 'emajnknil',
        password: null,
        platforms: [
          {name: 'Netflix', id: 'netflix', isSelected: true, cost: 17.99},
          {name: 'Amazon', id: 'amazon', isSelected: true, cost: 16.99},
          {name: 'HBO', id: 'hbo', isSelected: false, cost: 15.99},
          {name: 'Disney', id: 'disney', isSelected: false, cost: 17.99}
        ]
      }
    };

    const wrapper = shallow(<Account {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});