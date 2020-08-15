
import { IDataService } from './IDataService';
import { Item } from '../models/Item';


export class RESTService<T extends Item> implements IDataService<T> {

  // private baseUrl

  // constructor(baseUrl: string) {
  //   this.baseUrl = baseUrl;
  // }

  constructor(private baseUrl: string) { }

  // const res = await fetch(this.baseUrl, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(someData),
  // });

  // all(): Promise<T[]> {
  //   return fetch(this.baseUrl).then(res => res.json());
  // }

  async all(): Promise<T[]> {
    const res = await fetch(this.baseUrl);
    const resources = await res.json() as T[];
    return resources;
  }

  async appendOne(item : T): Promise<void> {
    await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
  }

  async replaceOne(item: T): Promise<void> {
    await fetch(this.baseUrl + '/' + encodeURIComponent(item.id!), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
  }

  async removeOne(itemId: number): Promise<void> {
    await fetch(this.baseUrl + '/' + encodeURIComponent(itemId), {
      method: 'DELETE',
    });
  }


}