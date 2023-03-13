import { ConverterFormNames } from '../../types/form';
import { RegisterOptions } from 'react-hook-form';

export type RegisterFormItemType = Record<ConverterFormNames, RegisterOptions>;

const config: RegisterFormItemType = {
    [ConverterFormNames.AMOUNT]: {
        required: 'Amount field is required!',
        min: {
            value: 0,
            message: 'Amount should be bigger than zero!',
        },
    },
    [ConverterFormNames.FROM]: {
        required: 'From unit of measurement should be selected!',
    },
    [ConverterFormNames.TO]: {
        validate: {
            equalFromAndTo: (toValue: any, formValues: any) =>
                toValue !== formValues.from ||
                'From and to values should not be equal!',
        },
    }
};

export default config;