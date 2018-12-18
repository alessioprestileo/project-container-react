// @flow

import { ImageForUpload } from '../components/Form/classes';
// import type { Master as FieldHandlerMaster } from '../components/Form/FieldHandler/FieldHandler';

type FieldHandlerMaster = {};

export type DropDownSourceItem = { id: number | string, value: string };

export type DropDownSourceData = {
  currentValue: string,
  options: Array<DropDownSourceItem>,
};

export type FieldValue = boolean | string | ImageForUpload | Date;

export type FieldType =
  'AUTOCOMPLETE' |
  'CHECKBOX' |
  'DATEPICKER' |
  'DROPDOWNLIST' |
  'IMAGE' |
  'TEXTBOX';

export type ErrorMessages = { [key: string]: string };

export type FieldStateDataAutocomplete = {
  type: 'AUTOCOMPLETE',
  value: string,
};

export type FieldStateDataCheckBox = {
  type: 'CHECKBOX',
  value: boolean,
};

export type FieldStateDataDatePicker = {
  type: 'DATEPICKER',
  value: Date,
};

export type FieldStateDataDropDownList = {
  type: 'DROPDOWNLIST',
  value: string,
};

export type FieldStateDataImage = {
  type: 'IMAGE',
  value: ImageForUpload,
};

export type FieldStateDataTextBox = {
  type: 'TEXTBOX',
  value: string,
};

export type FieldStateData =
  FieldStateDataAutocomplete |
  FieldStateDataCheckBox |
  FieldStateDataDatePicker |
  FieldStateDataDropDownList |
  FieldStateDataImage |
  FieldStateDataTextBox;

export type FieldState = {
  data: FieldStateData,
  errorMessages?: { [key: string]: string },
  hidden: boolean,
  isTouched: boolean,
  isValid: boolean,
};

export type FieldStateAutoComplete = FieldState & {
  data: FieldStateDataAutocomplete,
};

export type FieldStateCheckBox = FieldState & {
  data: FieldStateDataCheckBox,
};

export type FieldStateDatePicker = FieldState & {
  data: FieldStateDataDatePicker,
};

export type FieldStateDropDownList = FieldState & {
  data: FieldStateDataDropDownList,
};

export type FieldStateImage = FieldState & {
  data: FieldStateDataImage,
};

export type FieldStateTextBox = FieldState & {
  data: FieldStateDataTextBox,
};

export type Draft = {
  [key: string]: FieldState,
};

export type DraftsData = {
  [key: string]: Draft,
};

export type ValidationMethod = (value: FieldValue) =>
  { isValid: boolean, errorMessages: ErrorMessages};

export type ValidationMethodsList = Array<'EMAIL' |
  'INTEGER' |
  'MATCH' |
  'REQUIRED' |
  ValidationMethod>;

export type FieldCommon = {
  customClasses?: string,
  defaultValue: ?FieldValue,
  disabled: boolean,
  errorMessages?: ErrorMessages,
  formListeners?: Array<(form: FieldHandlerMaster) => void>,
  hidden?: boolean,
  id: string,
  label: string,
  required?: boolean,
  responsive?: boolean,
  type: FieldType,
  validationMethods?: ValidationMethodsList,
};

export type FieldAutoComplete = FieldCommon & {
  defaultValue: ?string,
  type: 'AUTOCOMPLETE',
};

export type FieldCheckBox = FieldCommon & {
  defaultValue: ?boolean,
  type: 'CHECKBOX',
};

export type FieldDatePicker = FieldCommon & {
  defaultValue: ?string,
  type: 'DATEPICKER',
};

export type FieldDropDownList = FieldCommon & {
  defaultValue: ?string,
  type: 'DROPDOWNLIST',
};

export type FieldImage = FieldCommon & {
  defaultValue: ?ImageForUpload,
  type: 'IMAGE',
};

export type FieldTextBox = FieldCommon & {
  defaultValue: ?string,
  type: 'TEXTBOX',
};

export type Field =
  FieldAutoComplete |
  FieldCheckBox |
  FieldDatePicker |
  FieldDropDownList |
  FieldImage |
  FieldTextBox;

type FieldSet = {
  legend: ?string,
  fields: Array<Field>,
};

export type FormDataCustom = Array<FieldSet>;
