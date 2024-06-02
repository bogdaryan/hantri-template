import { ChangeEvent } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

type Props = {
  title: string;
  placeholder?: string;
  type: string;
  name: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function CustumInput({ title, placeholder, type, name, handleChange }: Props) {
  return (
    <InputGroup>
      <InputGroup.Text id="inputGroup-sizing-default">{title}</InputGroup.Text>
      <Form.Control
        type={type}
        placeholder={placeholder}
        aria-describedby="inputGroup-sizing-default"
        onChange={handleChange}
        name={name}
      />
    </InputGroup>
  );
}

export default CustumInput;
