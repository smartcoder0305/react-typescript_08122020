import React, { FC } from 'react';

import { Color } from '../models/Color';

export type ColorListProps = {
  colors: Color[],
  onDeleteColor: (colorId: number) => void,
};

export const ColorList: FC<ColorListProps> = (props) => {

  return (
    <ul>
      {props.colors.map(color =>
        <li key={color.id}>
          {color.id} {color.name} {color.hexcode}
          <button type="button"
            onClick={() => props.onDeleteColor(color.id!)}>
            X
          </button>
        </li>)}
    </ul>
  )

};