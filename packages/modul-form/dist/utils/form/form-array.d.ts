import { AbstractControl } from './abstract-control';
import { ControlOptions } from './control-options';
import { ControlValidator } from './validators/control-validator';
export declare class FormArray extends AbstractControl {
    private _controls;
    readonly validators: ControlValidator[];
    constructor(_controls?: AbstractControl[], validators?: ControlValidator[], options?: ControlOptions);
    private setupControlsParent;
    /**
     * Return an agregate values of all enabled controls.
     */
    readonly value: any;
    readonly valid: boolean;
    enabled: boolean;
    waiting: boolean;
    readonly: boolean;
    readonly touched: boolean;
    submit(): Promise<void>;
    reset(): void;
    initEdition(): void;
    endEdition(): void;
    readonly controls: AbstractControl[];
    addControl(control: AbstractControl): void;
    removeControl(index: number): void;
    protected _hasAnyControlsInError(): boolean;
}
//# sourceMappingURL=form-array.d.ts.map