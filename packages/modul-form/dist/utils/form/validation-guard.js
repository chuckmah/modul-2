import { ControlEditionContext } from './control-edition-context';
import { ControlValidatorValidationType } from './control-validator-validation-type';
export var DefaultValidationGuard = function (editionContext, validationType) {
    var guard = new Map([
        [
            ControlEditionContext.Pristine, [
                ControlValidatorValidationType.None,
                ControlValidatorValidationType.AtExit,
                ControlValidatorValidationType.Correction,
                ControlValidatorValidationType.Modification
            ]
        ],
        [
            ControlEditionContext.Dirty, [
                ControlValidatorValidationType.None,
                ControlValidatorValidationType.AtExit,
                ControlValidatorValidationType.Correction
            ]
        ],
        [
            ControlEditionContext.HasErrors, [
                ControlValidatorValidationType.None,
                ControlValidatorValidationType.AtExit
            ]
        ],
        [
            ControlEditionContext.None, []
        ]
    ]);
    return guard.get(editionContext).includes(validationType);
};
//# sourceMappingURL=validation-guard.js.map