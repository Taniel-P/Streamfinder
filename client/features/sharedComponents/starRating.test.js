import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import StarRating from './StarRating.jsx';

// ==== Test Template ====
// ====== index.jsx ======
// For Jest usage, see: https://jestjs.io/docs/getting-started
// For Enzyme usage, see: https://github.com/enzymejs/enzyme-matchers/tree/master/packages/jest-enzyme

describe('Test StarRating Component', function () {
  const wrapper = shallow(<StarRating />);

  it('renders without crashing given the required props', () => {
    expect(toJson(wrapper)).toMatchInlineSnapshot();
  });

  it('Should return a value from 1-5 when clicked', function () {

  });

  it('Should return a preview value on hover', function () {

  });
});
