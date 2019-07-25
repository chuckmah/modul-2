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
var FormGroup = /** @class */ (function (_super) {
    __extends(FormGroup, _super);
    function FormGroup(_controls, validators, options) {
        if (validators === void 0) { validators = []; }
        var _this = _super.call(this, validators, options) || this;
        _this._controls = _controls;
        _this.validators = validators;
        _this.setupControlsParent();
        return _this;
    }
    Object.defineProperty(FormGroup.prototype, "value", {
        /**
         * Return an agregate values of all enabled controls.
         */
        get: function () {
            var _this = this;
            var values = {};
            var enabledControls = Object.keys(this._controls)
                .filter(function (c) { return _this._controls[c].enabled; })
                .reduce(function (obj, key) {
                obj[key] = _this._controls[key];
                return obj;
            }, {});
            Object.keys(enabledControls).map(function (c) { return values[c] = enabledControls[c].value; });
            return values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroup.prototype, "valid", {
        get: function () {
            if (!this.enabled || this.readonly) {
                return true;
            }
            else {
                return (this.validators.every(function (v) { return !!v.lastCheck; })
                    &&
                        this.controls.every(function (c) { return c.valid; }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroup.prototype, "enabled", {
        get: function () {
            return this._enabled;
        },
        set: function (isEnabled) {
            this._enabled = isEnabled;
            this.controls.forEach(function (c) { return c.enabled = isEnabled; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroup.prototype, "waiting", {
        get: function () {
            return this._waiting;
        },
        set: function (isWaiting) {
            this._waiting = isWaiting;
            this.controls.forEach(function (c) { return c.waiting = isWaiting; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroup.prototype, "readonly", {
        get: function () {
            return this._readonly;
        },
        set: function (isReadonly) {
            this._readonly = isReadonly;
            this.controls.forEach(function (c) { return c.readonly = isReadonly; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroup.prototype, "touched", {
        get: function () {
            return this.controls.every(function (c) { return c.touched; });
        },
        enumerable: true,
        configurable: true
    });
    FormGroup.prototype.submit = function () {
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
    FormGroup.prototype.reset = function () {
        _super.prototype.reset.call(this);
        this.controls.forEach(function (c) { return c.reset(); });
    };
    FormGroup.prototype.endEdition = function () {
        if (!this.touched) {
            return;
        }
        _super.prototype.endEdition.call(this);
    };
    Object.defineProperty(FormGroup.prototype, "controls", {
        get: function () {
            return Object.values(this._controls);
        },
        enumerable: true,
        configurable: true
    });
    FormGroup.prototype.getControl = function (name) {
        if (this._controls[name] !== undefined) {
            return this._controls[name];
        }
        else {
            throw Error("There is no control with the name " + name + " in this group");
        }
    };
    FormGroup.prototype.addControl = function (name, control) {
        if (this._controls[name] !== undefined) {
            throw Error("There is already a control with name " + name + " in this group");
        }
        var result = Object.assign(this._controls);
        control.parent = this;
        result[name] = control;
        this._controls = result;
    };
    FormGroup.prototype.removeControl = function (name) {
        if (this._controls[name] === undefined) {
            throw Error("There is no control with name " + name + " in this group");
        }
        var result = Object.assign(this._controls);
        delete result[name];
        this._controls = result;
    };
    FormGroup.prototype.setupControlsParent = function () {
        var _this = this;
        this.controls.forEach(function (c) { return c.parent = _this; });
    };
    FormGroup.prototype._hasAnyControlsInError = function () {
        return this.controls.some(function (c) { return c.hasError(); });
    };
    return FormGroup;
}(AbstractControl));
export { FormGroup };
//# sourceMappingURL=form-group.js.map