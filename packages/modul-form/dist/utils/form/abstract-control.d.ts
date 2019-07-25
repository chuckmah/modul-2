import { ControlEditionContext } from './control-edition-context';
import { ControlError } from './control-error';
import { ControlOptions, FormControlOptions } from './control-options';
import { FormArray } from './form-array';
import { FormGroup } from './form-group';
import { ControlValidationGuard } from './validation-guard';
import { ControlValidator } from './validators/control-validator';
/**
 * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
 *
 */
export declare abstract class AbstractControl {
    readonly validators: ControlValidator[];
    htmlElement: HTMLElement | undefined;
    protected readonly _validationGuard: ControlValidationGuard;
    protected _parent: FormGroup | FormArray;
    protected _editionContext: ControlEditionContext;
    protected _errors: ControlError[];
    protected _waiting: boolean;
    protected _enabled: boolean;
    protected _readonly: boolean;
    protected _pristine: boolean;
    protected _touched: boolean;
    constructor(validators?: ControlValidator[], options?: ControlOptions | FormControlOptions<any>);
    abstract readonly value: any;
    abstract readonly valid: boolean;
    abstract enabled: boolean;
    abstract waiting: boolean;
    abstract readonly: boolean;
    abstract readonly touched: boolean;
    readonly pristine: boolean;
    errors: ControlError[];
    hasError(): boolean;
    readonly errorMessage: string;
    parent: FormGroup | FormArray;
    abstract submit(): Promise<void>;
    reset(): void;
    upwardValueChanged(): void;
    validate(): void;
    validateAsync(): Promise<void>;
    initEdition(): void;
    endEdition(): void;
    private _updateErrors;
    protected _hasAnyControlsInError(): boolean;
}
//# sourceMappingURL=abstract-control.d.ts.map