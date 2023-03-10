export enum ConverterFormNames {
    AMOUNT = 'amount',
    FROM = 'from',
    TO = 'to'
}

//treat amount as string to save precision when converting to Big type
export interface ConverterFormData {
    [ConverterFormNames.AMOUNT]: string;
    [ConverterFormNames.FROM]: string;
    [ConverterFormNames.TO]: string;
}