import { FormatMode } from '@chuckmah/modul-components/dist/utils/i18n/i18n';
import { ModulVue } from '@chuckmah/modul-components/dist/utils/vue/vue';
import { ControlValidatorValidationType } from '../../control-validator-validation-type';
import { FormGroup } from '../../form-group';
import { ValidatorKeys } from '../validator-error-keys';
/**
 *
 * @param maxLength Max length (inclusive)
 * @param options options required to personnalise the validator, like the timing of the validation or the error messages to display.
 */
export var MaxLengthValidator = function (maxLength, options) {
    return {
        key: ValidatorKeys.MaxLength,
        validationFunction: function (control) {
            if (control instanceof FormGroup) {
                throw Error('the max length validator should not be attached to a form group');
            }
            var isMaxLength;
            if (!control.value) {
                isMaxLength = true;
            }
            else if (!isNaN(control.value)) {
                isMaxLength = control.value.toString().length <= maxLength;
            }
            else {
                isMaxLength = control.value.length <= maxLength;
            }
            return isMaxLength;
        },
        error: options && options.error ?
            options.error : {
            message: (ModulVue.prototype.$i18n).translate('m-form:maxLengthValidatorErrorMessage', { maxLength: maxLength }, undefined, undefined, undefined, FormatMode.Sprintf),
            groupMessage: options && options.controlLabel ?
                (ModulVue.prototype.$i18n).translate('m-form:maxLengthValidatorErrorSummaryMessage', {
                    controlLabel: options.controlLabel,
                    maxLength: maxLength
                }, undefined, undefined, undefined, FormatMode.Sprintf)
                : undefined
        },
        validationType: options && options.validationType ?
            options.validationType : ControlValidatorValidationType.Correction
    };
};
//# sourceMappingURL=max-length.js.map