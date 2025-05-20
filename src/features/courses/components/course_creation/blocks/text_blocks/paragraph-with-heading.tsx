'use client'

import React from 'react'
import Heading from '@tiptap/extension-heading'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function HeadingWithParagraphBlock({
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
        heading: { levels: [1] },
      }),
      Heading.configure({ levels: [1] }),
    ],
    content: `
      <h1>${headingContent}</h1>
    
    `,
  })

    const paragraghEditor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1] },
      }),
      Heading.configure({ levels: [1] }),
    ],
    content: `
      <p>${paragraphContent}</p>
    `,
    
  })
  return editor ? (
    <div className="w-full space-y-2">
      <EditorContent editor={editor} />
      <EditorContent editor={paragraghEditor} />
    </div>   
  ) : null
}
