'use client'

import React from 'react'

import Heading from '@tiptap/extension-heading'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function ParagraphWithSubheadinghBlock({
  headingContent,
  paragraphContent,
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
    `,
  })

  console.log(editor?.getJSON(), 'djhdbs')
  const paragraphEditor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2] },
      }),
      Heading.configure({ levels: [2] }),
    ],
    content: `
      <p>${paragraphContent}</p>
    `,
  })
  return editor ? (
    <section className="w-full space-y-2">
      <EditorContent editor={editor} />
      <EditorContent editor={paragraphEditor} />
    </section>
  ) : null
}
