import { HTMLProps } from 'react';
import { MeasurementUnitNames } from '../../types/measurement-unit';

interface ConverterUnitNameProps extends HTMLProps<HTMLSpanElement> {
  names: MeasurementUnitNames;
}

function ConverterUnitName({ names, ...props }: ConverterUnitNameProps) {
  return <span {...props}>{names?.short || names.full}</span>;
}

export default ConverterUnitName;
