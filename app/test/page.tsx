"use client";
import React, { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Heading from "@tiptap/extension-heading";
import Placeholder from "@tiptap/extension-placeholder";

export default function ProfessionalEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      Image,
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: "Start typing your content here…",
      }),
    ],
    // content: "",
    // content: `

    // `,
  });

  const [linkUrl, setLinkUrl] = useState("");

  if (!editor) return null;

  // Minimal function for inserting images by URL
  const handleAddImage = () => {
    const url = prompt("Enter image URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  // Minimal function for inserting links
  const handleSetLink = () => {
    if (!linkUrl) return;
    editor.chain().focus().extendMarkRange("link").setLink({ href: linkUrl }).run();
    setLinkUrl("");
  };

  // Heading selection
  const handleHeadingChange = (level: number) => {
    if (level === 0) {
      editor.chain().focus().setParagraph().run();
    } else {
      editor
        .chain()
        .focus()
        .toggleHeading({ level: level as 1 | 2 | 3 | 4 | 5 | 6 })
        .run();
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-4 bg-white border border-gray-200 rounded-md shadow-sm">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Professional Editor</h1>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive("bold")}>
          B
        </ToolbarButton>

        <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive("italic")}>
          I
        </ToolbarButton>

        <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive("underline")}>
          U
        </ToolbarButton>

        <ToolbarButton onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive("strike")}>
          S
        </ToolbarButton>

        {/* Heading dropdown */}
        <select
          onChange={(e) => handleHeadingChange(parseInt(e.target.value, 10))}
          className="border border-gray-300 px-2 py-1 rounded text-sm focus:outline-none"
        >
          <option value="0">Paragraph</option>
          <option value="1">H1</option>
          <option value="2">H2</option>
          <option value="3">H3</option>
          <option value="4">H4</option>
          <option value="5">H5</option>
          <option value="6">H6</option>
        </select>

        <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive("bulletList")}>
          • List
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive("orderedList")}>
          1. List
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive("blockquote")}>
          “ ”
        </ToolbarButton>

        {/* Alignment */}
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          active={editor.isActive({ textAlign: "left" })}
        >
          L
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          active={editor.isActive({ textAlign: "center" })}
        >
          C
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          active={editor.isActive({ textAlign: "right" })}
        >
          R
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          active={editor.isActive({ textAlign: "justify" })}
        >
          J
        </ToolbarButton>

        {/* Link */}
        <input
          type="text"
          placeholder="Link..."
          value={linkUrl}
          onChange={(e) => setLinkUrl(e.target.value)}
          className="border border-gray-300 px-2 py-1 rounded text-sm outline-none focus:outline-none w-24"
        />
        <button onClick={handleSetLink} className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 text-sm text-gray-600">
          Link
        </button>
        <ToolbarButton onClick={() => editor.chain().focus().unsetLink().run()} active={editor.isActive("link")}>
          Unlink
        </ToolbarButton>

        {/* Image */}
        <button onClick={handleAddImage} className="bg-orange-100 px-3 py-1 rounded hover:bg-orange-200 text-sm text-gray-600">
          Image
        </button>
      </div>

      {/* Editable Area (no outline, resizable) */}
      <div className="relative">
        <EditorContent
          editor={editor}
          //   placeholder="Hiii"
          //       placeholder={` <h2>Welcome to Your Blog Editor</h2>
          //   <p>Start writing your content here...</p>`}
          className="min-h-[200px] resize-y overflow-auto focus:outline-none outline p-3 border border-gray-200 rounded"
        />
      </div>

      {/* Save Button */}
      <div className="mt-4 text-right">
        <button
          onClick={() => console.log("Blog content:", editor.getHTML())}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full shadow hover:opacity-90 transition-all"
        >
          Save Blog
        </button>
      </div>
    </div>
  );
}

/**
 * Reusable toolbar button.
 * Changes style if 'active' is true.
 */
interface ToolbarButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
}

function ToolbarButton({ children, onClick, active }: ToolbarButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        active ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-700"
      } px-3 py-1 rounded hover:bg-gray-200 text-sm font-medium transition-colors duration-300`}
      style={{ minWidth: "36px", textAlign: "center" }}
    >
      {children}
    </button>
  );
}
