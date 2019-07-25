import { AbstractControl } from './abstract-control';
import { ControlOptions } from './control-options';
import { ControlValidator } from './validators/control-validator';
export declare class FormGroup extends AbstractControl {
    private _controls;
    readonly validators: ControlValidator[];
    constructor(_controls: {
        [name: string]: AbstractControl;
    }, validators?: ControlValidator[], options?: ControlOptions);
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
    endEdition(): void;
    readonly controls: AbstractControl[];
    getControl(name: string): AbstractControl;
    addControl(name: string, control: AbstractControl): void;
    removeControl(name: string): void;
    private setupControlsParent;
    protected _hasAnyControlsInError(): boolean;
}
//# sourceMappingURL=form-group.d.ts.map