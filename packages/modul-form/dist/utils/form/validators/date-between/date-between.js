import { dateFilter } from '@chuckmah/modul-components/src/filters/date/date/date';
import { FormatMode } from '@chuckmah/modul-components/src/utils/i18n/i18n';
import ModulDate from '@chuckmah/modul-components/src/utils/modul-date/modul-date';
import { ModulVue } from '@chuckmah/modul-components/src/utils/vue/vue';
import { ControlValidatorValidationType } from '../../control-validator-validation-type';
import { FormGroup } from '../../form-group';
import { ValidatorKeys } from '../validator-error-keys';
/**
 *
 * @param start Start of the period during witch the date must be to be valid. Inclusive.
 * @param end End of the period during witch the date must be to be valid. Inclusive.
 * @param options options required to personnalise the validator, like the timing of the validation or the error messages to display.
 */
export var DateBetweenValidator = function (start, end, options) {
    var startFormatted = dateFilter(new ModulDate(start).toDate());
    var endFormatted = dateFilter(new ModulDate(end).toDate());
    return {
        key: ValidatorKeys.Date,
        validationFunction: function (control) {
            if (control instanceof FormGroup) {
                throw Error('the DateBetweenValidator should not be attached to a form group');
            }
            if (!control.value || (control.value.length < 10) || isNaN(Date.parse(control.value))) {
                return true;
            }
            else {
                var formControlDate = new ModulDate(control.value);
                return formControlDate.isBetween(new ModulDate(start), new ModulDate(end));
            }
        },
        error: options && options.error ?
            options.error : {
            message: (ModulVue.prototype.$i18n).translate('m-form:dateBetweenValidatorErrorMessage', {
                start: startFormatted,
                end: endFormatted
            }, undefined, undefined, undefined, FormatMode.Sprintf),
            groupMessage: options && options.controlLabel ?
                (ModulVue.prototype.$i18n).translate('m-form:dateBetweenValidatorErrorSummaryMessage', {
                    controlLabel: options.controlLabel,
                    start: startFormatted,
                    end: endFormatted
                }, undefined, undefined, undefined, FormatMode.Sprintf)
                : undefined
        },
        validationType: options && options.validationType ?
            options.validationType : ControlValidatorValidationType.Correction
    };
};
//# sourceMappingURL=date-between.js.map