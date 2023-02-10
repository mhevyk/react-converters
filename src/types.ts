export enum ConverterTypes {
  AREA = "area",
  LENGTH = "length",
  TEMPERATURE = "temperature"
}

export interface IMeasurementUnit {
  id: string;
  value: number;
  names: {
    short?: string;
    full: string;
  };
}

export interface IMeasurementUnitGroup {
  name: string,
  content: IMeasurementUnit[]
}