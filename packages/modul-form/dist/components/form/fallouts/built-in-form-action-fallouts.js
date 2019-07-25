import Vue from 'vue';
import { FormControl } from '../../../utils/form/form-control';
import { FormActions } from '../form-action-type';
var scrollToElement = function (element, offset) {
    (Vue.prototype).$scrollTo.goTo(element, offset);
};
/**
 * Recursive fonction to return the first formControl in error. If none is returned then undefined is returned (in case of an error in the formGroup).
 * @param formGroup
 */
var getFirstControlInError = function (formGroup) {
    var invalidControl;
    var controls = formGroup.controls;
    if (controls && controls.length > 0) {
        for (var index = 0; index < controls.length; ++index) {
            if (controls[index] instanceof FormControl) {
                if (controls[index].hasError()) {
                    return controls[index];
                }
            }
            else {
                var invalidControlInGroup = getFirstControlInError(controls[index]);
                if (invalidControlInGroup) {
                    return invalidControlInGroup;
                }
            }
        }
    }
    return invalidControl;
};
export var ClearErrorToast = {
    action: FormActions.ValidSubmitOrResetOrDestroyed,
    fallout: function (form) {
        form.displayToast = false;
    }
};
export var ErrorToast = {
    action: FormActions.InvalidSubmit,
    fallout: function (form) {
        form.displayToast = true;
    }
};
export var FocusOnFirstError = {
    action: FormActions.InvalidSubmit,
    fallout: function (form) {
        var control = getFirstControlInError(form.formGroup);
        if (control) {
            if (control.htmlElement instanceof HTMLInputElement) {
                scrollToElement(control.htmlElement, form.$form.scrollToOffset);
                control.htmlElement.focus();
            }
            else if (control.htmlElement) {
                scrollToElement(control.htmlElement, form.$form.scrollToOffset);
            }
        }
    }
};
export var SummaryMessage = {
    action: FormActions.InvalidSubmit,
    fallout: function (form) {
        form.displaySummary = true;
    }
};
export var ClearSummaryMessage = {
    action: FormActions.ValidSubmitOrReset,
    fallout: function (form) {
        form.displaySummary = false;
    }
};
//# sourceMappingURL=built-in-form-action-fallouts.js.map