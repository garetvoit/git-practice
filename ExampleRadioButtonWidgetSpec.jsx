import ExampleRadioButtonWidget from '../ExampleRadioButtonWidget.jsx';
import schema from '../ExampleRadioButtonWidgetSchema';
import {nullModelFor} from '__lib__/test/helpers.js';

describe('GIVEN a ExampleRadioButtonWidget', function() {
  describe('WHEN given a null model', function() {
    it('THEN the component will be rendered', function() {
      const model = nullModelFor(schema);
      throw new Error(`This is just a ${ExampleRadioButtonWidget.CDT_NAME} test example. Model: ${model}`);
    });
  });
});
