import { useState } from 'react';
import { Form } from 'react-bootstrap';

interface UnitOfMeasurementInputProps {
  converterType: string;
}

function UnitOfMeasurementInput({
  converterType,
}: UnitOfMeasurementInputProps) {
  const [value, setValue] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const limit = 10;
    setValue(event.target.value.slice(0, limit));
  };

  return (
    <Form.Control
      type="number"
      placeholder={`Enter ${converterType}...`}
      value={value}
      onChange={changeHandler}
      className="form__item"
    />
  );
}

export default UnitOfMeasurementInput;
