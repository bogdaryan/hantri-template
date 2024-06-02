import { ChangeEvent } from 'react';
import Form from 'react-bootstrap/Form';

type Option = {
  type: string;
  price: number;
};

type Props = {
  title: string;
  options: Array<Option | string>;
  name: string;
  handleChange: (v: ChangeEvent<HTMLSelectElement>) => void;
};

export const CustomCelect = ({ options, title, name, handleChange }: Props) => {
  return (
    <Form.Select onChange={handleChange} name={name}>
      <option defaultValue={title}>{title}</option>
      {options &&
        options.map((option, index) => {
          return (
            <option key={index}>
              {typeof option === 'string' ? option : option.type}
            </option>
          );
        })}
    </Form.Select>
  );
};
