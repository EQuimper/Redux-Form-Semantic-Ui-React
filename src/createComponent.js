import { Component, createElement } from 'react';

export default function (SemanticComponent, mapProps) {
  class InputComponent extends Component {
    getRenderedComponent() {
      return this.refs.component;
    }

    render() {
      return createElement(SemanticComponent, {
        ...mapProps(this.props),
        ref: 'component'
      }, null);
    }
  }
  InputComponent.displayName = `ReduxFormSemanticUiReact${SemanticComponent.name}`;
  return InputComponent;
}
