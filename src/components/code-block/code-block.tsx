"use client"
import {Highlight, themes} from "prism-react-renderer"
import * as React from "react"

import {Copy} from "@/components/copy"
import {clx} from "@/utils/clx"

export type CodeSnippet = {
    label: string
    language: string
    code: string
    hideLineNumbers?: boolean
}

type CodeBlockState = {
    snippets: CodeSnippet[]
    active: CodeSnippet
    setActive: (active: CodeSnippet) => void
} | null

const CodeBlockContext = React.createContext<CodeBlockState>(null)

const useCodeBlockContext = () => {
    const context = React.useContext(CodeBlockContext)

    if (context === null){
        throw new Error(
            "useCodeBlockContext can only be used within a CodeBlockContext"
        )
    }

    return context
}

interface RootProps extends React.HTMLAttributes<HTMLDivElement>{
    snippets: CodeSnippet[]
}

const Root = ({snippets, className, children, ...props}: RootProps) => {
    const [active, setActive] = React.useState(snippets[0])

    return (
        <CodeBlockContext.Provider value={{snippets, active, setActive}}>
            <div
                className={clx(
                    "border-neutral-700 overflow-hidden rounded-xl border",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        </CodeBlockContext.Provider>
    )
}

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement>{
    hideLabels?: boolean
}

const HeaderComponent = ({children, className, hideLabels = false, ...props}: HeaderProps) => {
    const {snippets, active, setActive} = useCodeBlockContext()
    return (
        <div
            className={clx(
                "bg-neutral-800 flex items-center gap-2 px-3 pt-3 pb-0 text-neutral-300",
                className
            )}
            {...props}
        >
            {!hideLabels &&
                snippets.map((snippet) => (
                    <div
                        className={clx(
                            "text-neutral-300 txt-compact-small-plus cursor-pointer rounded-full border border-transparent px-3 py-2 transition-all",
                            {
                                "text-neutral-300 border-neutral-700 bg-neutral-900 cursor-default": active.label === snippet.label,
                            }
                        )}
                        key={snippet.label}
                        onClick={() => setActive(snippet)}
                    >
                        {snippet.label}
                    </div>
                ))}
            {children}
        </div>
    )
}

const Meta = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={clx("text-ui-code-text-subtle ml-auto", className)}
            {...props}
        />
    )
}

const Header = Object.assign(HeaderComponent, {Meta})

const Body = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => {
    const {active} = useCodeBlockContext()
    return (
        <div className={clx("bg-neutral-800 p-2", className)}>
            <div className="bg-neutral-900 rounded-lg border border-neutral-700 relative p-4"{...props}>
                <Copy
                    content={active.code}
                    className="text-white absolute right-4 top-4"
                />
                <div className="max-w-[90%]">
                    <Highlight
                        theme={{
                            ...themes.palenight,
                            plain: {
                                color: "rgba(249, 250, 251, 1)",
                                backgroundColor: "#111827",
                            },
                            styles: [
                                {
                                    types: ["keyword"],
                                    style: {
                                        color: "var(--fg-on-color)",
                                    },
                                },
                                {
                                    types: ["maybe-class-name"],
                                    style: {
                                        color: "rgb(255, 203, 107)",
                                    },
                                },
                                ...themes.palenight.styles,
                            ],
                        }}
                        code={active.code}
                        language={active.language}
                    >
                        {({style, tokens, getLineProps, getTokenProps}) => (
                            <pre
                                className="txt-compact-small whitespace-pre-wrap bg-transparent font-mono"
                                style={{
                                    ...style,
                                    background: "transparent",
                                }}
                            >
                              {tokens.map((line, i) => (
                                  <div key={i} {...getLineProps({line})} className="flex">
                                      {!active.hideLineNumbers && (
                                          <span className="text-neutral-600 select-none">{i + 1}</span>
                                      )}
                                      <div className="pl-4">
                                          {line.map((token, key) => (
                                              <span key={key} {...getTokenProps({token})} />
                                          ))}
                                      </div>
                                  </div>
                              ))}
                            </pre>
                        )}
                    </Highlight>
                </div>
            </div>

        </div>
    )
}

const CodeBlock = Object.assign(Root, {Body, Header, Meta})

export {CodeBlock}
