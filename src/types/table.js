// @flow

export type DatumRequiredProps = {
  id: number | string,
  onOptionButtonClicked?: ?(id: number | string) => void,
  selected: boolean,
};

export type KColumnProps = {
  field: string,
  filterable?: boolean,
  filter?: string,
  format?: string,
  title: string,
};

export type SelectionStatus =
  'SINGLE_SELECTION' |
  'MULTIPLE_SELECTION' |
  'NONE';

export type TableFilter = {
  filters: Array<{ field: string, operator: string, value: string | boolean }>,
  logic: string,
};

export type KGridProps = {
  filter?: TableFilter,
  filterable?: boolean,
  handleFilterChange?: ?() => void,
  handleSortChange?: ?() => void,
  pageSize?: number,
  resizable?: boolean,
  rowHeight?: number,
  sortable?: {
    allowUnsort: boolean,
  },
  style?: {
    height: number,
  },
};
