import { useState, useCallback } from 'react';

import { IDataService } from '../services/IDataService';
import { Item } from '../models/Item';

type RefreshItems = () => Promise<void>;
type AppendItem<S> = (item: S) => Promise<void>;
type RemoveItem = (itemId: number) => Promise<void>;
type ReplaceItem<S> = (item: S) => Promise<void>;

export type UseListAsync = <T extends Item>(dataSvc: IDataService<T>) =>
  ([ T[], RefreshItems, AppendItem<T>, RemoveItem, ReplaceItem<T> ]);

export const useListAsync: UseListAsync = <T extends Item>(dataSvc: IDataService<T>) => {

  const [ items, setItems ] = useState([] as T[]);

  const refreshItems: RefreshItems = useCallback(async () => {
    setItems(await dataSvc.all());
  }, [ dataSvc ]);

  const appendItem: AppendItem<T> = useCallback(async (item) => {
    await dataSvc.appendOne(item);
  }, [ dataSvc ]);

  const removeItem: RemoveItem = useCallback(async (itemId) => {
    await dataSvc.removeOne(itemId);
  }, [ dataSvc ]);

  const replaceItem: ReplaceItem<T> = useCallback(async (item) => {
    await dataSvc.replaceOne(item);
  }, [ dataSvc ]);

  return [ items, refreshItems, appendItem, removeItem, replaceItem ];

};