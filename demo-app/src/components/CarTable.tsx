import React, { FC } from 'react';

import { Car } from '../models/Car';

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
        {cars!.map(car => <tr key={car.id}>
          <td>{car.id}</td>
          <td>{car.make}</td>
          <td>{car.model}</td>
          <td>{car.year}</td>
          <td>{car.color}</td>
          <td>{car.price}</td>
        </tr>)}
      </tbody>
    </table>
  );


}

CarTable.defaultProps = {
  cars: [],
};