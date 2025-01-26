import * as React from "react"
import {clx} from "@/utils/clx";
import {InfoCircle, XCircle, CheckCircle, AlertCircle, X, ChevronRight} from "@netist/icons"
import {IconButton, IconButtonProps} from "@/components/icon-button";

interface RootProps extends React.HTMLProps<HTMLDivElement> {}
interface HeaderProps extends React.HTMLProps<HTMLDivElement> {}
interface TitleProps extends React.HTMLProps<HTMLDivElement> {}
interface IconRootProps extends React.HTMLProps<HTMLDivElement> {}
interface ContentProps extends React.HTMLProps<HTMLDivElement> {}
interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
    icon?: boolean
}
interface LinkContainerProps extends React.HTMLProps<HTMLDivElement> {}

const Root = ({className, ...props}: RootProps) => {
    return (
        <div {...props}
             className={clx(
                 "bg-ui-bg-component border border-ui-border-base rounded-lg p-3 flex items-start gap-2",
                 className
             )}
        />
    )
}

const Header = ({className, ...props}: HeaderProps) => {
    return (
        <div {...props}
             className={clx(
                 "w-full",
                 className
             )}
        />
    )
}

const Title = ({className, ...props}: TitleProps) => {
    return (
        <div {...props}
             className={clx(
                 "flex items-center justify-between gap-3 text-ui-fg-base",
                 className
             )}
        />
    )
}

const Description = ({className, ...props}: TitleProps) => {
    return (
        <div {...props}
             className={clx(
                 "text-ui-fg-subtle",
                 className
             )}
        />
    )
}

const Content = ({className, ...props}: ContentProps) => {
    return (
        <div {...props}
             className={clx(
                 "flex flex-col gap-1",
                 className
             )}
        />
    )
}

const Close = ({className, children, ...props}: IconButtonProps) => {
    return (
        <IconButton {...props}
                    size="small"
                    className={clx(
                        "",
                        className
                    )}
                    variant="transparent">
            {children ?? <X />}
        </IconButton>
    )
}

const IconRoot = ({className, ...props}: IconRootProps) => {
    return (
        <div {...props}
             className={clx(
                 "pt-1",
                 className
             )}
        />
    )
}

const LinkRoot = ({children, icon, className, ...props}: LinkProps) => {
    return (
        <a {...props}
           className={clx(
               "hover:underline text-black flex items-center gap-1 group",
               className
           )}
        >
            {children}
            {icon && <ChevronRight className="group-hover:translate-x-0.5 transition duration-300" />}
        </a>
    )
}

const LinkContainer = ({className, ...props}: LinkContainerProps) => {
    return (
        <div {...props}
             className={clx(
                 "flex items-center gap-3",
                 className
             )}
        />
    )
}

const Alert = Object.assign(Root, {
    Header,
    Title,
    Description,
    Content,
    Close,
    Link: Object.assign(LinkRoot, {
        Container: LinkContainer
    }),
    Icon: Object.assign(IconRoot, {
        Info: InfoCircle,
        Error: XCircle,
        Warning: AlertCircle,
        Success: CheckCircle
    })
})

export {Alert}