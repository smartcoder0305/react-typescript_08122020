import React, { FC } from 'react';

import { Car } from '../models/Car';

export type CarTableProps = {
  car: Car,
};

export const CarTable: FC<CarTableProps> = ({ car }) => {

  return (
    <tr>
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