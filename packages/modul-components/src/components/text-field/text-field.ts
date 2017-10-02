import { ModulVue } from '../../utils/vue/vue';
import { PluginObject } from 'vue';
import Component from 'vue-class-component';
import { Prop, Model, Watch } from 'vue-property-decorator';
import WithRender from './text-field.html?style=./text-field.scss';
import { TEXT_FIELD_NAME } from '../component-names';
import { InputState, InputStateMixin } from '../../mixins/input-state/input-state';

export enum MTextFieldType {
    Text = 'text',
    Password = 'password',
    EMail = 'email',
    Url = 'url',
    Telephone = 'tel',
    Dropdown = 'dropdown'
}

export enum MTextFieldMode {
    Regular = 'text',
    Dropdown = 'dropdown'
}

export interface MTextFieldInterface extends ModulVue {
    setFocus(): void;
}

const ICON_NAME_PASSWORD_VISIBLE: string = 'default';
const ICON_NAME_PASSWORD_HIDDEN: string = 'default';

@WithRender
@Component({
    mixins: [InputState]
})
export class MTextField extends ModulVue implements MTextFieldInterface {

    @Prop({
        default: MTextFieldType.Text,
        validator: value => value == MTextFieldType.Dropdown || value == MTextFieldType.EMail || value == MTextFieldType.Password ||
            value == MTextFieldType.Telephone || value == MTextFieldType.Text || value == MTextFieldType.Url
    })
    public type: MTextFieldType;
    @Prop({
        default: MTextFieldMode.Regular,
        validator: value => value == MTextFieldMode.Dropdown || value == MTextFieldMode.Regular
    })
    public mode: MTextFieldMode;
    @Prop()
    @Model('change')
    public value: string;
    @Prop({ default: true })
    public iconPassword: boolean;
    @Prop()
    public label: string;
    @Prop({ default: true })
    public editable: boolean;
    @Prop()
    public iconName: string;
    @Prop()
    public iconDescription: string;
    @Prop({ default: false })
    public forceFocus: boolean;
    @Prop()
    public placeholder: string;
    @Prop({ default: false })
    public waiting: boolean;

    private internalValue: string = '';
    private passwordAsText: boolean = false;
    private internalIsFocus: boolean = false;

    private iconDescriptionShowPassword: string = this.$i18n.translate('m-text-field:show-password');
    private iconDescriptionHidePassword: string = this.$i18n.translate('m-text-field:hide-password');

    public setFocus(): void {
        (this.$el.children[1].children[0] as HTMLElement).focus();
        this.internalIsFocus = true;
    }

    protected mounted(): void {
        (this.$refs.input as HTMLElement).setAttribute('type', this.inputType);
    }

    @Watch('type')
    private typeChanged(type: MTextFieldType): void {
        console.warn('MTextField - Change of property "type" is not supported');
        (this.$refs.input as HTMLElement).setAttribute('type', this.inputType);
    }

    private onFocus(event: FocusEvent): void {
        this.internalIsFocus = !this.as<InputStateMixin>().isDisabled;
        if (this.internalIsFocus) {
            this.$emit('focus', event);
        }
    }

    private onBlur(event): void {
        this.internalIsFocus = false;
        this.$emit('blur', event);
    }

    private onKeyup(event): void {
        if (!this.as<InputStateMixin>().isDisabled) {
            this.$emit('keyup', event, this.model);
        }
    }

    private togglePasswordVisibility(event): void {
        this.passwordAsText = !this.passwordAsText;
        this.$nextTick(() => {
            (this.$refs.input as HTMLElement).setAttribute('type', this.passwordAsText ? MTextFieldType.Text : MTextFieldType.Password);
        });
    }

    private get propPlaceholder(): string {
        return this.hasLabel ? (this.isFocus ? this.placeholder : '') : this.placeholder;
    }

    private get isPlaceholderVisible(): boolean {
        return !!this.placeholder && (this.hasLabel ? this.isFocus && !this.hasValue : !this.hasValue);
    }

    private get inputType(): MTextFieldType {
        let result: MTextFieldType = MTextFieldType.Text;

        if (this.mode == MTextFieldMode.Dropdown || this.type == MTextFieldType.Password && this.passwordAsText) {
            result = MTextFieldType.Text;
        } else if (this.type == MTextFieldType.Password || this.type == MTextFieldType.EMail || this.type == MTextFieldType.Url ||
            this.type == MTextFieldType.Telephone) {
            result = this.type;
        }
        return result;
    }

    private set model(value: string) {
        this.internalValue = value;
        this.$emit('change', value);
    }

    private get model(): string {
        return this.value == undefined ? this.internalValue : this.value;
    }

    private get hasValue(): boolean {
        return !!this.value;
    }

    private get isFocus(): boolean {
        return this.internalIsFocus || this.forceFocus;
    }

    private get iconNamePassword() {
        return this.passwordAsText ? ICON_NAME_PASSWORD_HIDDEN : ICON_NAME_PASSWORD_VISIBLE;
    }

    private get iconDescriptionPassword() {
        return this.passwordAsText ? this.iconDescriptionHidePassword : this.iconDescriptionShowPassword;
    }

    private get isDropdown(): boolean {
        return this.mode == MTextFieldMode.Dropdown;
    }

    private get propIconPassword(): boolean {
        return this.iconPassword && this.type == MTextFieldType.Password && !this.as<InputStateMixin>().isDisabled;
    }

    private get propEditable(): boolean {
        return this.editable && !(this.hasValueSlot && this.type != MTextFieldType.Password);
    }

    private get hasValueSlot(): boolean {
        return !!this.$slots.default;
    }

    private get hasLabel(): boolean {
        return !!this.label;
    }

    private get hasIcon(): boolean {
        return !!this.iconName && !this.as<InputStateMixin>().isDisabled;
    }

    private get isMessageVisible(): boolean {
        return !this.forceFocus;
    }
}

const TextFieldPlugin: PluginObject<any> = {
    install(v, options) {
        v.component(TEXT_FIELD_NAME, MTextField);
    }
};

export default TextFieldPlugin;
