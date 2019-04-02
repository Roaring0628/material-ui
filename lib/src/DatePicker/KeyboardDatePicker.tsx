import * as React from 'react';
import { getFormatByViews } from '../_helpers/date-utils';
import { DateValidationProps, getError } from '../_helpers/text-field-helper';
import {
  BaseKeyboardPickerProps,
  useKeyboardPickerState,
} from '../_shared/hooks/useKeyboardPickerState';
import { useUtils } from '../_shared/hooks/useUtils';
import KeyboardDateInput, { KeyboardDateInputProps } from '../_shared/KeyboardDateInput';
import { ExtendWrapper2, Wrapper } from '../wrappers/Wrapper';
import { DatePicker } from './DatePicker';
import DatePickerRoot, { BaseDatePickerProps } from './DatePickerRoot';

export type KeyboardDatePickerProps = BaseDatePickerProps &
  DateValidationProps &
  BaseKeyboardPickerProps &
  ExtendWrapper2<KeyboardDateInputProps>;

export function KeyboardDatePicker(props: KeyboardDatePickerProps) {
  const {
    variant,
    allowKeyboardControl,
    animateYearScrolling,
    autoOk,
    disableFuture,
    disablePast,
    format,
    forwardedRef,
    initialFocusedDate,
    invalidDateMessage,
    labelFunc,
    leftArrowIcon,
    maxDate,
    maxDateMessage,
    minDate,
    minDateMessage,
    onAccept,
    onChange,
    onMonthChange,
    onYearChange,
    openTo,
    openToYearSelection,
    renderDay,
    rightArrowIcon,
    shouldDisableDate,
    value,
    views,
    ...other
  } = props;

  const utils = useUtils();
  const { pickerProps, inputProps, wrapperProps } = useKeyboardPickerState(props, {
    getDefaultFormat: () => getFormatByViews(views!, utils),
    getValidationError: () => getError(value, utils, props as any),
  });

  return (
    <Wrapper
      variant={variant}
      InputComponent={KeyboardDateInput}
      DateInputProps={inputProps}
      {...wrapperProps}
      {...other}
    >
      <DatePickerRoot
        {...pickerProps}
        allowKeyboardControl={allowKeyboardControl}
        animateYearScrolling={animateYearScrolling}
        disableFuture={disableFuture}
        disablePast={disablePast}
        leftArrowIcon={leftArrowIcon}
        maxDate={maxDate}
        minDate={minDate}
        openToYearSelection={openToYearSelection}
        renderDay={renderDay}
        rightArrowIcon={rightArrowIcon}
        shouldDisableDate={shouldDisableDate}
        views={views}
        openTo={openTo}
      />
    </Wrapper>
  );
}

KeyboardDatePicker.defaultProps = DatePicker.defaultProps;

export default React.forwardRef((props: KeyboardDatePickerProps, ref) => (
  <KeyboardDatePicker {...props} forwardedRef={ref} />
));
