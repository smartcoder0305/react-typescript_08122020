import React, { FC } from 'react';

import { Car } from '../models/Car';

import { CarEditRow } from './CarEditRow';
import { CarViewRow } from './CarViewRow';

import "./CarTable.css";

export type CarTableSortSettings = { col: keyof Car, dir: string };

export type CarTableProps = {
  cars?: Car[],
  editCarId?: number,
  sort: CarTableSortSettings,
  onEditCar: (carId: number) => void,
  onDeleteCar: (carId: number) => void,
  onSaveCar: (car: Car) => void,
  onCancelCar: () => void,
  onSort: (sortSetting: CarTableSortSettings) => void,
};

const colHeaders: { id: number, label: string, field: keyof Car }[] = [
  { id: 1, label: 'Id', field: 'id' },
  { id: 2, label: 'Make', field: 'make' },
  { id: 3, label: 'Model', field: 'model' },
  { id: 4, label: 'Year', field: 'year' },
  { id: 5, label: 'Color', field: 'color' },
  { id: 6, label: 'Price', field: 'price' },
];

export const CarTable: FC<CarTableProps> = ({
  cars, editCarId, sort: sortSetting,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
  onSort: sort,
}) => {

  return (
    <table>
      <thead>
      <tr>
        {colHeaders.map(colHeader => {
          return <th key={colHeader.id}>
            <button className="sort-col-button" type="button" onClick={() => sort({
              col: colHeader.field,
              dir: sortSetting.dir === 'asc' ? 'des' : 'asc',
            })}>
              <span>{colHeader.label}</span>
              <span className='sort-dir'>
                {sortSetting.col === colHeader.field && (sortSetting.dir === 'asc' ? 'v' : '^')}
              </span> 
            </button>
          </th>
        })}
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
        {cars!.map(car => car.id === editCarId
          ? <CarEditRow key={car.id} car={car} onSaveCar={saveCar} onCancelCar={cancelCar} />
          : <CarViewRow key={car.id} car={car} onEditCar={editCar} onDeleteCar={deleteCar} />)}
      </tbody>
    </table>
  );


}

CarTable.defaultProps = {
  cars: [],
  editCarId: -1,
};