import React, { FC, useState } from 'react';

import { Car } from '../models/Car';
import { useCarList } from '../hooks/useCarList';

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export type CarToolProps = {
  cars: Car[],
};

export const CarTool: FC<CarToolProps> = (props) => {

  const [ editCarId, setEditCarId ] = useState(-1);

  const [ cars, appendCar, removeCar, replaceCar ] = useCarList(props.cars.concat());

  const cancelCar = () => setEditCarId(-1);

  const addCar = (car: Car) => {
    appendCar(car);
    cancelCar();
  };

  const deleteCar = (carId: number) => {
    removeCar(carId);
    cancelCar();
  };

  const saveCar = (car: Car) => {
    replaceCar(car);
    cancelCar();
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={setEditCarId} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
      <ToolFooter companyName="A Cool Company, Inc." />
    </>
  );

};