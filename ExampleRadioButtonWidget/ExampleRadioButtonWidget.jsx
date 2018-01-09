import React, {Component} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Immutable from 'immutable';
import style from './ExampleRadioButtonWidget.less';
import schema from './ExampleRadioButtonWidgetSchema';
import PureComponent from '__engine__/PureComponent';

class ExampleRadioButtonWidget extends Component {
  static CDT_NAME = 'ExampleRadioButtonWidget';
  static propTypes = {
    model: ImmutablePropTypes.mapContains(schema)
  };
  static defaultProps = {
    model: Immutable.Map()
  };
  render() {
    // Add rendering logic here
    return (
      <div className={style.thisIsJustAnExample}/>
    );
  }
}

export default PureComponent(ExampleRadioButtonWidget, [/* Add additional props that should be checked during shouldComponentUpdate */]);
