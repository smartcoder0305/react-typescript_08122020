import { Item } from '../models/Item';

export interface IDataService<T extends Item> {

  all: () => Promise<T[]>;
  // one: (itemId: number) => Promise<T>;

}