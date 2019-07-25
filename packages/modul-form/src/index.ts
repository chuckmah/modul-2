import I18nPlugin from '@chuckmah/modul-components/dist/components/i18n/i18n';
import MessagePlugin from '@chuckmah/modul-components/dist/components/message/message';
import ToastPlugin from '@chuckmah/modul-components/dist/components/toast/toast';
import { FRENCH, Messages } from '@chuckmah/modul-components/dist/utils/i18n/i18n';
import ScrollToPlugin from '@chuckmah/modul-components/dist/utils/scroll-to/scroll-to';
import ToastServicePlugin from '@chuckmah/modul-components/dist/utils/toast/toast-service.plugin';
import { PluginObject } from 'vue';
import { AbstractControlDirective } from './components/form/control-directive';
import { ClearErrorToast, ErrorToast, FocusOnFirstError } from './components/form/fallouts/built-in-form-action-fallouts';
import { MForm } from './components/form/form';
import { FormActionFallout } from './components/form/form-action-fallout';
import { MFormService } from './components/form/form-service';

export const FORM_NAME: string = 'm-form';
export const ABSTRACT_CONTROL_NAME: string = 'm-control';

declare module 'vue/types/vue' {
    interface Vue {
        $form: MFormService;
    }
}

export interface FormPluginOptions {
    formAfterActionEffects?: FormActionFallout[];
}

export const FormPlugin: PluginObject<any> = {
    install(v, options?: FormPluginOptions): void {
        v.prototype.$log.debug(FORM_NAME, 'plugin.install');

        v.use(I18nPlugin);
        const i18n: Messages = (v.prototype).$i18n;
        if (i18n) {
            i18n.addMessages(FRENCH, require('./components/form/form.lang.fr.json'));
        }

        v.use(MessagePlugin);
        v.use(ToastPlugin);
        v.use(ToastServicePlugin);
        v.use(ScrollToPlugin);
        v.directive(ABSTRACT_CONTROL_NAME, AbstractControlDirective);
        v.component(FORM_NAME, MForm);

        (v.prototype).$form = new MFormService(
            options && options.formAfterActionEffects ?
                options.formAfterActionEffects : [
                    ErrorToast,
                    ClearErrorToast,
                    FocusOnFirstError
                ]
        );
    }
};

export default FormPlugin;
