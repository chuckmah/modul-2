import { ModulVue } from '@chuckmah/modul-components/dist/utils/vue/vue';
import { ControlError } from '../../utils/form/control-error';
import { FormGroup } from '../../utils/form/form-group';
import { FormActionFallout } from './form-action-fallout';
import { FormActions } from './form-action-type';
export declare class MForm extends ModulVue {
    readonly formGroup: FormGroup;
    displaySummary: boolean;
    displayToast: boolean;
    actionFallouts: FormActionFallout[];
    emitSubmit(): void;
    emitReset(): void;
    onFormGroupErrorsChange(controlErrors: ControlError[]): void;
    readonly formErrors: ControlError[];
    readonly summaryMessages: string[];
    readonly toastMessage: string;
    triggerActionFallouts(action: FormActions): void;
    submit(): Promise<void>;
    reset(): void;
    protected created(): void;
    protected updated(): void;
    protected beforeDestroy(): void;
    private _getAllFormErrors;
    private _getAllFormValidators;
    private _getAllControlsInError;
    private _hideSummaryAndToast;
}
//# sourceMappingURL=form.d.ts.map