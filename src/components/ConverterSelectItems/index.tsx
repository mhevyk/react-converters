import { MeasurementUnitGroup } from '../../types/measurement-unit';
import ConverterOptgroupItems from '../ConverterOptgroupItems';

interface ConverterSelectItemsProps {
  groupsList: MeasurementUnitGroup[];
}

function ConverterSelectItems({ groupsList }: ConverterSelectItemsProps) {
  return (
    <>
      <option value="" disabled>
        Select unit of measurement...
      </option>
      {groupsList.map((group: MeasurementUnitGroup) => (
        <optgroup key={group.name} label={group.name}>
          <ConverterOptgroupItems optionList={group.content} />
        </optgroup>
      ))}
    </>
  );
}

export default ConverterSelectItems;
