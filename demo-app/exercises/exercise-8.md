# Exercise 8

1. Create a new component named Car Form. Move the car form from Car Tool to the new component. Utilize the new Car Form component within Car Tool.

2. In the Car Table component, add a new header column with a label of 'Actions'.

3. In the Car View Row component, add a new column. In the new column place a button with a label of "Delete". When the button is clicked remove the car from the table.

Hint: to remove an object from an array immutably use the array [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method.

## Bonus

- Using a [React Portal](https://reactjs.org/docs/portals.html), display a modal popup which asks the user to confirm the delete before performing the delete.

The portal will require a DOM element to render on. I recommend adding a `div` to the `index.html` below the `div` when an id of `root`.

```html
<div id="root"></div>
<div id="modal"></div>
```

To help with the styling and HTML structure of the modal dialog component, here is some sample code. You may need to tweak the code a little to make it work perfectly for your solution.

```html
<div class="modal-wrapper">
  <div class="modal-dialog">
    <p>Are you sure you want to the car?</p>
    <fieldset>
      <button type="button">Yes</button>
      <button type="button">No</button>
    </fieldset>
  </div>
</div>
```

```css
.modal-wrapper {
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(150, 150, 150, 0.5);
  z-index: 999;
}

.modal-dialog {
  text-align:center;
  background-color: white;
  border: 1px solid black;
  padding: 20px;
}

.modal-dialog fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

.modal-dialog fieldset button {
  margin: 4px;
}
```
