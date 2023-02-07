import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { IMeasurementUnit } from '../../types';

interface UnitOfMeasurementSelectProps {
  optionContentList: IMeasurementUnit[];
}

function UnitOfMeasurementSelect({
  optionContentList,
}: UnitOfMeasurementSelectProps) {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Form.Select
      value={selectedValue}
      onChange={changeHandler}
      className="form__item"
    >
      <option value="" disabled>
        Select unit of measurement...
      </option>
      {optionContentList.map(({ id, names }) => (
        <option key={id} value={id}>
          {names.full} {names.short && `(${names.short})`}
        </option>
      ))}
    </Form.Select>
  );
}

export default UnitOfMeasurementSelect;
