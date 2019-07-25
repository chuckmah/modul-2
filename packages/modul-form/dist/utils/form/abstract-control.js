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
import { getString } from '@chuckmah/modul-components/src/utils/str/str';
import { ControlEditionContext } from './control-edition-context';
import { DefaultValidationGuard } from './validation-guard';
/**
 * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
 *
 */
var AbstractControl = /** @class */ (function () {
    function AbstractControl(validators, options) {
        if (validators === void 0) { validators = []; }
        this.validators = validators;
        this._validationGuard = DefaultValidationGuard;
        this._editionContext = ControlEditionContext.None;
        this._errors = [];
        this._waiting = false;
        this._enabled = true;
        this._readonly = false;
        this._pristine = true;
        this._touched = false;
        if (options) {
            if (options.validationGuard) {
                this._validationGuard = options.validationGuard;
            }
        }
    }
    Object.defineProperty(AbstractControl.prototype, "pristine", {
        get: function () {
            return this._pristine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "errors", {
        get: function () {
            return (this.enabled && !this.readonly) ? this._errors : [];
        },
        set: function (errors) {
            this._errors = errors.slice();
        },
        enumerable: true,
        configurable: true
    });
    AbstractControl.prototype.hasError = function () {
        return this.errors.length > 0;
    };
    Object.defineProperty(AbstractControl.prototype, "errorMessage", {
        get: function () {
            if (this.hasError()) {
                return getString(this.errors[0].message);
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (parent) {
            this._parent = parent;
        },
        enumerable: true,
        configurable: true
    });
    AbstractControl.prototype.reset = function () {
        this._pristine = true;
        this.validators.forEach(function (v) { return v.lastCheck = undefined; });
        this._editionContext = ControlEditionContext.None;
        this._errors = [];
    };
    AbstractControl.prototype.upwardValueChanged = function () {
        this._pristine = false;
        if (!this._hasAnyControlsInError() && this.enabled && !this.readonly) {
            this.validate();
        }
        if (this._parent) {
            this._parent.upwardValueChanged();
        }
    };
    AbstractControl.prototype.validate = function () {
        var _this = this;
        this.validators.map(function (v) {
            if (v.async
                ||
                    _this._validationGuard(_this._editionContext, v.validationType)) {
                return;
            }
            var validationResult = v.validationFunction(_this);
            if (!(validationResult instanceof Promise)) {
                v.lastCheck = v.validationFunction(_this);
            }
            else {
                throw new Error('if you are using a async validation function  you must set the async flag to true');
            }
        });
        this._updateErrors();
    };
    AbstractControl.prototype.validateAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(this.validators
                            .map(function (v) { return __awaiter(_this, void 0, void 0, function () {
                            var validationResult, _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!v.async
                                            ||
                                                this._validationGuard(this._editionContext, v.validationType)) {
                                            return [2 /*return*/];
                                        }
                                        validationResult = v.validationFunction(this);
                                        if (!(validationResult instanceof Promise)) return [3 /*break*/, 2];
                                        this._waiting = true;
                                        _a = v;
                                        return [4 /*yield*/, v.validationFunction(this)];
                                    case 1:
                                        _a.lastCheck = _b.sent();
                                        this._waiting = false;
                                        return [3 /*break*/, 3];
                                    case 2: throw new Error('Async validation function should return a Promise<boolan>');
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); }))];
                    case 1:
                        _a.sent();
                        this._updateErrors();
                        return [2 /*return*/];
                }
            });
        });
    };
    AbstractControl.prototype.initEdition = function () {
        if (!this.enabled || this.readonly) {
            return;
        }
        if (this.errors.length > 0) {
            this._editionContext = ControlEditionContext.HasErrors;
        }
        else if (this.pristine) {
            this._editionContext = ControlEditionContext.Pristine;
        }
        else {
            this._editionContext = ControlEditionContext.Dirty;
        }
        if (this._parent) {
            this._parent.initEdition();
        }
    };
    AbstractControl.prototype.endEdition = function () {
        if (!this.enabled || this.readonly) {
            return;
        }
        this._editionContext = ControlEditionContext.None;
        this._updateErrors();
        if (!this.pristine && !this._hasAnyControlsInError()) {
            this.validate();
            this.validateAsync();
        }
        if (this._parent) {
            this._parent.endEdition();
        }
    };
    AbstractControl.prototype._updateErrors = function () {
        this._errors = this.validators.filter(function (v) { return v.lastCheck === false; }).map(function (v) { return v.error; });
    };
    AbstractControl.prototype._hasAnyControlsInError = function () {
        return false;
    };
    return AbstractControl;
}());
export { AbstractControl };
//# sourceMappingURL=abstract-control.js.map