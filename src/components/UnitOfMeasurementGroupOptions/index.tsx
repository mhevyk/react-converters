import { IMeasurementUnit } from '../../types';

interface UnitOfMeasurementGroupOptionsProps {
  optionList: IMeasurementUnit[];
}

function UnitOfMeasurementGroupOptions({
  optionList,
}: UnitOfMeasurementGroupOptionsProps) {
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

export default UnitOfMeasurementGroupOptions;
