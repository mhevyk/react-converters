import './Form.css';
import { Form } from 'react-bootstrap';
import UnitOfMeasurementInput from '../UnitOfMeasurementInput';
import UnitOfMeasurementSelect from '../UnitOfMeasurementSelect';
import { IMeasurementUnitGroup } from '../../types';
import SwapIcon from '../SwapIcon';

interface ConverterFormProps {
  converterData: {
    type: string;
    groups: IMeasurementUnitGroup[];
  };
}

function ConverterForm({ converterData }: ConverterFormProps) {
  const { type, groups } = converterData;

  return (
    <Form className="form form__converter">
      <Form.Group className="form__group p-4">
        <Form.Text>Convert {type} from:</Form.Text>
        <UnitOfMeasurementInput converterType={type} />
        <UnitOfMeasurementSelect
          groupsList={groups}
          defaultOptionText="Select unit of measurement"
        />
      </Form.Group>
      <Form.Group className="form__group p-4">
        <Form.Text className="d-flex justify-content-between align-items-center">
          <span>to:</span>
          <SwapIcon />
        </Form.Text>
        <UnitOfMeasurementSelect
          groupsList={groups}
          defaultOptionText="All measurement units"
        />
      </Form.Group>
    </Form>
  );
}

export default ConverterForm;
