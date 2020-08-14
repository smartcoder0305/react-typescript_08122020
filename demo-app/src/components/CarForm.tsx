import React, { FC } from 'react';

import { Car } from '../models/Car';
import { carColors } from '../carFormLookups';
import { useForm } from '../hooks/useForm';

export type CarFormProps = {
  buttonText: string,
  onSubmitCar: (car: Car) => void,
};

export const CarForm: FC<CarFormProps> = (props) => {

  const [ carForm, change, resetForm ] = useForm({
    make: '', model: '', year: 1900, color: carColors[0], price: 0,
  });

  const submitCar = () => {

    props.onSubmitCar({ ...carForm });

    resetForm();
  };

  return (
    <form>
      <div>
        <label htmlFor="make-input">Make:</label>
        <input type="text" id="make-input" name="make" value={carForm.make} onChange={change} />
      </div>
      <div>
        <label htmlFor="model-input">Model:</label>
        <input type="text" id="model-input" name="model" value={carForm.model} onChange={change} />
      </div>
      <div>
        <label htmlFor="year-input">Year:</label>
        <input type="number" id="year-input" name="year" value={carForm.year} onChange={change} />
      </div>
      <div>
        <label htmlFor="color-select">Color:</label>
        <select id="color-select" name="color" onChange={change}>
          {carColors.map(carColor =>
            <option key={carColor} value={carColor}>{carColor}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="price-input">Price:</label>
        <input type="number" id="price-input" name="price" value={carForm.price} onChange={change} />
      </div>
      <button type="button" onClick={submitCar}>{props.buttonText}</button>
    </form>

  );

};

CarForm.defaultProps = {
  buttonText: 'Submit Car',
};
