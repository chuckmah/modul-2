import Vue from 'vue';
import { PluginObject } from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import WithRender from './tooltip.html?style=./tooltip.scss';
import { TOOLTIP_NAME } from '../component-names';
import { MPopup } from '../popup/popup';
import { MPopperPlacement } from '../popper/popper';

export enum MTooltipMode {
    ICON = 'icon',
    LINK = 'link'
}

@WithRender
@Component
export class MTooltip extends Vue {
    @Prop({ default: false })
    public open: boolean;
    @Prop({ default: MTooltipMode.ICON })
    public mode: string;
    @Prop({ default: MPopperPlacement.Bottom })
    public placement: MPopperPlacement;
    @Prop()
    public label: string;
    @Prop({ default: true })
    public closeButton: boolean;
    @Prop({ default: '' })
    public classNamePortalTarget: string;
    @Prop({ default: false })
    public disabled: boolean;

    public componentName = TOOLTIP_NAME;

    private get propMode(): string {
        return this.mode != MTooltipMode.ICON && this.label != undefined ? MTooltipMode.LINK : MTooltipMode.ICON;
    }

    private onOpen(): void {
        this.$emit('open');
    }

    private onClose(): void {
        this.$emit('close', event);
    }

    private close(): void {
        (this.$children[0] as MPopup).propOpen = false;
    }
}

const TooltipPlugin: PluginObject<any> = {
    install(v, options) {
        v.component(TOOLTIP_NAME, MTooltip);
    }
};

export default TooltipPlugin;
