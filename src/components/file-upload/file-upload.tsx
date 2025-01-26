import * as React from "react"
import {clx} from "@/utils/clx";
import {Download01} from "@netist/icons"
import {useState} from "react";

interface RootProps extends React.HTMLProps<HTMLDivElement> {
    disabled?: boolean
}

interface TriggerProps extends React.InputHTMLAttributes<HTMLInputElement> {}
interface FileProps extends React.HTMLProps<HTMLDivElement> {

}

interface FileUploadContext {
    disabled: boolean
}

const FileUploadContext = React.createContext<FileUploadContext>({
    disabled: false
})

const useFileUpload = () => {
    const context = React.useContext(FileUploadContext)
    if (!context) {
        throw new Error("useFileUpload must be used within FileUploadProvider")
    }
    return context
}

const Root = ({className, disabled = false, ...props}: RootProps) => {
    const [disabledState, setDisabledState] = useState<boolean>(disabled)

    const contextValue = React.useMemo(
        () => ({
            disabled: disabledState,
            setDisabled: setDisabledState
        }),
        [disabledState]
    )

    return (
        <FileUploadContext.Provider value={contextValue}>
            <div {...props}
                 className={clx(
                     "",
                     className
                 )}
            />
        </FileUploadContext.Provider>
    )
}

const Trigger = ({className, ...props}: TriggerProps) => {
    const {disabled} = useFileUpload()

    return (
        <label className={clx(
            "p-8 border border-dashed border-ui-border-strong bg-white block rounded-lg",
            "hover:border-ui-border-interactive transition duration-250 cursor-pointer",
            "focus:border-solid focus:border-ui-border-interactive focus:shadow-borders-focus",
            className,
            {
                "pointer-events-none": disabled
            }
        )}>
            <input type="file" {...props} className="hidden"/>
            <div className="flex flex-col items-center justify-center gap-2 select-none">
                <div className={clx(
                    "flex items-center gap-2 text-ui-fg-subtle", {
                        "text-ui-fg-disabled": disabled
                    })}>
                    <Download01/>
                    <span className="txt-compact-small-plus"> Import Files </span>
                </div>
                <p className={clx("text-ui-fg-muted", {"text-ui-fg-disabled": disabled})}>
                    Drag and drop files here or click to upload
                </p>
            </div>
        </label>
    )
}

const File = ({className, ...props}: FileProps) => {
    return (
        <div {...props}
             className={clx(
                 "px-3 py-2 flex items-center gap-3",
                 className
             )}>

        </div>
    )
}

const FileUpload = Object.assign(Root, {
    Trigger,
    File
})

export {FileUpload}