import React, { Fragment, useState } from 'react';
import { TimePicker, KeyboardTimePicker } from 'material-ui-pickers';

function InlineTimePickerDemo() {
  const [selectedDate, handleDateChange] = useState('2018-01-01T00:00:00.000Z');

  return (
    <Fragment>
      <div className="picker">
        <TimePicker
          variant="inline"
          label="Inline mode"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>

      <div className="picker">
        <KeyboardTimePicker
          variant="inline"
          label="With keyboard"
          value={selectedDate}
          onChange={handleDateChange}
          mask={[/\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
        />
      </div>
    </Fragment>
  );
}

export default InlineTimePickerDemo;
