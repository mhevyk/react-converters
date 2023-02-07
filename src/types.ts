export interface IMeasurementUnit {
    id: string;
    value: number;
    names: {
      short?: string;
      full: string;
    };
    group?: string;
  }