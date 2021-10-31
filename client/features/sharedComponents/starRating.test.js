import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';

import StarRating from './StarRating.jsx';

// ==== Test Template ====
// ====== index.jsx ======
// For Jest usage, see: https://jestjs.io/docs/getting-started
// For Enzyme usage, see: https://github.com/enzymejs/enzyme-matchers/tree/master/packages/jest-enzyme

describe('Test StarRating Component', function () {

  it('Should return a value from 1-5 when clicked', function () {
    const wrapper = shallow(<StarRating />);

  });

  it('Should return a preview value on hover', function () {

  });
});
