import React, { FC, useState, ChangeEvent, MouseEvent } from 'react';

import { Color } from '../models/Color';

type ColorToolProps = {
  colors: Readonly<Color[]>,
};

export const ColorTool: FC<ColorToolProps> = (props) => {

  const [
    colorForm /* state data */,
    setColorForm /* function to update the state data, and triggering the re-render */
  ] = useState({
    name: '',
    hexcode: '',
  } /* initializing the state to this value */);

  const [ colors, setColors ] = useState(props.colors.concat() /* copy the array passed in via props */);

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setColorForm({
      ...colorForm, // copy the current color form properties on to the new state object
      [ e.target.name ]: e.target.value, // set the name property of the new state object to the data collected from the input field
    });
  };

  const addColor = (e: MouseEvent<HTMLButtonElement>) => {

    // e.preventDefault();

    setColors(colors.concat({
      ...colorForm, /* copy the properties of color form into the new color object because the properties are the same */
      id: Math.max(...colors.map(c => c.id), 0) + 1, /* find the max id in the array and add 1 */
    }));

    // clear the form
    setColorForm({
      name: '', hexcode: '',
    });

  };

  console.log(colorForm);

  return (
    <>
      <header>
        <h1 className="page-header">Color Tool</h1>
      </header>
      <ul>
        {colors.map(color =>
          <li key={color.id}>{color.id} {color.name} {color.hexcode}</li>)}
      </ul>
      <form>
        <div>
          {/* React.createElement('label', { htmlFor: 'color-name-input}, 'Color Name: ') */}
          <label htmlFor="color-name-input">Color Name:</label>
          <input type="text" id="color-name-input" name="name" value={colorForm.name} onChange={change} />
        </div>
        <div>
          {/* React.createElement('label', { htmlFor: 'color-name-input}, 'Color Name: ') */}
          <label htmlFor="color-hexcode-input">Color Hexcode:</label>
          <input type="text" id="color-hexcode-input" name="hexcode" value={colorForm.hexcode} onChange={change} />
        </div>
        <button type="button" onClick={addColor}>Add Color</button>
      </form>
    </>
  );

};