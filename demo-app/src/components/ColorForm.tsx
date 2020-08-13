import React, { FC } from 'react';

import { Color } from '../models/Color';
import { useForm } from '../hooks/useForm';

type ColorFormData = {
  name: string,
  hexcode: string,
};

type ColorFormProps = {
  buttonText?: string,
  onSubmitColor: (color: Color) => void;
};

export const ColorForm: FC<ColorFormProps> = (props) => {

  const [ colorForm, change, resetForm ] = useForm({
    name: '',
    hexcode: '',
  });

  const submitColor = () => {

    props.onSubmitColor({
      ...colorForm,
    });

    // clear the form
    resetForm();

  };

  return (
    <form>
      <div>
        <label htmlFor="color-name-input">Color Name:</label>
        <input type="text" id="color-name-input" name="name" value={colorForm.name} onChange={change} />
      </div>
      <div>
        <label htmlFor="color-hexcode-input">Color Hexcode:</label>
        <input type="text" id="color-hexcode-input" name="hexcode" value={colorForm.hexcode} onChange={change} />
      </div>
      <button type="button" onClick={submitColor}>{props.buttonText}</button>
    </form>
  );


};

ColorForm.defaultProps = {
  buttonText: 'Submit Color',
};