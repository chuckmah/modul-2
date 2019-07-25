import { ControlValidator, ControlValidatorOptions } from '../control-validator';
/**
 *
 * @param lowerBound Minimum value of the range within which the value must be to be valid. Inclusive.
 * @param upperBound Maximum value of the range within which the value must be to be valid. Inclusive.
 * @param options options required to personnalise the validator, like the timing of the validation or the error messages to display.
 */
export declare const BetweenValidator: (lowerBound: number, upperBound: number, options?: ControlValidatorOptions) => ControlValidator;
//# sourceMappingURL=between.d.ts.map