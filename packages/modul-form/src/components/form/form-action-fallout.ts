import { MForm } from './form';
import { FormActions } from './form-action-type';

export type FormActionFallout = {
    action: FormActions,
    // im a breaking change 5
    fallout: (form: MForm) => void;
};
