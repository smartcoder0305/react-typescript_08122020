import React, { FC, useState } from 'react';

import { Car } from '../models/Car';
import { useCarList } from '../hooks/useCarList';

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { ConfirmModal } from './ConfirmModal';

export type CarToolProps = {
  cars: Car[],
};

export const CarTool: FC<CarToolProps> = (props) => {

  const [ editCarId, setEditCarId ] = useState(-1);
  const [ confirmDeleteCarId, setConfirmDeleteCarId ] = useState(-1);

  const [ cars, appendCar, removeCar, replaceCar ] = useCarList(props.cars.concat());

  const cancelCar = () => setEditCarId(-1);

  const addCar = (car: Car) => {
    appendCar(car);
    cancelCar();
  };

  const confirmDeleteCar = (carId: number) => {
    setConfirmDeleteCarId(carId);
  };

  const deleteCar = (carId: number) => {
    removeCar(carId);
    cancelCar();
    dismissConfirmDeleteCarModal();
  };

  const saveCar = (car: Car) => {
    replaceCar(car);
    cancelCar();
  };

  const getCarDetailsById = (carId: number) => {
    const { make, model, year } = cars.find(car => car.id === carId)!;
    return make + ' ' + model + ' ' + String(year);
  };

  const dismissConfirmDeleteCarModal = () => {
    setConfirmDeleteCarId(-1);
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={setEditCarId} onDeleteCar={confirmDeleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
      <ToolFooter companyName="A Cool Company, Inc." />
      {confirmDeleteCarId > 0 && <ConfirmModal
        onYes={() => deleteCar(confirmDeleteCarId)}
        onNo={dismissConfirmDeleteCarModal}>
          Are you sure you want to delete {getCarDetailsById(confirmDeleteCarId)}
        </ConfirmModal>}
    </>
  );

};