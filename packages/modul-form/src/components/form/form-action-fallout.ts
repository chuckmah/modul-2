import { MForm } from './form';
import { FormActions } from './form-action-type';

export type FormActionFallout = {
    action: FormActions,
    // im a breaking change 3
    fallout: (form: MForm) => void;
};
