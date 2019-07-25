import { ControlValidator, ControlValidatorOptions } from '../control-validator';
/**
 *
 * @param start Start of the period during witch the date must be to be valid. Inclusive.
 * @param end End of the period during witch the date must be to be valid. Inclusive.
 * @param options options required to personnalise the validator, like the timing of the validation or the error messages to display.
 */
export declare const DateBetweenValidator: (start: string, end: string, options?: ControlValidatorOptions) => ControlValidator;
//# sourceMappingURL=date-between.d.ts.map