import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Table from './Table';
import { shallow, mount } from 'enzyme';

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
it('Renders correctly', () => {
    const tree = renderer
        .create(<Table />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});