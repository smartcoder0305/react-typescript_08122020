import React, { FC } from 'react';

import { CarStore } from '../models/CarStore';
import { useCarStoreContext } from '../contexts/carStoreContext';

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { ConfirmModal } from './ConfirmModal';
import { CarTableFilterForm } from './CarTableFilterForm';

export const CarTool: FC = () => {

  const {
    cars,
    editCarId,
    carTableSortSettings,
    confirmDeleteCarId,
    setEditCarId,
    confirmDeleteCar,
    deleteCar,
    getCarDetailsById,
    cancelCar,
    dismissConfirmDeleteCarModal,
    saveCar,
    addCar,
    setCarTableFilterSettings,
    setCarTableSortSettings,
  }: CarStore = useCarStoreContext();


  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTableFilterForm onFilter={setCarTableFilterSettings} />
      <CarTable cars={cars}
        editCarId={editCarId} sort={carTableSortSettings}
        onEditCar={setEditCarId} onDeleteCar={confirmDeleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} onSort={setCarTableSortSettings} />
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