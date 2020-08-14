import React, { FC, createContext, useContext } from 'react';

import { Car } from '../models/Car';
import { CarStore } from '../models/CarStore';
import { useCarStore } from '../hooks/useCarStore';

const carStoreContext = createContext<CarStore>({} as CarStore);

const carList: Car[] = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'red', price: 50000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2018, color: 'blue', price: 120000 },
];

export const CarStoreProvider: FC = ({ children }) => {

  return (
    <carStoreContext.Provider value={useCarStore(carList)}>
      {children}
    </carStoreContext.Provider>
  );

};

export const useCarStoreContext = () => {
  return useContext(carStoreContext);
};
