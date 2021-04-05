export const combineValidators = (...validators: Array<(value: any) => string | undefined>) => (value: any) =>
    validators.reduce((error: undefined | string, validator) => validator(value) || error, undefined);

export const minValueValidator = (minValue: number) => (value: number) => {
    if (value < minValue) {
        return `minimum value is ${minValue}!`;
    }
    return undefined;
}

export const oneValueShouldBeGreaterValidator = (value: {
    start: number,
    max: number
}) => {
    if (value.max <= value.start) {
        return 'max value should be greater then start value!';
    }
    return undefined;
}