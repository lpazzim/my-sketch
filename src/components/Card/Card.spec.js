import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card component', () => {
  const value = 'hellotest';


  it('renders card', () => {
    const component = shallow(<Card> {value} </Card>);

    expect(component.exists()).toBe(true);
  });
});
