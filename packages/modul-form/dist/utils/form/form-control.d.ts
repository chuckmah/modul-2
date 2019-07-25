import { AbstractControl } from './abstract-control';
import { FormControlOptions } from './control-options';
import { ControlValidator } from './validators/control-validator';
export declare class FormControl<T> extends AbstractControl {
    readonly validators: ControlValidator[];
    private _value?;
    private _initialValue?;
    private _oldValue?;
    constructor(validators?: ControlValidator[], options?: FormControlOptions<T>);
    readonly touched: boolean;
    value: T | undefined;
    initalValue: T;
    readonly valid: boolean;
    enabled: boolean;
    waiting: boolean;
    readonly: boolean;
    /**
     * This specify the ennd of a edition context.
     */
    endEdition(): void;
    /**
     * Reset the field to it's orginal pristine state.
     *
     * @param {T} [initialValue]  a new initial value for the field
     */
    reset(initialValue?: T): void;
    /**
     * Run all validators
     *
     */
    submit(): Promise<void>;
}
//# sourceMappingURL=form-control.d.ts.map