import I18nPlugin from '@chuckmah/modul-components/dist/components/i18n/i18n';
import MessagePlugin from '@chuckmah/modul-components/dist/components/message/message';
import ToastPlugin from '@chuckmah/modul-components/dist/components/toast/toast';
import { FRENCH } from '@chuckmah/modul-components/dist/utils/i18n/i18n';
import ScrollToPlugin from '@chuckmah/modul-components/dist/utils/scroll-to/scroll-to';
import ToastServicePlugin from '@chuckmah/modul-components/dist/utils/toast/toast-service.plugin';
import { AbstractControlDirective } from './components/form/control-directive';
import { ClearErrorToast, ErrorToast, FocusOnFirstError } from './components/form/fallouts/built-in-form-action-fallouts';
import { MForm } from './components/form/form';
import { MFormService } from './components/form/form-service';
export var FORM_NAME = 'm-form';
export var ABSTRACT_CONTROL_NAME = 'm-control';
export var FormPlugin = {
    install: function (v, options) {
        v.prototype.$log.debug(FORM_NAME, 'plugin.install');
        v.use(I18nPlugin);
        var i18n = (v.prototype).$i18n;
        if (i18n) {
            i18n.addMessages(FRENCH, require('./components/form/form.lang.fr.json'));
        }
        v.use(MessagePlugin);
        v.use(ToastPlugin);
        v.use(ToastServicePlugin);
        v.use(ScrollToPlugin);
        v.directive(ABSTRACT_CONTROL_NAME, AbstractControlDirective);
        v.component(FORM_NAME, MForm);
        (v.prototype).$form = new MFormService(options && options.formAfterActionEffects ?
            options.formAfterActionEffects : [
            ErrorToast,
            ClearErrorToast,
            FocusOnFirstError
        ]);
    }
};
export default FormPlugin;
//# sourceMappingURL=index.js.map