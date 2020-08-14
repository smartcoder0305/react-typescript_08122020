import * as React from 'react';
import {
  render, mount, shallow,
  ReactWrapper, ShallowWrapper,
} from 'enzyme';

import { Car } from '../models/Car';
import { CarViewRow } from './CarViewRow';

describe('<CarViewRow /> Enzyme Static HTML', () => {

  let car: Car;

  beforeEach(() => {
    car = {
      id: 1,
      make: 'Ford',
      model: 'F-150',
      year: 1980,
      color: 'red',
      price: 42000,
    };
  });

  test('<CarViewRow /> renders', () => {
    const component = JSON.stringify(
      render(
        <table>
          <tbody>
            <CarViewRow
              car={car}
              onDeleteCar={() => null}
              onEditCar={() => null}
            />
          </tbody>
        </table>,
      ).html(),
    );

    expect(component).toMatchSnapshot();
  });
});

describe('<CarViewRow /> Enzyme Mock DOM', () => {

  const eventHandlers = {
    deleteCar: () => null,
    editCar: () => null,
  };

  let car: Car;
  let deleteCarSpy: jest.SpyInstance;
  let editCarSpy: jest.SpyInstance;
  let component: ReactWrapper;

  beforeEach(() => {
    car = {
      id: 1,
      make: 'Ford',
      model: 'F-150',
      year: 1980,
      color: 'red',
      price: 42000,
    };

    deleteCarSpy = jest.spyOn(eventHandlers, 'deleteCar');
    editCarSpy = jest.spyOn(eventHandlers, 'editCar');

    component = mount(
      <table>
        <tbody>
          <CarViewRow
            car={car}
            onDeleteCar={eventHandlers.deleteCar}
            onEditCar={eventHandlers.editCar}
          />
        </tbody>
      </table>,
    ).find(CarViewRow);
  });

  test('<CarViewRow /> renders', () => {
    const columns = ['id', 'make', 'model', 'year', 'color', 'price'];

    component
      .find('td')
      .slice(0, 6)
      .forEach((node, index) => {
        const carField = String(car[columns[index]]);
        expect(node.text()).toBe(carField);
      });
  });

  test('<CarViewRow /> delete car button', () => {
    component
      .find('button')
      .first()
      .simulate('click');
    component
      .find('button')
      .last()
      .simulate('click');

    expect(deleteCarSpy).toHaveBeenCalledWith(car.id);
    expect(editCarSpy).toHaveBeenCalledWith(car.id);
  });
});

describe('<CarViewRow /> Shallow with Enzyme', () => {
  const eventHandlers = {
    deleteCar: () => null,
    editCar: () => null,
  };

  let car: Car;
  let deleteCarSpy: jest.SpyInstance;
  let editCarSpy: jest.SpyInstance;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    car = {
      id: 1,
      make: 'Ford',
      model: 'F-150',
      year: 1980,
      color: 'red',
      price: 42000,
    };

    deleteCarSpy = jest.spyOn(eventHandlers, 'deleteCar');
    editCarSpy = jest.spyOn(eventHandlers, 'editCar');

    wrapper = shallow(
      <CarViewRow
        car={car}
        onDeleteCar={eventHandlers.deleteCar}
        onEditCar={eventHandlers.editCar}
      />,
    );
  });

  test('<CarViewRow /> renders', () => {
    const columns = ['id', 'make', 'model', 'year', 'color', 'price'];

    wrapper
      .find('td')
      .slice(0, 6)
      .forEach((node, index) => {
        const carField = String(car[columns[index]]);
        expect(node.text()).toBe(carField);
      });
  });

  test('<CarViewRow /> buttons', () => {
    wrapper
      .find('button')
      .first()
      .simulate('click');
    wrapper
      .find('button')
      .last()
      .simulate('click');

    expect(deleteCarSpy).toHaveBeenCalledWith(car.id);
    expect(editCarSpy).toHaveBeenCalledWith(car.id);
  });
});
