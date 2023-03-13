import { MeasurementUnit } from '../../types/measurement-unit';

interface ConverterOptgroupItemsProps {
  optionList: MeasurementUnit[];
}

function ConverterOptgroupItems({ optionList }: ConverterOptgroupItemsProps) {
  return (
    <>
      {optionList.map(({ id, names }) => (
        <option key={id} value={id}>
          {names.full} {names.short && `(${names.short})`}
        </option>
      ))}
    </>
  );
}

export default ConverterOptgroupItems;
