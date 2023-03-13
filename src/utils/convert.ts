import { Big } from 'big.js';
import { ExtractMeasurementUnitsReturnType } from './extractMeasurementUnits';
import { ConvertingResult } from "../types/converting-result";
import ConvertingError from '../errors/converting-error';

export default function convert(extractedData: ExtractMeasurementUnitsReturnType): ConvertingResult {
    const { amount, fromUnit, toUnit } = extractedData;

    if (!fromUnit) {
        return ConvertingError.MeasurementUnitNotFound('From unit was not found!');
    }

    if (!toUnit) {
        return ConvertingError.MeasurementUnitNotFound('To unit was not found!');
    }

    const bigAmount: Big = new Big(amount);
    const convertingCoefficient: Big = new Big(1).div(fromUnit.value);
    const convertedFromAmount: Big = convertingCoefficient.times(bigAmount);
    const convertedToAmount: Big = convertedFromAmount.times(toUnit.value);

    return {
        value: convertedToAmount,
        names: toUnit.names,
        from: {
            amount: bigAmount,
            names: fromUnit.names
        }
    };
}