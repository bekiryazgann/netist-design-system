"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const input_1 = require("../../components/input");
const label_1 = require("../../components/label");
const prompt_1 = require("../../components/prompt");
const Dialog = ({ open, title, description, verificationText, cancelText = "Cancel", confirmText = "Confirm", onConfirm, onCancel, }) => {
    const [userInput, setUserInput] = React.useState("");
    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    };
    const validInput = React.useMemo(() => {
        if (!verificationText) {
            return true;
        }
        return userInput === verificationText;
    }, [userInput, verificationText]);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!verificationText) {
            return;
        }
        if (validInput) {
            onConfirm();
        }
    };
    React.useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape" && open) {
                onCancel();
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [onCancel, open]);
    return (React.createElement(prompt_1.Prompt, { open: open },
        React.createElement(prompt_1.Prompt.Content, null,
            React.createElement("form", { onSubmit: handleFormSubmit },
                React.createElement(prompt_1.Prompt.Header, null,
                    React.createElement(prompt_1.Prompt.Title, null, title),
                    React.createElement(prompt_1.Prompt.Description, null, description)),
                verificationText && (React.createElement("div", { className: "border-ui-border-base mt-6 flex flex-col gap-y-4 border-y p-6" },
                    React.createElement(label_1.Label, { htmlFor: "verificationText", className: "text-ui-fg-subtle" },
                        "Please type",
                        " ",
                        React.createElement("span", { className: "text-ui-fg-base txt-compact-medium-plus" }, verificationText),
                        " ",
                        "to confirm."),
                    React.createElement(input_1.Input, { autoFocus: true, autoComplete: "off", id: "verificationText", placeholder: verificationText, onChange: handleUserInput }))),
                React.createElement(prompt_1.Prompt.Footer, null,
                    React.createElement(prompt_1.Prompt.Cancel, { onClick: onCancel }, cancelText),
                    React.createElement(prompt_1.Prompt.Action, { disabled: !validInput, type: verificationText ? "submit" : "button", onClick: verificationText ? undefined : onConfirm }, confirmText))))));
};
exports.default = Dialog;
//# sourceMappingURL=dialog.js.map