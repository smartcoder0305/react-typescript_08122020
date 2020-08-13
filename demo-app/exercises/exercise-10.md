# Exercise 10

1. Fully implement save car and cancel car buttons. Be sure to perform your save operation with immutable programming techniques. If you cancel, revert the changes back to the original.

2. If one of the table rows is being edited, the row being edited should change to a view row after the following events

- A car is added
- A car is deleted
- A car is saved

Note: when adding or deleting a car, the changes for the car being edited should not be saved.

3. Move the logic for managing the array of cars (add, save, delete) to a custom hook and utilize the custom hook within Car Tool. The custom hook does not need to be generic.

## Bonus

- Add a filter to the table. The filter form should be composed of an input field for the filter value, a drop down to select the field being filtered on, and a button to apply the filter.

- Ensure the filtering works with the sorting.

- Utilize the `Map` object in JavaScript to implement caching the filtered and sorted cars. A new filter or sort computation should only be performed when the filter/sort has not be done before. If the filter/sort has been done before, the previously computed value from the cache should be used. Be sure to invalidate the cache when the content of the array of cars is changed.

