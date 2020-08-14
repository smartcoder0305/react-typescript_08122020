import React, { FC } from 'react';

import './ConfirmModal.css';

export type ConfirmModalProps = {
  onYes: () => void,
  onNo: () => void,
};

export const ConfirmModal: FC<ConfirmModalProps> = (props) => {

  return (
    <div className="modal-wrapper">
      <div className="modal-dialog">
        {props.children}
        <fieldset>
          <button type="button" onClick={props.onYes}>Yes</button>
          <button type="button" onClick={props.onNo}>No</button>
        </fieldset>
      </div>
    </div>
  );

};