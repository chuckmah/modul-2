import { FormatMode } from '@chuckmah/modul-components/src/utils/i18n/i18n';
import { ModulVue } from '@chuckmah/modul-components/src/utils/vue/vue';
import { ControlValidatorValidationType } from '../../control-validator-validation-type';
import { FormControl } from '../../form-control';
import { ValidatorKeys } from '../validator-error-keys';
/**
 *
 * @param controlNames
 * @param controlLabels
 * @param options options required to personnalise the validator, like the timing of the validation or the error messages to display.
 */
export var CompareValidator = function (controlNames, controlLabels, options) {
    var error;
    if (controlLabels) {
        error = {
            message: (ModulVue.prototype.$i18n).translate('m-form:compareValidatorErrorMessage', { controlNames: controlNames.join(', ') }, undefined, undefined, undefined, FormatMode.Sprintf),
            groupMessage: (ModulVue.prototype.$i18n).translate('m-form:compareValidatorErrorMessage', { controlNames: controlLabels.join(', ') }, undefined, undefined, undefined, FormatMode.Sprintf)
        };
    }
    else {
        error = {
            message: (ModulVue.prototype.$i18n).translate('m-form:compareValidatorErrorMessageNoName')
        };
    }
    return {
        key: ValidatorKeys.Compare,
        validationFunction: function (control) {
            if (control instanceof FormControl) {
                throw Error('the compare controls validator should not be attached to a form control');
            }
            return controlNames
                .map(function (cn) { return control.getControl(cn); })
                .every(function (fc) { return fc.value === control.controls[0].value; });
        },
        error: error,
        validationType: options && options.validationType ?
            options.validationType : ControlValidatorValidationType.Correction
    };
};
//# sourceMappingURL=compare.js.map