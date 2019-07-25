import { FormatMode } from '@chuckmah/modul-components/src/utils/i18n/i18n';
import { ModulVue } from '@chuckmah/modul-components/src/utils/vue/vue';
import { ControlValidatorValidationType } from '../../control-validator-validation-type';
import { FormGroup } from '../../form-group';
import { ValidatorKeys } from '../validator-error-keys';
/**
 *
 * @param min The minimum value required to be valid. Bound included.
 * @param options options required to personnalise the validator, like the timing of the validation or the error messages to display.
 */
export var MinValidator = function (min, options) {
    return {
        key: ValidatorKeys.Min,
        validationFunction: function (control) {
            if (control instanceof FormGroup) {
                throw Error('the min validator should not be attached to a form group');
            }
            var isMin;
            if (!control.value && control.value !== 0) {
                isMin = true;
            }
            else {
                var value = control.value;
                isMin = value >= min;
            }
            return isMin;
        },
        error: options && options.error ?
            options.error : {
            message: (ModulVue.prototype.$i18n).translate('m-form:minValidatorErrorMessage', { min: min }, undefined, undefined, undefined, FormatMode.Sprintf),
            groupMessage: options && options.controlLabel ?
                (ModulVue.prototype.$i18n).translate('m-form:minValidatorErrorSummaryMessage', {
                    controlLabel: options.controlLabel,
                    min: min
                }, undefined, undefined, undefined, FormatMode.Sprintf)
                : undefined
        },
        validationType: options && options.validationType ?
            options.validationType : ControlValidatorValidationType.Correction
    };
};
//# sourceMappingURL=min.js.map