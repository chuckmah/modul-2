import { FormControl } from '../../utils/form/form-control';
var INPUT_SELECTOR = 'input, textarea, [contenteditable=true]';
export var AbstractControlDirective = {
    inserted: function (el, binding, vnode) {
        var control = binding.value;
        var inputElements = el.querySelectorAll(INPUT_SELECTOR);
        if (inputElements.length > 0) {
            control.htmlElement = inputElements[0];
        }
        else {
            control.htmlElement = el;
        }
        if (control instanceof FormControl) {
            Object.defineProperty(el, 'ControlDirectiveListeners', {
                value: {
                    focusListener: function () { return control.initEdition(); },
                    blurListener: function () { return control.endEdition(); }
                }
            });
            vnode.componentInstance.$on('focus', el['ControlDirectiveListeners'].focusListener);
            vnode.componentInstance.$on('blur', el['ControlDirectiveListeners'].blurListener);
        }
    },
    unbind: function (el, binding, vnode) {
        var control = binding.value;
        control.htmlElement = undefined;
        if (control instanceof FormControl) {
            vnode.componentInstance.$off('focus', el['ControlDirectiveListeners'].focusListener);
            vnode.componentInstance.$off('blur', el['ControlDirectiveListeners'].blurListener);
        }
    }
};
//# sourceMappingURL=control-directive.js.map