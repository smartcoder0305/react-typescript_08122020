import React, { FC } from 'react';

import { Car } from '../models/Car';

import { CarEditRow } from './CarEditRow';
import { CarViewRow } from './CarViewRow';

export type CarTableProps = {
  cars?: Car[],
  editCarId?: number,
  onEditCar: (carId: number) => void,
  onDeleteCar: (carId: number) => void,
  onSaveCar: (car: Car) => void,
  onCancelCar: () => void,
};

export const CarTable: FC<CarTableProps> = ({
  cars, editCarId,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
}) => {

  return (
    <table>
      <thead>
      <tr>
        <th>Id</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
        <th>Price</th>
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