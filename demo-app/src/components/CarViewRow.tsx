import React, { FC } from 'react';

import { Car } from '../models/Car';

export type CarViewRowProps = {
  car: Car,
};

export const CarViewRow: FC<CarViewRowProps> = ({ car }) => {

  return (
    <tr>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.price}</td>
    </tr>
  );

};