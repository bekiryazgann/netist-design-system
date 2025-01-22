import React, {useEffect, useRef, useState} from "react"
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'
import { TextAlign } from '@tiptap/extension-text-align'
import { CharacterCount } from '@tiptap/extension-character-count'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'

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
    ListNumbered
} from "@netist/icons";
import {Heading} from "@tiptap/extension-heading";

interface RootProps{
    value?: string
    onChange?: (content: string) => void,
    className?: string
}

const Root = ({ value = "", onChange = () => {}, className = "" }: RootProps) => {
    const CustomTable = Table.configure({
        resizable: true,
        HTMLAttributes: {
            class: 'custom-table',
        },
    });

    const editor = useEditor({
        editorProps: {
            attributes: {
                class: 'min-h-[300px] max-h-[300px] w-full border-x border-input bg-transparent px-3 py-2 border-t-0 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto'
            }
        },
        extensions: [
            Heading.configure({
                levels: [1, 2, 3],
                HTMLAttributes: {
                    class: 'text-lg',
                },
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph']
            }),
            CharacterCount.configure({
                limit: 5600,
                mode: 'textSize'
            }),
            TextStyle,
            FontFamily,
            StarterKit.configure({
                orderedList: {
                    HTMLAttributes: {
                        class: 'list-decimal pl-4'
                    }
                },
                bulletList: {
                    HTMLAttributes: {
                        class: 'list-disc pl-4'
                    }
                }
            }),
            CustomTable,
            TableRow,
            TableHeader,
            TableCell,
        ],
        content: value,
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
            {editor && <Toolbar editor={editor}/>}
            {editor && <EditorContent editor={editor} onInput={inputHandle} />}
            {editor && <BottomBar editor={editor} />}
        </div>
    )
}

const BottomBar = ({ editor }: { editor: any }) => {
    return (
        <div className="border border-zinc-200 rounded-b-md border-t-none text-sm px-2 flex items-center justify-between">
            <span>{editor.storage.characterCount.characters()} karakter</span>
            <span>{editor.storage.characterCount.words()} kelime</span>
        </div>
    )
}

const Toolbar = ({editor}: {editor: any}) => {
    const [selectedFont, setSelectedFont] = useState('Inter')
    const fonts = ['Inter', 'Comic Neue', 'PT Serif', 'Roboto Mono', 'Cedarville Cursive']

    useEffect(() => {
        editor.chain().setFontFamily(selectedFont).run()
    }, [editor, selectedFont])
    return (
        <div>
            <div className="border border-input bg-transparent rounded-t-md p-2 flex flex-row items-center gap-1.5">
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

                <Separator orientation="vertical" className="w-[1px] h-8" />
                <IconButton
                    variant={editor.isActive('italic') ? "primary" : "transparent"}
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                >
                    <Italic01 className="h-4 w-4" />
                </IconButton>

                <IconButton
                    variant={editor.isActive('bold') ? "primary" : "transparent"}
                    onClick={() => editor.chain().focus().toggleBold().run()}
                >
                    <Bold01 className="h-4 w-4" />
                </IconButton>

                <IconButton
                    variant={editor.isActive('strike') ? "primary" : "transparent"}
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                >
                    <Strikethrough01 className="h-4 w-4" />
                </IconButton>

                <Separator orientation="vertical" className="w-[1px] h-8" />
                <IconButton
                    variant={editor.isActive('bulletList') ? "primary" : "transparent"}
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                >
                    <ListBulleted className="h-4 w-4" />
                </IconButton>

                <IconButton
                    variant={editor.isActive('orderedList') ? "primary" : "transparent"}
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                >
                    <ListNumbered className="h-4 w-4" />
                </IconButton>
                <Separator orientation="vertical" className="w-[1px] h-8" />
                <IconButton className={editor.isActive({ textAlign: 'left' }) ? 'bg-accent text-accent-foreground' : ''}
                            variant="transparent"
                            onClick={() => editor.commands.setTextAlign('left')}>
                    <AlignLeft className="h-4 w-4" />
                </IconButton>
                <IconButton className={editor.isActive({ textAlign: 'center' }) ? 'bg-accent text-accent-foreground' : ''}
                            onClick={() => editor.commands.setTextAlign('center')}
                            variant="transparent">
                    <AlignCenter className="h-4 w-4" />
                </IconButton>
                <IconButton className={editor.isActive({ textAlign: 'right' }) ? 'bg-accent text-accent-foreground' : ''}
                            onClick={() => editor.commands.setTextAlign('right')}
                            variant="transparent">
                    <AlignRight className="h-4 w-4" />
                </IconButton>
                <Separator orientation="vertical" className="w-[1px] h-8" />
                <IconButton className={editor.isActive('code') ? 'bg-accent text-accent-foreground' : ''}
                            onClick={() => editor.commands.toggleCode()}
                            variant="transparent">
                    <Code className="w-4 h-4" />
                </IconButton>
                <Separator orientation="vertical" className="w-[1px] h-8" />
                <Popover>
                    <Popover.Trigger asChild>
                        <IconButton className={editor.isActive('table') ? 'bg-accent text-accent-foreground' : ''} variant="transparent">
                            <TableIcon className="w-4 h-4" />
                        </IconButton>
                    </Popover.Trigger>
                    <Popover.Content className="w-80 p-2.5">
                        <div className="grid grid-cols-2 gap-2">
                            <Button variant="secondary" className="w-full"
                                    onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}>
                                <TableIcon className="w-4 h-4 mr-2" />
                                Tablo Ekle
                            </Button>
                            <Button variant="secondary" className="w-full"
                                    onClick={() => editor.chain().focus().deleteTable().run()}>
                                <Trash02 className="w-4 h-4 mr-2" />
                                Tabloyu Sil
                            </Button>
                            <Button variant="secondary" className="w-full"
                                    onClick={() => editor.chain().focus().addColumnBefore().run()}>
                                <ArrowCircleBrokenLeft className="w-4 h-4 mr-2" />
                                Sütun Ekle
                            </Button>
                            <Button variant="secondary" className="w-full"
                                    onClick={() => editor.chain().focus().addColumnAfter().run()}>
                                <ArrowCircleBrokenRight className="w-4 h-4 mr-2" />
                                Sütun Ekle
                            </Button>

                            <Button variant="secondary" className="w-full"
                                    onClick={() => editor.chain().focus().addRowBefore().run()}>
                                <ArrowCircleBrokenUp className="w-4 h-4 mr-2" />
                                Satır Ekle
                            </Button>
                            <Button variant="secondary" className="w-full"
                                    onClick={() => editor.chain().focus().addRowAfter().run()}>
                                <ArrowCircleBrokenDown className="w-4 h-4 mr-2" />
                                Satır Ekle
                            </Button>
                            <Button variant="secondary" className="w-full"
                                    onClick={() => editor.chain().focus().deleteColumn().run()}>
                                <Trash02 className="w-4 h-4 mr-2" />
                                Sütunu Sil
                            </Button>
                            <Button variant="secondary" className="w-full"
                                    onClick={() => editor.chain().focus().deleteRow().run()}>
                                <Trash02 className="w-4 h-4 mr-2" />
                                Satırı Sil
                            </Button>
                        </div>
                    </Popover.Content>
                </Popover>
            </div>
        </div>
    )
}

const Rich = Object.assign(Root, {

})

export { Rich }