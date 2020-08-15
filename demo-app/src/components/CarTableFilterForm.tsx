import React, { FC } from 'react';

import { Car } from '../models/Car';
import { useForm } from '../hooks/useForm';

export type CarTableFilterSettings = { filterField: keyof Car, filterValue: string };

export type CarFieldField = { id: number, label: string, name: keyof Car };

export type CarTableFilterFormProps = {
  onFilter: (filterSettings: CarTableFilterSettings) => void,
};

const filterFields: CarFieldField[] = [
  { id: 1, label: 'Make', name: 'make' },
  { id: 2, label: 'Model', name: 'model' },
  { id: 3, label: 'Year', name: 'year' },
  { id: 4, label: 'Color', name: 'color' },
  { id: 5, label: 'Price', name: 'price' },
];

export const CarTableFilterForm: FC<CarTableFilterFormProps> = (props) => {

  const [ filterForm, change, resetFilterForm ] = useForm<CarTableFilterSettings>({
    filterField: 'make',
    filterValue: '',
  });

  const clearFilter = () => {

    props.onFilter({
      filterField: 'id', filterValue: '',
    });

    resetFilterForm();

  };

  return (
    <form>
      <label htmlFor="filter-field-select">Select Filter Field:</label>
      <select id="filter-field-select" name="filterField" value={filterForm.filterField} onChange={change}>
        {filterFields.map(filterField =>
          <option key={filterField.id} value={filterField.name}>
            {filterField.label}
          </option>)}
      </select>
      <label htmlFor="filter-value-input">Filter Value:</label>
      <input type="text" id="filter-value-input" name="filterValue" value={filterForm.filterValue} onChange={change} />
      <button type="button" onClick={() => props.onFilter({
        filterField: filterForm.filterField, filterValue: filterForm.filterValue,
      })}>Apply Filter</button>
      <button type="button" onClick={clearFilter}>Clear Filter</button>
    </form>
  )

};