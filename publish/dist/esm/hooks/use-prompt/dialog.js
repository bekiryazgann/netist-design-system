"use client";
import * as React from "react";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import { Prompt } from "../../components/prompt";
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
    return (React.createElement(Prompt, { open: open },
        React.createElement(Prompt.Content, null,
            React.createElement("form", { onSubmit: handleFormSubmit },
                React.createElement(Prompt.Header, null,
                    React.createElement(Prompt.Title, null, title),
                    React.createElement(Prompt.Description, null, description)),
                verificationText && (React.createElement("div", { className: "border-ui-border-base mt-6 flex flex-col gap-y-4 border-y p-6" },
                    React.createElement(Label, { htmlFor: "verificationText", className: "text-ui-fg-subtle" },
                        "Please type",
                        " ",
                        React.createElement("span", { className: "text-ui-fg-base txt-compact-medium-plus" }, verificationText),
                        " ",
                        "to confirm."),
                    React.createElement(Input, { autoFocus: true, autoComplete: "off", id: "verificationText", placeholder: verificationText, onChange: handleUserInput }))),
                React.createElement(Prompt.Footer, null,
                    React.createElement(Prompt.Cancel, { onClick: onCancel }, cancelText),
                    React.createElement(Prompt.Action, { disabled: !validInput, type: verificationText ? "submit" : "button", onClick: verificationText ? undefined : onConfirm }, confirmText))))));
};
export default Dialog;
//# sourceMappingURL=dialog.js.map