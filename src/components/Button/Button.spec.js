import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

describe('Button component', () => {
  const value = 'hellotest';
  const newValue = 'newvalue';


  it('renders button', () => {
    const component = shallow(<Button> {value} </Button>);

    expect(component.exists('button')).toBe(true);
  });

  it('Simulate Click', () => {
    const onClick = jest.fn();
    const component = shallow(<Button onClick={onClick}> {value} </Button>);
    const evt = { target: { value: newValue } };

    component.find('button').simulate('click', evt);

    expect(onClick).toBeCalledTimes(1);
  });

  it('Disabled', () => {
    const onClick = jest.fn();

    const component = shallow(<Button onClick={onClick} disabled> {value} </Button>);
    const evt = { target: { value: newValue } };

    component.find('button').simulate('click', evt)

    expect(onClick).toBeCalledTimes(0);
  });
});
