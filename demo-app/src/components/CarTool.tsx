import React, { FC, useState } from 'react';

import { Car } from '../models/Car';

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export type CarToolProps = {
  cars: Car[],
};

export const CarTool: FC<CarToolProps> = (props) => {

  const [ cars, setCars ] = useState(props.cars.concat());

  const addCar = (car: Car) => {
    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id!), 0 ) + 1,
    }));
  };

  const deleteCar = (carId: number) => {
    setCars(cars.filter(c => c.id !== carId));
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} onDeleteCar={deleteCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
      <ToolFooter companyName="A Cool Company, Inc." />
    </>
  );

};