import Vue, { PluginObject } from 'vue';
import FrenchPlugin from '../../packages/modul-components/src/lang/fr';
import '../../packages/modul-components/src/styles/main.scss';
import { FRENCH } from '../../packages/modul-components/src/utils/i18n/i18n';
import '../../packages/modul-components/src/utils/polyfills';
import DefaultSpritesPlugin from '../../packages/modul-components/src/utils/svg/default-sprites';
import UtilsPlugin, { UtilsPluginOptions } from '../../packages/modul-components/src/utils/utils-plugin';
import './styles/storybook.scss';


export const ModulPlugin: PluginObject<any> = {
    install(v, options): void {

        Vue.config.productionTip = false;

        let utilsOptions: UtilsPluginOptions = {
            propagateVueParserErrors: false,
            i18PluginOptions: {
                curLang: FRENCH
            }
        };

        Vue.use(UtilsPlugin, utilsOptions);
        Vue.use(FrenchPlugin);
        Vue.use(DefaultSpritesPlugin);
    }
};
