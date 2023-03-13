import { MeasurementUnitGroup } from '../../types/measurement-unit';
import ConverterOptgroupItems from '../ConverterOptgroupItems';

interface ConverterSelectItemsProps {
  defaultOptionText?: string;
  groupsList: MeasurementUnitGroup[];
}

function ConverterSelectItems({
  defaultOptionText,
  groupsList,
}: ConverterSelectItemsProps) {
  return (
    <>
      <option value="" disabled>
        {defaultOptionText || 'Select option...'}
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
