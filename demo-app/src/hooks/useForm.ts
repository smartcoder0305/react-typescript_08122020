import { useState, ChangeEvent } from 'react';

type HTMLFormControls = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

type UseForm = <T>(initialForm: T) =>
  ([ T, (e: ChangeEvent<HTMLFormControls>) => void, () => void ]);

function isInput(x: any): x is HTMLInputElement {
  return x instanceof HTMLInputElement;
}

export const useForm: UseForm = (initialForm) => {

  const [ form, setForm ] = useState(initialForm);

  const change = (e: ChangeEvent<HTMLFormControls>) => {
    setForm({
      ...form,
      [ e.target.name ]: isInput(e.target) && e.target.type === 'number'
        ? Number(e.target.value) : e.target.value,
    });
  };

  const resetForm = () => setForm(initialForm);

  return [ form, change, resetForm ];


};