import Vue from 'vue';
import '../../utils/polyfills';
import MessagePlugin, { MMessage, MMessageState, MMessageMode } from './message';

const STATE_SUCCESS_CSS: string = 'm--is-success';
const STATE_INFORMATION_CSS: string = 'm--is-information';
const STATE_WARNING_CSS: string = 'm--is-warning';
const STATE_ERROR_CSS: string = 'm--is-error';
const MODE_REGULAR_CSS: string = 'm--is-regular';
const MODE_LIGHT_CSS: string = 'm--is-light';

let message: MMessage;

describe('message', () => {
    beforeEach(() => {
        Vue.use(MessagePlugin);
        message = new MMessage().$mount();
    });

    it('css class for button group are not present', () => {
        expect(message.$el.classList.contains(STATE_INFORMATION_CSS)).toBeFalsy();
        expect(message.$el.classList.contains(STATE_WARNING_CSS)).toBeFalsy();
        expect(message.$el.classList.contains(STATE_ERROR_CSS)).toBeFalsy();
        expect(message.$el.classList.contains(MODE_LIGHT_CSS)).toBeFalsy();
    });

    it('state prop', () => {
        expect(message.$el.classList.contains(STATE_INFORMATION_CSS)).toBeFalsy();
        expect(message.$el.classList.contains(STATE_WARNING_CSS)).toBeFalsy();
        expect(message.$el.classList.contains(STATE_ERROR_CSS)).toBeFalsy();

        message.state = MMessageState.Information;
        Vue.nextTick(() => {
            expect(message.$el.classList.contains(STATE_INFORMATION_CSS)).toBeTruthy();
            expect(message.$el.classList.contains(STATE_SUCCESS_CSS)).toBeFalsy();

            message.state = MMessageState.Warning;
            Vue.nextTick(() => {
                expect(message.$el.classList.contains(STATE_WARNING_CSS)).toBeTruthy();
                expect(message.$el.classList.contains(STATE_INFORMATION_CSS)).toBeFalsy();

                message.state = MMessageState.Error;
                Vue.nextTick(() => {
                    expect(message.$el.classList.contains(STATE_ERROR_CSS)).toBeTruthy();
                    expect(message.$el.classList.contains(STATE_WARNING_CSS)).toBeFalsy();

                    message.state = MMessageState.Success;
                    Vue.nextTick(() => {
                        expect(message.$el.classList.contains(STATE_SUCCESS_CSS)).toBeTruthy();
                        expect(message.$el.classList.contains(STATE_ERROR_CSS)).toBeFalsy();
                    });
                });
            });
        });
    });

    it('mode prop', () => {
        expect(message.$el.classList.contains(MODE_LIGHT_CSS)).toBeFalsy();

        message.mode = MMessageMode.Light;
        Vue.nextTick(() => {
            expect(message.$el.classList.contains(MODE_LIGHT_CSS)).toBeTruthy();
            expect(message.$el.classList.contains(MODE_REGULAR_CSS)).toBeFalsy();

            message.mode = MMessageMode.Regular;
            Vue.nextTick(() => {
                expect(message.$el.classList.contains(MODE_REGULAR_CSS)).toBeTruthy();
                expect(message.$el.classList.contains(MODE_LIGHT_CSS)).toBeFalsy();
            });
        });
    });

});