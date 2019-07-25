import { FormatMode } from '@chuckmah/modul-components/src/utils/i18n/i18n';
import { ModulVue } from '@chuckmah/modul-components/src/utils/vue/vue';
import { ControlValidatorValidationType } from '../../control-validator-validation-type';
import { FormGroup } from '../../form-group';
import { ValidatorKeys } from '../validator-error-keys';
/**
 *
 * @param options options required to personnalise the validator, like the timing of the validation or the error messages to display.
 */
export var EmailValidator = function (options) {
    return {
        key: ValidatorKeys.Email,
        validationFunction: function (control) {
            if (control instanceof FormGroup) {
                throw Error('the email validator should not be attached to a form group');
            }
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return control.value ? re.test(String(control.value).toLowerCase()) : true;
        },
        error: options && options.error ?
            options.error : {
            message: (ModulVue.prototype.$i18n).translate('m-form:emailValidatorErrorMessage'),
            groupMessage: options && options.controlLabel ?
                (ModulVue.prototype.$i18n).translate('m-form:emailValidatorErrorSummaryMessage', { controlLabel: options.controlLabel }, undefined, undefined, undefined, FormatMode.Sprintf)
                : undefined
        },
        validationType: options && options.validationType ?
            options.validationType : ControlValidatorValidationType.Correction
    };
};
//# sourceMappingURL=email.js.map