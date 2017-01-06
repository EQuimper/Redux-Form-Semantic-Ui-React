import React from 'react';
import { shallow } from 'enzyme';
import { TextInput } from '../src';

describe('TextInput', () => {
  it('has a display name', () => {
    expect(TextInput.displayName)
      .toBe('ReduxFormSemanticUiReactInput');
  });

  it('render a TextInput', () => {
    const wrapper = shallow(<TextInput value="email" name="email" />);
    expect(wrapper.prop('value')).toEqual('email');
    expect(wrapper.prop('name')).toEqual('email');
  });

  it('render TextInput without error if not touched', () => {
    const wrapper = shallow(<TextInput value="email" name="email" meta={{ error: 'Foo' }} />);
    expect(wrapper.prop('errorText')).toBeFalsy();
  });

  it('render TextInput with error if touched', () => {
    const wrapper = shallow(
      <TextInput value="email" name="email" meta={{ error: 'Foo', touched: true }} />
    );
    expect(wrapper.prop('errorText')).toEqual('Foo');
  });
});

