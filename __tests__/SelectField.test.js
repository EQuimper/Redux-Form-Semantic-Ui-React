import React from 'react';
import { shallow } from 'enzyme';
import { SelectField } from '../src';

describe('SelectField', () => {
  it('has a display name', () => {
    expect(SelectField.displayName)
      .toBe('ReduxFormSemanticUiReactSelect');
  });

  it('render a SelectField', () => {
    const wrapper = shallow(<SelectField value="country" name="country" placeholder="Country" />);
    expect(wrapper.prop('value')).toEqual('country');
    expect(wrapper.prop('name')).toEqual('country');
    expect(wrapper.prop('placeholder')).toEqual('Country');
  });

  it('render SelectField without error if not touched', () => {
    const wrapper = shallow(<SelectField value="email" name="email" meta={{ error: 'Foo' }} />);
    expect(wrapper.prop('errorText')).toBeFalsy();
  });

  it('render SelectField with error if touched', () => {
    const wrapper = shallow(
      <SelectField value="email" name="email" meta={{ error: 'Foo', touched: true }} />
    );
    expect(wrapper.prop('errorText')).toEqual('Foo');
  });
});

