import { FormatMode } from '@chuckmah/modul-components/src/utils/i18n/i18n';
import { ModulVue } from '@chuckmah/modul-components/src/utils/vue/vue';
import { ControlValidatorValidationType } from '../../control-validator-validation-type';
import { FormGroup } from '../../form-group';
import { ValidatorKeys } from '../validator-error-keys';
/**
 *
 * @param lowerBound Minimum value of the range within which the value must be to be valid. Inclusive.
 * @param upperBound Maximum value of the range within which the value must be to be valid. Inclusive.
 * @param options options required to personnalise the validator, like the timing of the validation or the error messages to display.
 */
export var BetweenValidator = function (lowerBound, upperBound, options) {
    return {
        key: ValidatorKeys.Between,
        validationFunction: function (control) {
            if (control instanceof FormGroup) {
                throw Error('the between validator should not be attached to a form group');
            }
            var isBetween;
            if (!control.value && control.value !== 0) {
                isBetween = true;
            }
            else {
                var value = control.value;
                isBetween = value >= lowerBound && value <= upperBound;
            }
            return isBetween;
        },
        error: options && options.error ?
            options.error : {
            message: (ModulVue.prototype.$i18n).translate('m-form:betweenValidatorErrorMessage', {
                lowerBound: lowerBound,
                upperBound: upperBound
            }, undefined, undefined, undefined, FormatMode.Sprintf),
            groupMessage: options && options.controlLabel ?
                (ModulVue.prototype.$i18n).translate('m-form:betweenValidatorErrorSummaryMessage', {
                    controlLabel: options.controlLabel,
                    lowerBound: lowerBound,
                    upperBound: upperBound
                }, undefined, undefined, undefined, FormatMode.Sprintf)
                : undefined
        },
        validationType: options && options.validationType ?
            options.validationType : ControlValidatorValidationType.Correction
    };
};
//# sourceMappingURL=between.js.map