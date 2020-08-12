import React, { FC, useState, ChangeEvent } from 'react';

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

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    setColorForm({
      ...colorForm, // copy the current color form properties on to the new state object
      [ e.target.name ]: e.target.value, // set the name property of the new state object to the data collected from the input field
    });
  };

  console.log(colorForm);

  return (
    <>
      <header>
        <h1 className="page-header">Color Tool</h1>
      </header>
      <ul>
        {props.colors.map(color =>
          <li key={color.id}>{color.name}</li>)}
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
      </form>
    </>
  );

};