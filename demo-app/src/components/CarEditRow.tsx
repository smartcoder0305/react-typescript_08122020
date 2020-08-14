import React, { FC } from 'react';

import { Car } from '../models/Car';
import { carColors } from '../carFormLookups';
import { useForm } from '../hooks/useForm';

export type CarEditRowProps = {
  car: Car,
  onSaveCar: (car: Car) => void,
  onCancelCar: () => void,
};

export const CarEditRow: FC<CarEditRowProps> = ({
  car,
  onSaveCar,
  onCancelCar: cancelCar,
}) => {

  const [ carForm, change ] = useForm({
    make: car.make, model: car.model, year: car.year,
    color: car.color, price: car.price,
  });

  const saveCar = () => {
    onSaveCar({
      ...carForm, id: car.id,
    });
  };

  return (
    <tr>
      <td>{car.id}</td>
      <td><input type="text" name="make" value={carForm.make} onChange={change} /></td>
      <td><input type="text" name="model" value={carForm.model} onChange={change} /></td>
      <td><input type="number" name="year" value={carForm.year} onChange={change} /></td>
      <td>
        <select name="color" onChange={change}>
          {carColors.map(carColor =>
            <option key={carColor} value={carColor}>{carColor}</option>)}
        </select> 
      </td>
      <td><input type="number" name="price" value={carForm.price} onChange={change} /></td>
      <td>
        <button type="button" onClick={saveCar}>
          Save
        </button>
        <button type="button" onClick={cancelCar}>
          Cancel
        </button>
      </td>
    </tr>
  );

};