import './Form.css';
import { Form } from 'react-bootstrap';
import UnitOfMeasurementInput from '../UnitOfMeasurementInput';
import UnitOfMeasurementSelect from '../UnitOfMeasurementSelect';
import { IMeasurementUnit } from '../../types';

interface ConverterFormProps {
  converterData: {
    type: string;
    data: IMeasurementUnit[];
  };
}

function ConverterForm({ converterData }: ConverterFormProps) {
  const { data, type } = converterData;

  return (
    <Form className="form form__converter">
      <Form.Group className="form__group">
        <Form.Text>Convert {type} from:</Form.Text>
        <UnitOfMeasurementInput converterType={type} />
        <UnitOfMeasurementSelect optionContentList={data} />
      </Form.Group>
      <Form.Group className="form__group">
        <div className="d-flex justify-content-between">
          <Form.Text>to:</Form.Text>
          <Form.Text>Converter icon</Form.Text>
        </div>
        <UnitOfMeasurementSelect optionContentList={data} />
      </Form.Group>
    </Form>
  );
}

export default ConverterForm;
