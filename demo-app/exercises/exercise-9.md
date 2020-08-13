# Exercise 9

1. Create a new component named Car Edit Row. The Car Edit Row is similar to Car View Row except the columns for make, model, year, color and price are input fields. When the Car Edit Row is displayed, prepopulate the fields with the data of the car being edited. Do not make the Id an input field. In the last column, there should be two buttons labeled: "Save" and "Cancel". Do not implement the logic to do the save and cancel, but please display the buttons.

When implementing the Car Edit Row component, utilize the useForm hook.

2. Add a button labeled edit to the last column of the Car View Row component. When the button is clicked the row on which it is clicked changes to a Car Edit Row.

**IMPORTANT! Only one row is editable at a time. You data structure should only support editing one row at a time.**

3. Ensure it works!

## Bonus

- Make the table sortable. When a user clicks on a table column header, sort the data for that column in ascending order.

- When the user clicks the same table column header for the second time in a row, change the sort to be descending. As the user clicks the same column header over and over again it should toggle between ascending and descending order.

- Add a visual indicator to the table column header indicating the current sort order.