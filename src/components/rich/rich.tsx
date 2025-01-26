import React, {useEffect, useRef, useState, createContext} from "react"
import {useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'
import {TextAlign} from '@tiptap/extension-text-align'
import {CharacterCount} from '@tiptap/extension-character-count'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Blockquote from '@tiptap/extension-blockquote'
import {Heading} from "@tiptap/extension-heading";

import {Popover} from "@/components/popover"
import {Button} from "@/components/button"
import {Separator} from "@/components/separator"
import {Select} from "@/components/select"
import {IconButton} from "@/components/icon-button"
import {
    AlignCenter,
    AlignRight,
    AlignLeft,
    Trash02,
    Italic01,
    Table as TableIcon,
    Code,
    ArrowCircleBrokenLeft,
    ArrowCircleBrokenRight,
    ArrowCircleBrokenUp,
    ArrowCircleBrokenDown,
    Strikethrough01,
    Bold01,
    ListBulleted,
    ListNumbered,
    LeftIndent01
} from "@netist/icons";
import {Editor} from "@tiptap/core";
import {clx} from "@/utils/clx";

interface EditorWithStorage extends Editor {
    storage: {
        characterCount: number;
        wordCount: number;
    }
}

type RichContext = {
    editor: EditorWithStorage | null
    setEditor: (editor: EditorWithStorage | null) => void
    config: RichConfig
    characterCount: number
    wordCount: number
}

interface ToolbarConfig {
    fonts?: {
        enabled?: boolean
        options?: string[]
    }
    bold?: boolean
    italic?: boolean
    strike?: boolean
    code?: boolean
    bulletList?: boolean
    orderedList?: boolean
    alignment?: boolean
    table?: boolean
}

interface EditorConfig {
    characterLimit?: number
    height?: {
        min?: string
        max?: string
    }
}

interface RichConfig {
    toolbar?: ToolbarConfig
    editor?: EditorConfig
}

const defaultConfig: RichConfig = {
    toolbar: {
        fonts: {
            enabled: true,
            options: ["Arial", "Verdana", "Tahoma", "Trebuchet MS", "Times New Roman", "Georgia", "Garamond", "Courier New", "Brush Script MT"]
        },
        bold: true,
        italic: true,
        strike: true,
        code: true,
        bulletList: true,
        orderedList: true,
        alignment: true,
        table: true
    },
    editor: {
        characterLimit: 5600,
        height: {
            min: '300px',
            max: '300px'
        }
    }
}

const RichContext = createContext<RichContext>({
    editor: null,
    setEditor: () => {
    },
    config: defaultConfig,
    characterCount: 0,
    wordCount: 0
})

const useRich = () => {
    const context = React.useContext(RichContext)
    if (!context) {
        throw new Error('useRich must be used within a RichProvider')
    }
    return context
}

interface RootProps {
    children: React.ReactNode
    config?: RichConfig,
    className?: string
}

const Root = ({children, config = defaultConfig, className}: RootProps) => {
    const [editor, setEditor] = useState<EditorWithStorage | null>(null)
    const [characterCount] = useState(0)
    const [wordCount] = useState(0)

    const mergedConfig = React.useMemo(() => {
        return {
            toolbar: {
                ...defaultConfig.toolbar,
                ...config?.toolbar,
            },
            editor: {
                ...defaultConfig.editor,
                ...config?.editor,
                height: {
                    ...defaultConfig.editor?.height,
                    ...config?.editor?.height
                }
            }
        }
    }, [config])

    const contextValue = React.useMemo(
        () => ({
            editor,
            setEditor,
            config: mergedConfig,
            characterCount,
            wordCount
        }),
        [editor, mergedConfig, characterCount, wordCount]
    )

    return (
        <div className={clx(
                "border border-input rounded-md overflow-hidden",
                className
            )}>
            <RichContext.Provider value={contextValue}>
                {children}
            </RichContext.Provider>
        </div>
    )
}

interface ContentProps {
    value?: string
    onChange?: (content: string) => void,
    className?: string
}

const Content = ({value = "", onChange = () => {}, className = ""}: ContentProps) => {
    const {setEditor, config} = useRich()

    const CustomTable = Table.configure({
        resizable: true,
        HTMLAttributes: {
            class: 'custom-table',
        },
    })

    const editor = useEditor({
        editorProps: {
            attributes: {
                class: `min-h-[200px] max-h-[400px] w-full bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto`
            }
        },
        extensions: [
            Blockquote,
            StarterKit.configure({
                heading: false
            }),
            TextStyle,
            FontFamily.configure({
                types: ['textStyle']
            }),
            Heading.configure({
                levels: [1, 2, 3, 4, 5, 6],
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph']
            }),
            CharacterCount.configure({
                limit: config.editor?.characterLimit || 5600,
                mode: 'textSize'
            }),
            ...(config.toolbar?.table ? [CustomTable, TableRow, TableHeader, TableCell] : []),
        ],
        content: value,
        onBeforeCreate({editor}) {
            setEditor(editor as EditorWithStorage)
        },
        onDestroy() {
            setEditor(null)
        },
        onUpdate: ({editor}) => {
            const typedEditor = editor as EditorWithStorage
            const text = typedEditor.state.doc.textContent
            const characterCount = text.length
            const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0

            typedEditor.storage.characterCount = characterCount
            typedEditor.storage.wordCount = wordCount
            setEditor(typedEditor)

            if (onChange) {
                onChange(editor.getHTML())
            }
        }
    })

    const cursorPositionRef = useRef<number | null>(null)

    useEffect(() => {
        if (editor) {
            const currentSelection = editor.state.selection
            cursorPositionRef.current = currentSelection ? currentSelection.$from.pos : null
            editor.commands.setContent(value)
        }
    }, [value, editor])

    useEffect(() => {
        if (editor && cursorPositionRef.current !== null) {
            editor.commands.setTextSelection(cursorPositionRef.current)
        }
    }, [editor, value])

    const inputHandle = () => {
        if (editor) {
            onChange(editor.getHTML())
        }
    }

    return (
        <div className={className}>
            {editor && <EditorContent editor={editor} onInput={inputHandle}/>}
        </div>
    )
}

const BottomBar = () => {
    const {editor} = useRich()
    const [stats, setStats] = useState({characters: 0, words: 0})

    useEffect(() => {
        const updateStats = () => {
            if (editor) {
                const text = editor.state.doc.textContent
                setStats({
                    characters: text.length,
                    words: text.trim() ? text.trim().split(/\s+/).length : 0
                })
            }
        }

        updateStats()

        editor?.on('update', updateStats)

        return () => {
            editor?.off('update', updateStats)
        }
    }, [editor])

    if (!editor) return null

    return (
        <div
            className="bg-transparent rounded-b-md p-2 flex flex-row items-center gap-1.5 text-xs text-muted-foreground">
            <span>{stats.words} kelime</span>
            <span>•</span>
            <span>{stats.characters} karakter</span>
        </div>
    )
}

const Toolbar = () => {
    const {editor, config} = useRich()
    const [selectedFont, setSelectedFont] = useState(config.toolbar?.fonts?.options?.[0] || 'Inter')
    const fonts = config.toolbar?.fonts?.options || ['Inter']

    useEffect(() => {
        if (editor) {
            editor.chain().setFontFamily(selectedFont).run()
        }
    }, [editor, selectedFont])

    if (!editor) return null

    return (
        <div>
            <div className="border-b border-b-input bg-transparent rounded-t-md p-2 flex flex-row items-center gap-1.5">
                {config.toolbar?.fonts?.enabled && (
                    <>
                        <Select value={selectedFont} onValueChange={val => {
                            setSelectedFont(val)
                            editor.chain().focus().setFontFamily(val).run()
                        }} size="small">
                            <Select.Trigger className="w-[200px]">
                                <Select.Value placeholder={selectedFont}/>
                            </Select.Trigger>
                            <Select.Content>
                                {fonts.map((font, index) => (
                                    <Select.Item key={index} value={font}>
                                        {font}
                                    </Select.Item>
                                ))}
                            </Select.Content>
                        </Select>
                        <Separator orientation="vertical" className="w-[1px] h-8"/>
                    </>
                )}

                {config.toolbar?.italic && (
                    <IconButton
                        variant={editor.isActive('italic') ? "primary" : "transparent"}
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                    >
                        <Italic01 className="h-4 w-4"/>
                    </IconButton>
                )}

                {config.toolbar?.bold && (
                    <IconButton
                        variant={editor.isActive('bold') ? "primary" : "transparent"}
                        onClick={() => editor.chain().focus().toggleBold().run()}
                    >
                        <Bold01 className="h-4 w-4"/>
                    </IconButton>
                )}

                {config.toolbar?.strike && (
                    <IconButton
                        variant={editor.isActive('strike') ? "primary" : "transparent"}
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                    >
                        <Strikethrough01 className="h-4 w-4"/>
                    </IconButton>
                )}

                {config.toolbar?.strike && (
                    <IconButton
                        variant={editor.isActive('blockquote') ? "primary" : "transparent"}
                        onClick={() => editor.commands.toggleBlockquote()}
                    >
                        <LeftIndent01 className="h-4 w-4"/>
                    </IconButton>
                )}

                {(config.toolbar?.bold || config.toolbar?.italic || config.toolbar?.strike) && (
                    <Separator orientation="vertical" className="w-[1px] h-8"/>
                )}

                {config.toolbar?.bulletList && (
                    <IconButton
                        variant={editor.isActive('bulletList') ? "primary" : "transparent"}
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                    >
                        <ListBulleted className="h-4 w-4"/>
                    </IconButton>
                )}

                {config.toolbar?.orderedList && (
                    <IconButton
                        variant={editor.isActive('orderedList') ? "primary" : "transparent"}
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    >
                        <ListNumbered className="h-4 w-4"/>
                    </IconButton>
                )}

                {(config.toolbar?.bulletList || config.toolbar?.orderedList) && (
                    <Separator orientation="vertical" className="w-[1px] h-8"/>
                )}

                {config.toolbar?.alignment && (
                    <>
                        <IconButton
                            className={editor.isActive({textAlign: 'left'}) ? 'bg-accent text-accent-foreground' : ''}
                            variant="transparent"
                            onClick={() => editor.commands.setTextAlign('left')}>
                            <AlignLeft className="h-4 w-4"/>
                        </IconButton>
                        <IconButton
                            className={editor.isActive({textAlign: 'center'}) ? 'bg-accent text-accent-foreground' : ''}
                            onClick={() => editor.commands.setTextAlign('center')}
                            variant="transparent">
                            <AlignCenter className="h-4 w-4"/>
                        </IconButton>
                        <IconButton
                            className={editor.isActive({textAlign: 'right'}) ? 'bg-accent text-accent-foreground' : ''}
                            onClick={() => editor.commands.setTextAlign('right')}
                            variant="transparent">
                            <AlignRight className="h-4 w-4"/>
                        </IconButton>
                        <Separator orientation="vertical" className="w-[1px] h-8"/>
                    </>
                )}

                {config.toolbar?.code && (
                    <>
                        <IconButton
                            className={editor.isActive('code') ? 'bg-accent text-accent-foreground' : ''}
                            onClick={() => editor.commands.toggleCode()}
                            variant="transparent">
                            <Code className="w-4 h-4"/>
                        </IconButton>
                        <Separator orientation="vertical" className="w-[1px] h-8"/>
                    </>
                )}

                {config.toolbar?.table && (
                    <Popover>
                        <Popover.Trigger asChild>
                            <IconButton
                                className={editor.isActive('table') ? 'bg-accent text-accent-foreground' : ''}
                                variant="transparent">
                                <TableIcon className="w-4 h-4"/>
                            </IconButton>
                        </Popover.Trigger>
                        <Popover.Content className="w-80 p-2.5">
                            <div className="grid grid-cols-2 gap-2">
                                <Button variant="secondary" className="w-full"
                                        onClick={() => editor.chain().focus().insertTable({
                                            rows: 3,
                                            cols: 3,
                                            withHeaderRow: true
                                        }).run()}>
                                    <TableIcon className="w-4 h-4 mr-2"/>
                                    Tablo Ekle
                                </Button>
                                <Button variant="secondary" className="w-full"
                                        onClick={() => editor.chain().focus().deleteTable().run()}>
                                    <Trash02 className="w-4 h-4 mr-2"/>
                                    Tabloyu Sil
                                </Button>
                                <Button variant="secondary" className="w-full"
                                        onClick={() => editor.chain().focus().addColumnBefore().run()}>
                                    <ArrowCircleBrokenLeft className="w-4 h-4 mr-2"/>
                                    Sütun Ekle
                                </Button>
                                <Button variant="secondary" className="w-full"
                                        onClick={() => editor.chain().focus().addColumnAfter().run()}>
                                    <ArrowCircleBrokenRight className="w-4 h-4 mr-2"/>
                                    Sütun Ekle
                                </Button>

                                <Button variant="secondary" className="w-full"
                                        onClick={() => editor.chain().focus().addRowBefore().run()}>
                                    <ArrowCircleBrokenUp className="w-4 h-4 mr-2"/>
                                    Satır Ekle
                                </Button>
                                <Button variant="secondary" className="w-full"
                                        onClick={() => editor.chain().focus().addRowAfter().run()}>
                                    <ArrowCircleBrokenDown className="w-4 h-4 mr-2"/>
                                    Satır Ekle
                                </Button>
                                <Button variant="secondary" className="w-full"
                                        onClick={() => editor.chain().focus().deleteColumn().run()}>
                                    <Trash02 className="w-4 h-4 mr-2"/>
                                    Sütunu Sil
                                </Button>
                                <Button variant="secondary" className="w-full"
                                        onClick={() => editor.chain().focus().deleteRow().run()}>
                                    <Trash02 className="w-4 h-4 mr-2"/>
                                    Satırı Sil
                                </Button>
                            </div>
                        </Popover.Content>
                    </Popover>
                )}
            </div>
        </div>
    )
}

const Rich = Object.assign(Root, {
    Content,
    Toolbar,
    BottomBar
})

export {Rich, type RichConfig, useRich}