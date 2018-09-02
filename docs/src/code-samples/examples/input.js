import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import DayPicker from 'react-day-picker';
import MomentLocaleUtils from '../../../../moment';

export default function Example() {
  return (
    <div>
      <p>Please type a day:</p>
      <DayPickerInput
        onDayChange={day => console.log(day)}
        dayPickerProps={{
          localeUtils: MomentLocaleUtils,
          locale: 'he',
          immediateButton: {
            label: 'מיידי',
            handler: v => {
              console.log(v);
            },
            value: -1,
          },
          isImmediate: true
        }}
      />
    </div>
  );
}
