import { ModulVue } from '../../utils/vue/vue';
import { PluginObject } from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import WithRender from './step.html?style=./step.scss';
import { STEP_NAME } from '../component-names';
import { TransitionAccordion, TransitionAccordionMixin } from '../../mixins/transition-accordion/transition-accordion';

export enum MStepState {
    Locked = 'locked',
    InProgress = 'in-progress',
    Success = 'success',
    Warning = 'warning',
    Error = 'error'
}

@WithRender
@Component({
    mixins: [
        TransitionAccordion
    ]
})
export class MStep extends ModulVue {
    @Prop({ default: MStepState.Locked })
    public state: MStepState;
    @Prop()
    public open: boolean;
    @Prop({ default: false })
    public required: boolean;
    @Prop({ default: 'default' })
    public iconName: string;
    @Prop({ default: false })
    public last: boolean;

    public componentName = STEP_NAME;
    private internalPropOpen: boolean = false;

    @Watch('open')
    private openChanged(value: boolean): void {
        this.propOpen = value;
    }

    protected get propOpen(): boolean {
        return this.open != undefined ? this.open : this.internalPropOpen;
    }

    protected set propOpen(value: boolean) {
        this.as<TransitionAccordionMixin>().isAnimActive = true;
        this.$emit('open', value);
        this.internalPropOpen = value;
    }

    private openStep(event): void {
        this.as<TransitionAccordionMixin>().isAnimActive = true;
        this.propOpen = true;
        this.$emit('openStep', event);
        event.preventDefault();
    }

    private closeStep(event): void {
        this.as<TransitionAccordionMixin>().isAnimActive = true;
        this.propOpen = false;
        this.$emit('closeStep', event);
        event.preventDefault();
    }

    private getIcon(): string {
        let icon: string = '';
        switch (this.state) {
            case MStepState.Locked:
                icon = 'default';
                break;
            case MStepState.Success:
                icon = 'chip-check';
                break;
            case MStepState.Warning:
                icon = 'chip-check-yellow';
                break;
            case MStepState.Error:
                icon = 'chip-error';
                break;
            default:
                break;
        }
        return icon;
    }
}

const StepPlugin: PluginObject<any> = {
    install(v, options) {
        v.component(STEP_NAME, MStep);
    }
};

export default StepPlugin;
