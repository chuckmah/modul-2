export var FormActions;
(function (FormActions) {
    FormActions[FormActions["None"] = 1] = "None";
    FormActions[FormActions["InvalidSubmit"] = 2] = "InvalidSubmit";
    FormActions[FormActions["ValidSubmit"] = 4] = "ValidSubmit";
    FormActions[FormActions["Reset"] = 16] = "Reset";
    FormActions[FormActions["Created"] = 256] = "Created";
    FormActions[FormActions["Updated"] = 65536] = "Updated";
    FormActions[FormActions["Destroyed"] = 1] = "Destroyed";
    FormActions[FormActions["ValidSubmitOrReset"] = 20] = "ValidSubmitOrReset";
    FormActions[FormActions["ValidSubmitOrResetOrDestroyed"] = 21] = "ValidSubmitOrResetOrDestroyed";
})(FormActions || (FormActions = {}));
//# sourceMappingURL=form-action-type.js.map