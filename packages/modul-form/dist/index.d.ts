import { PluginObject } from 'vue';
import { FormActionFallout } from './components/form/form-action-fallout';
import { MFormService } from './components/form/form-service';
export declare const FORM_NAME: string;
export declare const ABSTRACT_CONTROL_NAME: string;
declare module 'vue/types/vue' {
    interface Vue {
        $form: MFormService;
    }
}
export interface FormPluginOptions {
    formAfterActionEffects?: FormActionFallout[];
}
export declare const FormPlugin: PluginObject<any>;
export default FormPlugin;
//# sourceMappingURL=index.d.ts.map