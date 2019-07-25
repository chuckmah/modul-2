import { FormatMode } from '@chuckmah/modul-components/dist/utils/i18n/i18n';
import { ModulVue } from '@chuckmah/modul-components/dist/utils/vue/vue';
import { ControlValidatorValidationType } from '../../control-validator-validation-type';
import { FormGroup } from '../../form-group';
import { ValidatorKeys } from '../validator-error-keys';
/**
 *
 * @param options options required to personnalise the validator, like the timing of the validation or the error messages to display.
 */
export var DateFormatValidator = function (options) {
    return {
        key: ValidatorKeys.Date,
        validationFunction: function (control) {
            if (control instanceof FormGroup) {
                throw Error('the DateValidator should not be attached to a form group');
            }
            if (!control.value) {
                return true;
            }
            else {
                if (control.value.length < 10) {
                    return true;
                }
                else {
                    return !isNaN(Date.parse(control.value));
                }
            }
        },
        error: options && options.error ?
            options.error : {
            message: (ModulVue.prototype.$i18n).translate('m-form:dateFormatValidatorErrorMessage', undefined, undefined, undefined, undefined, FormatMode.Sprintf),
            groupMessage: options && options.controlLabel ?
                (ModulVue.prototype.$i18n).translate('m-form:dateFormValidatorErrorSummaryMessage', { controlLabel: options.controlLabel }, undefined, undefined, undefined, FormatMode.Sprintf)
                : undefined
        },
        validationType: options && options.validationType ?
            options.validationType : ControlValidatorValidationType.OnGoing
    };
};
//# sourceMappingURL=date-format.js.map