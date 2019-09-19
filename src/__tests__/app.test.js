import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app';

describe('<App />', () => {
  it('nothing from this page is rendered at application start', () => {
    const app = shallow(<App />);
    expect(app.find('div').exists()).toBe(true);
  });

  it('snapshot is rendered correctly', () => {
    const app = renderer
      .create(<App />)
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
