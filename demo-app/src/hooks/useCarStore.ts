import { useState, useEffect } from 'react';

import { Car } from '../models/Car';
import { CarStore } from '../models/CarStore';
import { IDataService } from '../services/IDataService';
import { RESTService } from '../services/RESTService';

import { useListAsync } from './useListAsync';
import { CarTableFilterSettings } from '../components/CarTableFilterForm';
import { CarTableSortSettings } from '../components/CarTable';

const carsData: IDataService<Car> = new RESTService<Car>('http://localhost:3060/cars');

const carTableCache = new Map<string, Car[]>();

const clearCarTableCache = () => {
  carTableCache.clear();
};

const getCarTableCacheKey = (filterSettings: CarTableFilterSettings, sortSettings: CarTableSortSettings) => {

  return btoa(
    filterSettings.filterField + ':' +
    filterSettings.filterValue + ':' +
    sortSettings.col + ':' +
    sortSettings.dir);

};

const getCars = (cars: Car[], filterSettings: CarTableFilterSettings, sortSettings: CarTableSortSettings) => {

  const cacheKey = getCarTableCacheKey(filterSettings, sortSettings);

  if (!carTableCache.has(cacheKey)) {

    console.log('performing filter and sort');

    const filteredCars = cars.filter(car => {
      return String(car[filterSettings!.filterField]!).includes(filterSettings.filterValue);
    });

    const sortedCars = filteredCars.sort( (a: Car, b: Car) => {

      if (a[sortSettings.col]! > b[sortSettings.col]!) {
        return sortSettings.dir === 'asc' ? 1 : -1;
      } else if (a[sortSettings.col]! < b[sortSettings.col]!) {
        return sortSettings.dir === 'asc' ? -1 : 1;
      } else {
        return 0;
      }

    });

    carTableCache.set(cacheKey, sortedCars);
  }

  return carTableCache.get(cacheKey);

};

export const useCarStore = (initialCars: Car[]) => {

  const [ editCarId, setEditCarId ] = useState(-1);

  const [ confirmDeleteCarId, setConfirmDeleteCarId ] = useState(-1);
  const [ carTableFilterSettings, setCarTableFilterSettings ] = useState<CarTableFilterSettings>({ filterField: 'id', filterValue: '' });
  const [ carTableSortSettings, setCarTableSortSettings ] = useState<CarTableSortSettings>({ col: 'id', dir: 'asc' });

  const [ cars, refreshCars, appendCar, removeCar, replaceCar ] = useListAsync(carsData);

  const cancelCar = () => setEditCarId(-1);

  const addCar = (car: Car) => {
    appendCar(car);
    cancelCar();
    clearCarTableCache();
  };

  const confirmDeleteCar = (carId: number) => {
    setConfirmDeleteCarId(carId);
  };

  const deleteCar = (carId: number) => {
    removeCar(carId);
    cancelCar();
    clearCarTableCache();
    dismissConfirmDeleteCarModal();
  };

  const saveCar = (car: Car) => {
    replaceCar(car);
    cancelCar();
    clearCarTableCache();
  };

  const getCarDetailsById = (carId: number) => {
    const { make, model, year } = cars.find(car => car.id === carId)!;
    return make + ' ' + model + ' ' + String(year);
  };

  const dismissConfirmDeleteCarModal = () => {
    setConfirmDeleteCarId(-1);
  };

  useEffect(() => {
    clearCarTableCache();
    refreshCars();
  }, [ refreshCars ]);

  const store: CarStore = {
    cars: getCars(cars, carTableFilterSettings, carTableSortSettings)!,
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
  };

  return store;
};