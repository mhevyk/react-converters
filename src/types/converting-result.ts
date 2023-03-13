import { Big } from "big.js";
import { MeasurementUnitNames } from "./measurement-unit";
import ConvertingError from "../errors/converting-error";

export interface ConvertingSuccess {
  value: Big
  names: MeasurementUnitNames,
  from: {
    amount: Big,
    names: MeasurementUnitNames
  }
}

export type ConvertingResult = ConvertingSuccess | ConvertingError;

export interface FormattedConvertingResult {
  value: string;
  exponent?: number
}