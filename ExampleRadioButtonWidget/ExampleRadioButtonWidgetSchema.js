import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import ValidationMessageSchema from './../ValidationMessage/ValidationMessageSchema';

const schema = Object.freeze({
  _cId: PropTypes.string,
  customStyle: PropTypes.string,
  _iddesign_selectedPath: PropTypes.string,
  _iddesign_id: PropTypes.string,
  _iddesign_label: PropTypes.string,
  _iddesign_componentType: PropTypes.string,
  _iddesign_isHighlighted: PropTypes.string,
  _iddesign_hasHighlight: PropTypes.bool,
  _iddesign_hasSelector: PropTypes.bool,
  _iddesign_listHasHighlight: PropTypes.bool,
  _iddesign_listHasSelector: PropTypes.bool,
  _iddesign_isHighlightedList: PropTypes.string,
  _iddesign_listIds: PropTypes.string,
  _iddesign_listLabels: PropTypes.string,
  _iddesign_listParentLabels: PropTypes.string,
  _iddesign_placeholderParamNames: PropTypes.string,
  _iddesign_placeholderDropIds: PropTypes.string,
  _theme: PropTypes.string,
  _forceFocus: PropTypes.bool,
  _requestInFlight: PropTypes.bool,
  _forceLtr: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  choices: ImmutablePropTypes.listOf(PropTypes.string),
  value: PropTypes.number,
  validations: ImmutablePropTypes.listOf(ImmutablePropTypes.shape(ValidationMessageSchema)),
  saveInto: ImmutablePropTypes.listOf(PropTypes.string),
  actions: ImmutablePropTypes.listOf(PropTypes.any)
});

export const ExampleRadioButtonWidgetCdtName = 'ExampleRadioButtonWidget';
export default schema;
