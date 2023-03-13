export default class ConvertingError extends Error {
    public readonly message: string;

    constructor(message: string) {
        super();
        this.message = message;
    }

    static MeasurementUnitNotFound(message: string) {
        return new ConvertingError(message);
    }
}