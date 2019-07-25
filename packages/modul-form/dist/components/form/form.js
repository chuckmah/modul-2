var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { FormatMode } from '@chuckmah/modul-components/src/utils/i18n/i18n';
import { getString } from '@chuckmah/modul-components/src/utils/str/str';
import { ModulVue } from '@chuckmah/modul-components/src/utils/vue/vue';
import { Component, Emit, Prop, Watch } from 'vue-property-decorator';
import { FormArray } from '../../utils/form/form-array';
import { FormControl } from '../../utils/form/form-control';
import { FormGroup } from '../../utils/form/form-group';
import { FormActions } from './form-action-type';
import WithRender from './form.html?style=./form.scss';
var MForm = /** @class */ (function (_super) {
    __extends(MForm, _super);
    function MForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.displaySummary = false;
        _this.displayToast = false;
        return _this;
    }
    MForm.prototype.emitSubmit = function () { };
    MForm.prototype.emitReset = function () { };
    MForm.prototype.onFormGroupErrorsChange = function (controlErrors) {
        if (controlErrors.length === 0) {
            this._hideSummaryAndToast();
        }
    };
    Object.defineProperty(MForm.prototype, "formErrors", {
        get: function () {
            return this._getAllFormErrors(this.formGroup);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MForm.prototype, "summaryMessages", {
        get: function () {
            return this.formErrors.map(function (error) { return getString(error.groupMessage) || getString(error.message); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MForm.prototype, "toastMessage", {
        get: function () {
            var errorCount = this._getAllControlsInError(this.formGroup).length;
            return this.$i18n.translate(errorCount <= 1 ? 'm-form:multipleErrorsToCorrect' : 'm-form:multipleErrorsToCorrect.p', { totalNbOfErrors: errorCount <= 1 ? 1 : errorCount }, undefined, undefined, undefined, FormatMode.Sprintf);
        },
        enumerable: true,
        configurable: true
    });
    MForm.prototype.triggerActionFallouts = function (action) {
        var _this = this;
        this.actionFallouts
            .filter(function (a) { return action & a.action; })
            .forEach(function (a) { return a.fallout(_this); });
    };
    MForm.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.formGroup.submit()];
                    case 1:
                        _a.sent();
                        if (!this.formGroup.valid) {
                            this.triggerActionFallouts(FormActions.InvalidSubmit);
                            return [2 /*return*/];
                        }
                        this.triggerActionFallouts(FormActions.ValidSubmit);
                        this.emitSubmit();
                        return [2 /*return*/];
                }
            });
        });
    };
    MForm.prototype.reset = function () {
        this.formGroup.reset();
        this.triggerActionFallouts(FormActions.Reset);
        this.emitReset();
    };
    MForm.prototype.created = function () {
        this.triggerActionFallouts(FormActions.Created);
    };
    MForm.prototype.updated = function () {
        this.triggerActionFallouts(FormActions.Updated);
    };
    MForm.prototype.beforeDestroy = function () {
        this.triggerActionFallouts(FormActions.Destroyed);
        this.formGroup.reset();
    };
    MForm.prototype._getAllFormErrors = function (control) {
        var _this = this;
        var result = control.errors;
        control.controls.forEach(function (c) {
            if (c instanceof FormControl) {
                result = result.concat(c.errors);
            }
            else if (c instanceof FormGroup || c instanceof FormArray) {
                result = result.concat(_this._getAllFormErrors(c));
            }
        });
        return result;
    };
    MForm.prototype._getAllFormValidators = function (control) {
        var _this = this;
        var result = control.validators;
        control.controls.forEach(function (c) {
            if (c instanceof FormControl) {
                result = result.concat(c.validators);
            }
            else if (c instanceof FormGroup || c instanceof FormArray) {
                result = result.concat(_this._getAllFormValidators(c));
            }
        });
        return result;
    };
    MForm.prototype._getAllControlsInError = function (control) {
        var _this = this;
        var controls = [];
        if (control.hasError()) {
            controls.push(control);
        }
        control.controls.forEach(function (c) {
            if (c.hasError()) {
                controls.push(c);
            }
            if (c instanceof FormGroup || c instanceof FormArray) {
                controls = controls.concat(_this._getAllControlsInError(c));
            }
        });
        return controls;
    };
    MForm.prototype._hideSummaryAndToast = function () {
        this.displaySummary = this.displayToast = false;
    };
    __decorate([
        Prop()
    ], MForm.prototype, "formGroup", void 0);
    __decorate([
        Prop({ default: function () { return ModulVue.prototype.$form.formActionFallouts || []; } })
    ], MForm.prototype, "actionFallouts", void 0);
    __decorate([
        Emit('submit')
    ], MForm.prototype, "emitSubmit", null);
    __decorate([
        Emit('reset')
    ], MForm.prototype, "emitReset", null);
    __decorate([
        Watch('formErrors')
    ], MForm.prototype, "onFormGroupErrorsChange", null);
    MForm = __decorate([
        WithRender,
        Component
    ], MForm);
    return MForm;
}(ModulVue));
export { MForm };
//# sourceMappingURL=form.js.map