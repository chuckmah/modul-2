import { withA11y } from '@storybook/addon-a11y';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';
import Vue from 'vue';
import { componentsHierarchyRootSeparator } from '../../../conf/storybook/utils';
import { RADIO_GROUP_NAME } from '../component-names';
import RadioPlugin from '../radio/radio';
import RadioGroupPlugin from './radio-group';

Vue.use(RadioPlugin);
Vue.use(RadioGroupPlugin);


declare module '@storybook/addon-knobs' {
    export function withKnobs(): any;
}


storiesOf(`${componentsHierarchyRootSeparator}${RADIO_GROUP_NAME}`, module)
    .addDecorator(withA11y)
    .addDecorator(withKnobs)
    .add('default', () => ({
        props: {
            text: {
                default: text('Text', 'A Radio Group')
            }
        },
        template: '<m-radio-group>{{ text }}</m-radio-group>'
    }))
    .add('radiosPosition=right', () => ({
        template: `<m-radio-group>
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('inline', () => ({
        template: `<m-radio-group inline="true">
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('radiosVerticalAlign=center', () => ({
        template: `<m-radio-group radiosVerticalAlign=""center">
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('radiosMarginTop=10px', () => ({
        template: `<m-radio-group radiosMarginTop="10px">
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('disabled', () => ({
        template: `<m-radio-group :disabled="true">
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('readonly', () => ({
        template: `<m-radio-group :readonly="true">
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('label', () => ({
        template: `<m-radio-group label="This is a label">
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('focus', () => ({
        template: `<m-radio-group :focus="true">
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('error', () => ({
        template: `<m-radio-group :error="true">
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('valid', () => ({
        template: `<m-radio-group :valid="true">
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('error-message', () => ({
        template: `<m-radio-group error-message="This is an error message">
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }));

storiesOf(`${componentsHierarchyRootSeparator}${RADIO_GROUP_NAME}/radiosPosition=right`, module)
    .addDecorator(withA11y)
    .add('inline', () => ({
        template: `<m-radio-group inline="true" radiosPosition="right">
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('radiosVerticalAlign=center', () => ({
        template: `<m-radio-group radiosPosition="right" radiosVerticalAlign=center>
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('radiosMarginTop=10px', () => ({
        template: `<m-radio-group radiosMarginTop="10px" radiosPosition="right">
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('disabled', () => ({
        template: `<m-radio-group :disabled="true" radiosPosition="right">
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('readonly', () => ({
        template: `<m-radio-group :readonly="true" radiosPosition="right">
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('label', () => ({
        template: `<m-radio-group label="This is a label" radiosPosition="right">
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('focus', () => ({
        template: `<m-radio-group :focus="true" radiosPosition="right">
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('error', () => ({
        template: `<m-radio-group :error="true" radiosPosition="right">
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('valid', () => ({
        template: `<m-radio-group :valid="true" radiosPosition="right">
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('error-message', () => ({
        template: `<m-radio-group error-message="This is an error message" radiosPosition="right">
                        <m-radio>Radio Option 1</m-radio>
                        <m-radio>Radio Option 2</m-radio>
                        <m-radio>Radio Option 3</m-radio>
                   </m-radio-group>`
    }));

storiesOf(`${componentsHierarchyRootSeparator}${RADIO_GROUP_NAME}/readonly/readonly=false`, module)
    .addDecorator(withA11y)
    .add('all childrens readonly=false', () => ({
        template: `<m-radio-group :readonly="false">
                        <m-radio :readonly="false">Radio Option 1</m-radio>
                        <m-radio :readonly="false">Radio Option 2</m-radio>
                        <m-radio :readonly="false">Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('all childrens readonly=true', () => ({
        template: `<m-radio-group :readonly="true">
                        <m-radio :readonly="true">Radio Option 1</m-radio>
                        <m-radio :readonly="true">Radio Option 2</m-radio>
                        <m-radio :readonly="true">Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('all childrens readonly=mixed', () => ({
        template: `<m-radio-group :readonly="true">
                        <m-radio :readonly="false">Radio Option 1</m-radio>
                        <m-radio :readonly="true">Radio Option 2</m-radio>
                        <m-radio :readonly="false">Radio Option 3</m-radio>
    </m-radio-group>`
    }));

storiesOf(`${componentsHierarchyRootSeparator}${RADIO_GROUP_NAME}/readonly/readonly=true`, module)
    .addDecorator(withA11y)
    .add('readonly=false', () => ({
        template: `<m-radio-group :readonly="true">
                        <m-radio :readonly="false">Radio Option 1</m-radio>
                        <m-radio :readonly="false">Radio Option 2</m-radio>
                        <m-radio :readonly="false">Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('all childrens readonly=true', () => ({
        template: `<m-radio-group :readonly="true">
                        <m-radio :readonly="true">Radio Option 1</m-radio>
                        <m-radio :readonly="true">Radio Option 2</m-radio>
                        <m-radio :readonly="true">Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('all childrens readonly=mixed', () => ({
        template: `<m-radio-group :readonly="true">
                        <m-radio :readonly="true">Radio Option 1</m-radio>
                        <m-radio :readonly="false">Radio Option 2</m-radio>
                        <m-radio :readonly="true">Radio Option 3</m-radio>
    </m-radio-group>`
    }));

storiesOf(`${componentsHierarchyRootSeparator}${RADIO_GROUP_NAME}/disabled/disabled=false`, module)
    .addDecorator(withA11y)
    .add('all childrens disabled=false', () => ({
        template: `<m-radio-group :disabled="false">
                        <m-radio :disabled="false">Radio Option 1</m-radio>
                        <m-radio :disabled="false">Radio Option 2</m-radio>
                        <m-radio :disabled="false">Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('all childrens disabled=true', () => ({
        template: `<m-radio-group :disabled="true">
                        <m-radio :disabled="true">Radio Option 1</m-radio>
                        <m-radio :disabled="true">Radio Option 2</m-radio>
                        <m-radio :disabled="true">Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('all childrens disabled=mixed', () => ({
        template: `<m-radio-group :disabled="true">
                        <m-radio :disabled="false">Radio Option 1</m-radio>
                        <m-radio :disabled="true">Radio Option 2</m-radio>
                        <m-radio :disabled="false">Radio Option 3</m-radio>
    </m-radio-group>`
    }));

storiesOf(`${componentsHierarchyRootSeparator}${RADIO_GROUP_NAME}/disabled/disabled=true`, module)
    .addDecorator(withA11y)
    .add('disabled=false', () => ({
        template: `<m-radio-group :disabled="true">
                        <m-radio :disabled="false">Radio Option 1</m-radio>
                        <m-radio :disabled="false">Radio Option 2</m-radio>
                        <m-radio :disabled="false">Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('all childrens disabled=true', () => ({
        template: `<m-radio-group :disabled="true">
                        <m-radio :disabled="true">Radio Option 1</m-radio>
                        <m-radio :disabled="true">Radio Option 2</m-radio>
                        <m-radio :disabled="true">Radio Option 3</m-radio>
                   </m-radio-group>`
    }))
    .add('all childrens disabled=mixed', () => ({
        template: `<m-radio-group :disabled="true">
                        <m-radio :disabled="true">Radio Option 1</m-radio>
                        <m-radio :disabled="false">Radio Option 2</m-radio>
                        <m-radio :disabled="true">Radio Option 3</m-radio>
    </m-radio-group>`
    }));
