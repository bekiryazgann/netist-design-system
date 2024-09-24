import { DialogProps } from "./dialog";
type PromptProps = Omit<DialogProps, "onConfirm" | "onCancel" | "open">;
declare const usePrompt: () => (props: PromptProps) => Promise<boolean>;
export { usePrompt };
