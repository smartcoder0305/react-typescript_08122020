import React, { FC } from 'react';

import './ToolHeader.css';

export type ToolHeaderProps = {
  headerText?: string,
};

export const ToolHeader: FC<ToolHeaderProps> = (props) => {

  return (
    <header>
      <h1 className="page-header">{props.headerText}</h1>
    </header>
  );

};

ToolHeader.defaultProps = {
  headerText: 'The Tool',
};