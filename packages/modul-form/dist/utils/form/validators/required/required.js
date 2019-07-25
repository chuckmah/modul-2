import { FormatMode } from '@chuckmah/modul-components/src/utils/i18n/i18n';
import { ModulVue } from '@chuckmah/modul-components/src/utils/vue/vue';
import { ControlValidatorValidationType } from '../../control-validator-validation-type';
import { FormControl } from '../../form-control';
import { FormGroup } from '../../form-group';
import { ValidatorKeys } from '../validator-error-keys';
/**
 *
 * @param options options required to personnalise the validator, like the timing of the validation or the error messages to display.
 */
export var RequiredValidator = function (options) {
    return {
        key: ValidatorKeys.Required,
        validationFunction: function (control) {
            var isPopulate = false;
            var assertPopulate = function (value) {
                if (!isNaN(value) && value === 0) {
                    return true;
                }
                else if (Array.isArray(value)) {
                    return value.length > 0;
                }
                return !!value;
            };
            if (control instanceof FormGroup) {
                isPopulate = control.controls
                    .filter(function (c) { return c instanceof FormControl; })
                    .every(function (fc) {
                    return assertPopulate(fc.value);
                });
            }
            else {
                isPopulate = assertPopulate(control.value);
            }
            return isPopulate;
        },
        error: options && options.error ?
            options.error : {
            message: (ModulVue.prototype.$i18n).translate('m-form:requiredValidatorErrorMessage', undefined, undefined, undefined, undefined, FormatMode.Sprintf),
            groupMessage: options && options.controlLabel ?
                (ModulVue.prototype.$i18n).translate('m-form:requiredValidatorErrorSummaryMessage', { controlLabel: options.controlLabel }, undefined, undefined, undefined, FormatMode.Sprintf)
                : undefined
        },
        validationType: options && options.validationType ?
            options.validationType : ControlValidatorValidationType.OnGoing
    };
};
//# sourceMappingURL=required.js.map