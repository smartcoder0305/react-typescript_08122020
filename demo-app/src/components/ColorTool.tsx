import React, { FC, useState } from 'react';

import { Color } from '../models/Color';

import { ToolHeader } from './ToolHeader';
import { ColorForm } from './ColorForm';

type ColorToolProps = {
  colors: Readonly<Color[]>,
};

export const ColorTool: FC<ColorToolProps> = (props) => {

  const [ colors, setColors ] = useState(props.colors.concat() /* copy the array passed in via props */);

  const addColor = (color: Color) => {

    setColors(colors.concat({
      ...color, /* copy the properties of color form into the new color object because the properties are the same */
      id: Math.max(...colors.map(c => c.id!), 0) + 1, /* find the max id in the array and add 1 */
    }));

  };

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {colors.map(color =>
          <li key={color.id}>{color.id} {color.name} {color.hexcode}</li>)}
      </ul>
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );

};