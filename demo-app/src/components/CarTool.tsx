import React, { FC, useState, ChangeEvent } from 'react';

import { Car } from '../models/Car';

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { CarTable } from './CarTable';

export type CarToolProps = {
  cars: Car[],
};

const carColors = ['red','green','blue'];

function isInput(x: any): x is HTMLInputElement {
  return x.valueAsNumber;
}

export const CarTool: FC<CarToolProps> = (props) => {

  const [ carForm, setCarForm ] = useState({
    make: '', model: '', year: 1900, color: carColors[0], price: 0 });

  const [ cars, setCars ] = useState(props.cars.concat());

  const change = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

    setCarForm({
      ...carForm,
      [ e.target.name ]: isInput(e.target) && e.target.type === 'number'
        ? e.target.valueAsNumber : e.target.value,
    });

  };

  const addCar = () => {

    setCars(cars.concat({
      ...carForm,
      id: Math.max(...cars.map(c => c.id), 0 ) + 1,
    }));

  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} />
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
          <label htmlFor="color-input">Color:</label>
          <select id="color-select" name="color" onChange={change}>
            {carColors.map(carColor =>
              <option key={carColor} value={carColor}>{carColor}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="price-input">Price:</label>
          <input type="number" id="price-input" name="price" value={carForm.price} onChange={change} />
        </div>
        <button type="button" onClick={addCar}>Add Car</button>
      </form>
      <ToolFooter companyName="A Cool Company, Inc." />
    </>
  );

};