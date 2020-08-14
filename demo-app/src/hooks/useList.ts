import { useState } from 'react';

import { Item } from '../models/Item';

type AppendItem<S> = (item: S) => void;
type RemoveItem = (itemId: number) => void;
type ReplaceItem<S> = (item: S) => void;

export type UseList = <T extends Item>(initialItems: T[]) =>
  ([ T[], AppendItem<T>, RemoveItem, ReplaceItem<T> ]);

export const useList: UseList = <T extends Item>(initialItems: T[]) => {

  const [ items, setItems ] = useState(initialItems);

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

  return [ items, appendItem, removeItem, replaceItem ];


};