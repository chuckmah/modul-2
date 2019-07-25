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
var FormArray = /** @class */ (function (_super) {
    __extends(FormArray, _super);
    function FormArray(_controls, validators, options) {
        if (_controls === void 0) { _controls = []; }
        if (validators === void 0) { validators = []; }
        var _this = _super.call(this, validators, options) || this;
        _this._controls = _controls;
        _this.validators = validators;
        _this.setupControlsParent();
        return _this;
    }
    FormArray.prototype.setupControlsParent = function () {
        var _this = this;
        this.controls.forEach(function (c) { return c.parent = _this; });
    };
    Object.defineProperty(FormArray.prototype, "value", {
        /**
         * Return an agregate values of all enabled controls.
         */
        get: function () {
            return this._controls.filter(function (c) { return c.enabled; }).map(function (c) { return c.value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArray.prototype, "valid", {
        get: function () {
            if (!this.enabled || this.readonly) {
                return true;
            }
            else {
                return (this.validators.every(function (v) { return !!v.lastCheck; })
                    &&
                        this._controls.every(function (c) { return c.valid; }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArray.prototype, "enabled", {
        get: function () {
            return this._enabled;
        },
        set: function (isEnabled) {
            this._enabled = isEnabled;
            this._controls.forEach(function (c) { return c.enabled = isEnabled; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArray.prototype, "waiting", {
        get: function () {
            return this._waiting;
        },
        set: function (isWaiting) {
            this._waiting = isWaiting;
            this._controls.forEach(function (c) { return c.waiting = isWaiting; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArray.prototype, "readonly", {
        get: function () {
            return this._readonly;
        },
        set: function (isReadonly) {
            this._readonly = isReadonly;
            this._controls.forEach(function (c) { return c.readonly = isReadonly; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArray.prototype, "touched", {
        get: function () {
            return this.controls.every(function (c) { return c.touched; });
        },
        enumerable: true,
        configurable: true
    });
    FormArray.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(this.controls.map(function (c) { return c.submit(); }))];
                    case 1:
                        _a.sent();
                        if (!!this._hasAnyControlsInError()) return [3 /*break*/, 3];
                        this.validate();
                        return [4 /*yield*/, this.validateAsync()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FormArray.prototype.reset = function () {
        _super.prototype.reset.call(this);
        this._controls.forEach(function (c) { return c.reset(); });
    };
    FormArray.prototype.initEdition = function () {
        _super.prototype.initEdition.call(this);
    };
    FormArray.prototype.endEdition = function () {
        if (!this.touched) {
            return;
        }
        _super.prototype.endEdition.call(this);
    };
    Object.defineProperty(FormArray.prototype, "controls", {
        get: function () {
            return this._controls;
        },
        enumerable: true,
        configurable: true
    });
    FormArray.prototype.addControl = function (control) {
        control.parent = this;
        this._controls = this._controls.concat(control);
    };
    FormArray.prototype.removeControl = function (index) {
        if (this._controls[index] !== undefined) {
            this._controls.splice(index, 1);
        }
        else {
            throw Error("There is no control with index= " + index + " in this array");
        }
    };
    FormArray.prototype._hasAnyControlsInError = function () {
        return this.controls.some(function (c) { return c.hasError(); });
    };
    return FormArray;
}(AbstractControl));
export { FormArray };
//# sourceMappingURL=form-array.js.map