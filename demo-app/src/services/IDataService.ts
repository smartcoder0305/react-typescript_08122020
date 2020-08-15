import { Item } from '../models/Item';

export interface IDataService<T extends Item> {

  all: () => Promise<T[]>;
  appendOne: (item: T) => Promise<void>;
  replaceOne: (item: T) => Promise<void>;
  removeOne: (itemId: number) => Promise<void>;

}