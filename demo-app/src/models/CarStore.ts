import { Car } from '../models/Car';
import { CarTableFilterSettings } from '../components/CarTableFilterForm';
import { CarTableSortSettings } from '../components/CarTable';

export type CarStore = {
  cars: Car[],
  editCarId: number,
  carTableSortSettings: CarTableSortSettings,
  confirmDeleteCarId: number,

  setEditCarId: (carId: number) => void,
  confirmDeleteCar: (carId: number) => void,
  deleteCar: (carId: number) => void,
  getCarDetailsById: (carId: number) => string,

  cancelCar: () => void,
  dismissConfirmDeleteCarModal: () => void,
  saveCar: (car: Car) => void,
  addCar: (car: Car) => void,

  setCarTableFilterSettings: (filterSettings: CarTableFilterSettings) => void,
  setCarTableSortSettings: (sortSettings: CarTableSortSettings) => void,
};