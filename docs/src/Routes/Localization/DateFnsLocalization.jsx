import React from 'react';
import SourcablePanel from '_shared/SourcablePanel';
import { Typography } from '@material-ui/core';

const DateFnsLocalization = () => (
  <div>
    <Typography variant="h3" gutterBottom> Localization date-fns </Typography>
    <Typography variant="body2" gutterBottom>
      Date-fns localization simply performs by passing date-fns locale object
      to the MuiPickerUtilsProvider
    </Typography>

    <SourcablePanel
      title="Localized example"
      sourceFile="Localization/DateFnsLocalizationExample.jsx"
      description={(
        <Typography variant="body2" gutterBottom>
          Note that pickers would be rerender automatically on locale change
        </Typography>
      )}
    />
  </div>
);

export default DateFnsLocalization;

