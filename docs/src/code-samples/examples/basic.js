import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default function Hello() {
  return (
    <DayPicker
      immediateButton={{
        label: 'מיידי',
        handler: v => {
          console.log(v);
        },
        value: -1,
      }}
      isImmediate={true}
      locale={'he'}
      selectedDays={[new Date()]}
    />
  );
}
