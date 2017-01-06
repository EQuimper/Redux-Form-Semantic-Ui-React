import React from 'react';
import { shallow } from 'enzyme';
import { TextArea } from '../src';

describe('TextArea', () => {
  it('has a display name', () => {
    expect(TextArea.displayName)
      .toBe('ReduxFormSemanticUiReactTextArea');
  });

  it('render a TextArea', () => {
    const wrapper = shallow(<TextArea value="email" name="email" />);
    expect(wrapper.prop('value')).toEqual('email');
    expect(wrapper.prop('name')).toEqual('email');
  });

  it('render TextArea without error if not touched', () => {
    const wrapper = shallow(<TextArea value="email" name="email" meta={{ error: 'Foo' }} />);
    expect(wrapper.prop('errorText')).toBeFalsy();
  });

  it('render TextArea with error if touched', () => {
    const wrapper = shallow(
      <TextArea value="email" name="email" meta={{ error: 'Foo', touched: true }} />
    );
    expect(wrapper.prop('errorText')).toEqual('Foo');
  });
});

