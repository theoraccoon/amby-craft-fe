'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import React from 'react'

export default function HeadingWithParagraphBlock({
  headingContent,
  paragraphContent,
  onChange,
}: {
  headingContent: string
  paragraphContent: string
  onChange: (content: { heading: string; paragraph: string }) => void
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2] },
      }),
      Heading.configure({ levels: [2] }),
    ],
    content: `
      <h2>${headingContent}</h2>
      <p>${paragraphContent}</p>
    `,
    onUpdate({ editor }) {
      const json = editor.getJSON()
      const heading = json.content?.find(n => n.type === 'heading')?.content?.[0]?.text || ''
      const paragraph = json.content?.find(n => n.type === 'paragraph')?.content?.[0]?.text || ''
      onChange({ heading, paragraph })
    },
  })

  return editor ? (
    <div className="w-full space-y-2">
      <EditorContent editor={editor} />
    </div>
  ) : null
}
