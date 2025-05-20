'use client'

import React from 'react'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function HeadingBlock({
  content,
  onChange,
}: {
  content: string
  onChange: (text: string) => void
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `<h1>${content}</h1>`,
    onUpdate({ editor }) {
      onChange(editor.getText())
    },
  })

  return editor ? (
    <div className="w-full">
      <EditorContent editor={editor} />
    </div>
  ) : null
}
