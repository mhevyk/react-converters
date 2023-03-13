import { ConverterFormData } from "../types/form";
import { MeasurementUnit, MeasurementUnitGroup } from "../types/measurement-unit";

export interface ExtractMeasurementUnitsReturnType {
    amount: string,
    fromUnit?: MeasurementUnit,
    toUnit?: MeasurementUnit
}

export default function extractMeasurementUnits(
    groups: MeasurementUnitGroup[],
    formData: ConverterFormData
): ExtractMeasurementUnitsReturnType {
    const { amount, from: fromId, to: toId } = formData;
    const measurementUnits: MeasurementUnit[] = groups.reduce(
        (result: MeasurementUnit[], group: MeasurementUnitGroup) => [...result, ...group.content], []
    );
    const fromUnit: MeasurementUnit | undefined = measurementUnits.find(unit => unit.id === fromId);
    const toUnit: MeasurementUnit | undefined = measurementUnits.find(unit => unit.id === toId);

    return { amount, fromUnit, toUnit };
}