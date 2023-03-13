import './ConverterForm.css';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useConvertingResult } from '../../context/ConvertingResultContext';
import SwapIcon from '../SwapIcon';
import InvalidFeedbackGroup from '../FeedbackGroup';
import ConverterSelectItems from '../ConverterSelectItems';
import Button from '../Button';
import formConfig from './formConfig';
import { ConverterFormNames, ConverterFormData } from '../../types/form';
import { ConverterResponse } from '../../types/measurement-unit';
import convert from '../../utils/convert';
import extractMeasurementUnits, {
  ExtractMeasurementUnitsReturnType,
} from '../../utils/extractMeasurementUnits';

interface ConverterFormProps {
  converterData: ConverterResponse;
}

function ConverterForm({ converterData }: ConverterFormProps) {
  const defaultValues = {
    [ConverterFormNames.FROM]: '',
    [ConverterFormNames.TO]: '',
  };

  const { setResult } = useConvertingResult();
  const {
    register,
    handleSubmit: submitHandlerWrapper,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ConverterFormData>({ defaultValues });

  const { type, groups } = converterData;

  const amountInputRegister = register(
    ConverterFormNames.AMOUNT,
    formConfig[ConverterFormNames.AMOUNT]
  );

  const fromSelectRegister = register(
    ConverterFormNames.FROM,
    formConfig[ConverterFormNames.FROM]
  );

  const toSelectRegister = register(
    ConverterFormNames.TO,
    formConfig[ConverterFormNames.TO]
  );

  const from = watch(ConverterFormNames.FROM);
  const to = watch(ConverterFormNames.TO);

  const swapValues = () => {
    setValue(ConverterFormNames.FROM, to);
    setValue(ConverterFormNames.TO, from);
  };

  const swapDisabled = from === to || !Boolean(from) || !Boolean(to);

  const submitHandler = submitHandlerWrapper((data: ConverterFormData) => {
    const extractedData: ExtractMeasurementUnitsReturnType =
      extractMeasurementUnits(groups, data);
    const result = convert(extractedData);
    setResult(result);
  });

  return (
    <Form onSubmit={submitHandler} className="converter-form">
      <Form.Group className="form-group">
        <Form.Text>Convert {type} from: </Form.Text>
        <InvalidFeedbackGroup
          invalidMessage={errors[ConverterFormNames.AMOUNT]?.message}
        >
          <Form.Control
            type="number"
            placeholder={`Enter ${type}...`}
            autoComplete="off"
            step="any"
            {...amountInputRegister}
          />
        </InvalidFeedbackGroup>
        <InvalidFeedbackGroup
          invalidMessage={errors[ConverterFormNames.FROM]?.message}
        >
          <Form.Select {...fromSelectRegister}>
            <ConverterSelectItems
              defaultOptionText="Select unit of measurement..."
              groupsList={groups}
            />
          </Form.Select>
        </InvalidFeedbackGroup>
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Text className="d-flex justify-content-between align-items-center">
          to:
          <SwapIcon onClick={swapValues} disabled={swapDisabled} />
        </Form.Text>
        <Form.Group className="feedback-group">
          <InvalidFeedbackGroup
            invalidMessage={errors[ConverterFormNames.TO]?.message}
          >
            <Form.Select {...toSelectRegister}>
              <ConverterSelectItems
                defaultOptionText="All units of measurement"
                groupsList={groups}
              />
            </Form.Select>
          </InvalidFeedbackGroup>
        </Form.Group>
      </Form.Group>
      <Button type="submit">Convert</Button>
    </Form>
  );
}

export default ConverterForm;
