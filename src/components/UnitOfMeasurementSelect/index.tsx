import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { IMeasurementUnitGroup } from '../../types';
import UnitOfMeasurementGroupOptions from '../UnitOfMeasurementGroupOptions';

interface UnitOfMeasurementSelectProps {
  groupsList: IMeasurementUnitGroup[];
  defaultOptionText: string;
}

function UnitOfMeasurementSelect({
  groupsList,
  defaultOptionText,
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
        {defaultOptionText}
      </option>
      {groupsList.map(({ name, content }) => (
        <optgroup key={name} label={name}>
          <UnitOfMeasurementGroupOptions optionList={content} />
        </optgroup>
      ))}
    </Form.Select>
  );
}

export default UnitOfMeasurementSelect;
