import React from 'react';
import toJson from 'enzyme-to-json';
import { render } from 'enzyme';

import Header from '../Header';

describe('<Header />', () => {
  it('should render correctly with imagePath=/', () => {
    const header = render(<Header imagePath="/"/>);
    expect(toJson(header)).toMatchSnapshot();
  });

  it('should render correctly with imagePath=https://ssl-gumtree.classistatic.com/jobs/job-app/', () => {
    const header = render(<Header imagePath="https://ssl-gumtree.classistatic.com/jobs/job-app/"/>);
    expect(toJson(header)).toMatchSnapshot();
  });
});
