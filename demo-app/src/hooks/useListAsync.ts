import { useState, useCallback } from 'react';

import { IDataService } from '../services/IDataService';
import { Item } from '../models/Item';

type RefreshItems = () => Promise<void>;
type AppendItem<S> = (item: S) => void;
type RemoveItem = (itemId: number) => void;
type ReplaceItem<S> = (item: S) => void;

export type UseListAsync = <T extends Item>(dataSvc: IDataService<T>) =>
  ([ T[], RefreshItems, AppendItem<T>, RemoveItem, ReplaceItem<T> ]);

export const useListAsync: UseListAsync = <T extends Item>(dataSvc: IDataService<T>) => {

  const [ items, setItems ] = useState([] as T[]);

  const refreshItems: RefreshItems = useCallback(async () => {

    const itemList = await dataSvc.all();

    console.log(itemList);

    setItems(itemList);
  }, [ dataSvc ]);

  const appendItem: AppendItem<T> = (item) => {
    setItems(items.concat({
      ...item,
      id: Math.max(...items.map(c => c.id!), 0 ) + 1,
    }));
  };

  const removeItem: RemoveItem = (itemId) => {
    setItems(items.filter(c => c.id !== itemId));
  };

  const replaceItem: ReplaceItem<T> = (item) => {
    const itemIndex = items.findIndex(c => c.id === item.id);
    const newItems = items.concat();
    newItems[itemIndex] = item;
    setItems(newItems);
  };


  return [ items, refreshItems, appendItem, removeItem, replaceItem ];


};