'use client'

import React from 'react'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function ParagraphBlock({
  content,
  onChange,
}: {
  content: string
  onChange: (text: string) => void
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `<p>${content}</p>`,
    onUpdate({ editor }) {
      onChange(editor.getText())
    },
  })

  console.log(content, 'jdj')

  return editor ? (
    <div className="w-full  ">
      <EditorContent editor={editor} />
    </div>
  ) : null
}
