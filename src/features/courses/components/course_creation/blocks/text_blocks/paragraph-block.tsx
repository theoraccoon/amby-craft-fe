'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

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

  return editor ? (
    <div className="w-full">
      <EditorContent editor={editor} />
    </div>
  ) : null
}
