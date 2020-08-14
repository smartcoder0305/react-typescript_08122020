import { useState } from 'react';

import { Car } from '../models/Car';

export type UseCarList = (initialCars: Car[]) =>
  ([ Car[], (car: Car) => void, (carId: number) => void, (car: Car) => void ]);

export const useCarList: UseCarList = (initialCars: Car[]) => {

  const [ cars, setCars ] = useState(initialCars.concat());

  const appendCar = (car: Car) => {
    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id!), 0 ) + 1,
    }));
  };

  const removeCar = (carId: number) => {
    setCars(cars.filter(c => c.id !== carId));
  };

  const replaceCar = (car: Car) => {
    const carIndex = cars.findIndex(c => c.id === car.id);
    const newCars = cars.concat();
    newCars[carIndex] = car;
    setCars(newCars);
  };

  return [ cars, appendCar, removeCar, replaceCar ];


};