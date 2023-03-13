import { Big, BigSource } from 'big.js';

export default function roundBigValue(value: BigSource, precision: number = 4): string {
    return new Big(value).round(precision).toString();
}