import { useState } from 'react';
import { ChangeEvent } from 'react';
import { TForm, TUseForm } from '../types/types';
import { format } from 'date-fns';
type TEvent =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLSelectElement>
  | ChangeEvent<HTMLDataElement & { name: string; type: string }>;

const useForm = (initialState: TForm) => {
  const [formData, setValues] = useState(initialState);

  const handleChange = (e: TEvent) => {
    const { name, value, type } = e.target;

    if (type === 'date') {
      const formattedDate = format(new Date(value), 'dd.MM.yy');
      setValues((state: TUseForm) => ({ ...state, [name]: formattedDate }));
    } else {
      setValues((state: TUseForm) => ({ ...state, [name]: value }));
    }
  };

  return {
    formData,
    handleChange,
  };
};

export default useForm;
