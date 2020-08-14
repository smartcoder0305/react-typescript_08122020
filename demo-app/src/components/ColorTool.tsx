import React, { FC, useState } from 'react';

import { Color } from '../models/Color';
import { useList } from '../hooks/useList';

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

type ColorToolProps = {
  colors: Readonly<Color[]>,
};

export const ColorTool: FC<ColorToolProps> = (props) => {

  const [ colors, appendColor, removeColor ] =
    useList(props.colors.concat());

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} onDeleteColor={removeColor} />
      <ColorForm buttonText="Add Color" onSubmitColor={appendColor} />
    </>
  );

};