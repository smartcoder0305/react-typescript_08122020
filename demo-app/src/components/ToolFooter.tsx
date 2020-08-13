import React, { FC } from 'react';

export type ToolFooterProps = {
  companyName: string,
};

export const ToolFooter: FC<ToolFooterProps> = (props) => {

  return (
    <footer>
      <small>&copy; {new Date().getFullYear()} {props.companyName}. All Rights Reserved.</small>
    </footer>
  );

};
