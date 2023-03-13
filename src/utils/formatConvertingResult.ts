import { Big } from 'big.js';
import { FormattedConvertingResult } from "../types/converting-result";
import roundBigValue from './roundBigValue';

export default function formatConvertingResult(value: Big): FormattedConvertingResult {
    const EXPONENTIAL_FORMAT_LIMIT: number = 3;
    const MANTISSA_DECIMAL_PRECISION: number = 10;

    const [mantissa, exponent] = value.toExponential().split('e');
    const exponentPower: number = Number(exponent);
    if (Math.abs(exponentPower) <= EXPONENTIAL_FORMAT_LIMIT) {
        const decimalPart: string | undefined = mantissa.split('.')[1];
        if (!decimalPart) {
            return { value: value.toString() };
        }

        const decimalValue: string = decimalPart.length > MANTISSA_DECIMAL_PRECISION
            ? roundBigValue(value)
            : value.toString();
        return { value: decimalValue };
    }

    const roundedMantissa: string = roundBigValue(mantissa);
    return {
        value: roundedMantissa,
        exponent: exponentPower
    }
}