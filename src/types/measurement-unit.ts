export interface MeasurementUnitNames {
    short?: string;
    full: string;
}

export interface MeasurementUnit {
    id: string;
    value: number;
    names: MeasurementUnitNames
}

export interface MeasurementUnitGroup {
    name: string,
    content: MeasurementUnit[]
}

export interface ConverterResponse {
    type: string;
    groups: MeasurementUnitGroup[];
}