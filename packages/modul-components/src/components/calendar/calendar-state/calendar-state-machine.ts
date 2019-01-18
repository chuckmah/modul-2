import Component from 'vue-class-component';
import { Emit, Prop, Watch } from 'vue-property-decorator';
import { ModulVue } from '../../../utils';
import { RangeDate, SingleDate } from './state/abstract-calendar-state';
import CalendarRangeDateState from './state/calendar-range-date-state';
import CalendarSingleDateState from './state/calendar-single-date-state';
import CalendarState from './state/calendar-state';


export enum CalendarMode {
    SINGLE_DATE = 'single-date',
    DATE_RANGE = 'date-range'
}

@Component
export default class MCalendarStateMachine extends ModulVue {

    @Prop({ default: '' })
    value: SingleDate | RangeDate;

    @Prop({ default: CalendarMode.SINGLE_DATE })
    mode: CalendarMode;

    @Prop()
    minDate: string;

    @Prop()
    maxDate: string;

    private calendarState: CalendarState = {} as CalendarState;

    @Watch('value')
    refreshValue(): void {
        this.calendarState.updateValue(this.value);
    }

    created(): void {
        switch (this.mode) {
            case CalendarMode.SINGLE_DATE:
                this.calendarState = new CalendarSingleDateState(this.value as SingleDate, this.minDate, this.maxDate);
                break;
            case CalendarMode.DATE_RANGE:
                this.calendarState = new CalendarRangeDateState(this.value as RangeDate, this.minDate, this.maxDate);
        }
        this.calendarState.onDateSelect(this.dateSelectCallBack);
    }

    render(): any {
        return this.$scopedSlots.default!(
            this.calendarState.buildCurrentCalendar()
        );
    }

    onInput(value: SingleDate | RangeDate): void {
        this.calendarState.updateValue(value);
    }

    @Emit('input')
    private dateSelectCallBack(date: SingleDate | RangeDate): void { }
}