import { FormatMode } from '@chuckmah/modul-components/src/utils/i18n/i18n';
import { ModulVue } from '@chuckmah/modul-components/src/utils/vue/vue';
import { ControlValidatorValidationType } from '../../control-validator-validation-type';
import { FormGroup } from '../../form-group';
import { ValidatorKeys } from '../validator-error-keys';
/**
 *
 * @param min The maximum value required to be valid. Bound included.
 * @param options options required to personnalise the validator, like the timing of the validation or the error messages to display.
 */
export var MaxValidator = function (max, options) {
    return {
        key: ValidatorKeys.Max,
        validationFunction: function (control) {
            if (control instanceof FormGroup) {
                throw Error('the max validator should not be attached to a form group');
            }
            var isMax;
            if (!control.value && control.value !== 0) {
                isMax = true;
            }
            else {
                var value = control.value;
                isMax = value <= max;
            }
            return isMax;
        },
        error: options && options.error ?
            options.error : {
            message: (ModulVue.prototype.$i18n).translate('m-form:maxValidatorErrorMessage', { max: max }, undefined, undefined, undefined, FormatMode.Sprintf),
            groupMessage: options && options.controlLabel ?
                (ModulVue.prototype.$i18n).translate('m-form:maxValidatorErrorSummaryMessage', {
                    controlLabel: options.controlLabel,
                    max: max
                }, undefined, undefined, undefined, FormatMode.Sprintf)
                : undefined
        },
        validationType: options && options.validationType ?
            options.validationType : ControlValidatorValidationType.Correction
    };
};
//# sourceMappingURL=max.js.map