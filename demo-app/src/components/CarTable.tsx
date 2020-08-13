import React, { FC } from 'react';

import { Car } from '../models/Car';

import { CarViewRow } from './CarViewRow';

export type CarTableProps = {
  cars?: Car[],
};

export const CarTable: FC<CarTableProps> = ({ cars }) => {

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
      </tr>
      </thead>
      <tbody>
        {cars!.map(car => <CarViewRow key={car.id} car={car} />)}
      </tbody>
    </table>
  );


}

CarTable.defaultProps = {
  cars: [],
};