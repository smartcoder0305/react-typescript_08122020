import React, { FC } from 'react';

import { Car } from '../models/Car';

import { CarViewRow } from './CarViewRow';

export type CarTableProps = {
  cars?: Car[],
  onDeleteCar: (carId: number) => void;
};

export const CarTable: FC<CarTableProps> = ({
  cars,
  onDeleteCar: deleteCar
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
        {cars!.map(car => <CarViewRow key={car.id} car={car}
          onDeleteCar={deleteCar} />)}
      </tbody>
    </table>
  );


}

CarTable.defaultProps = {
  cars: [],
};