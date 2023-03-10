import Big from "big.js";
import { MeasurementUnitNames } from "./measurement-unit";

export interface ConvertingResult {
  value: Big
  names: MeasurementUnitNames
}

export interface FormattedConvertingResult {
  value: string;
  exponent?: number
}