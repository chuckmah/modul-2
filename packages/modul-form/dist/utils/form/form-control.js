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
import { AbstractControl } from './abstract-control';
var FormControl = /** @class */ (function (_super) {
    __extends(FormControl, _super);
    function FormControl(validators, options) {
        if (validators === void 0) { validators = []; }
        var _this = _super.call(this, validators, options) || this;
        _this.validators = validators;
        if (options) {
            if (options.initialValue !== undefined) {
                _this._initialValue = _this._value = _this._oldValue = options.initialValue;
            }
        }
        else {
            // ensure reactivity
            _this._value = undefined;
        }
        return _this;
    }
    Object.defineProperty(FormControl.prototype, "touched", {
        get: function () {
            return this._touched;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControl.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (value === this.value && typeof value !== 'object') {
                return;
            }
            this._oldValue = this._value;
            this._value = value;
            this.upwardValueChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControl.prototype, "initalValue", {
        set: function (initalValue) {
            this._initialValue = initalValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControl.prototype, "valid", {
        get: function () {
            if (!this.enabled || this.readonly) {
                return true;
            }
            else {
                return this.validators.every(function (v) { return !!v.lastCheck; });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControl.prototype, "enabled", {
        get: function () {
            return this._enabled;
        },
        set: function (isEnabled) {
            this._enabled = isEnabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControl.prototype, "waiting", {
        get: function () {
            return this._waiting;
        },
        set: function (isWaiting) {
            this._waiting = isWaiting;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControl.prototype, "readonly", {
        get: function () {
            return this._readonly;
        },
        set: function (isReadonly) {
            this._readonly = isReadonly;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This specify the ennd of a edition context.
     */
    FormControl.prototype.endEdition = function () {
        this._touched = true;
        _super.prototype.endEdition.call(this);
    };
    /**
     * Reset the field to it's orginal pristine state.
     *
     * @param {T} [initialValue]  a new initial value for the field
     */
    FormControl.prototype.reset = function (initialValue) {
        _super.prototype.reset.call(this);
        this._touched = false;
        if (typeof initialValue === 'undefined') {
            this._value = this._oldValue = this._initialValue;
        }
        else {
            this._initialValue = this._value = this._oldValue = initialValue;
        }
    };
    /**
     * Run all validators
     *
     */
    FormControl.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.validate();
                        return [4 /*yield*/, this.validateAsync()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return FormControl;
}(AbstractControl));
export { FormControl };
//# sourceMappingURL=form-control.js.map