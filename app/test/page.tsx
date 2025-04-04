"use client";

import React, { useState, useRef } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Heading from "@tiptap/extension-heading";

import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdStrikethroughS,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
  MdFormatAlignLeft,
  MdFormatAlignCenter,
  MdFormatAlignRight,
  MdFormatAlignJustify,
  MdInsertPhoto,
} from "react-icons/md";

interface ToolbarButtonProps {
  onClick: () => void;
  active?: boolean;
  icon: React.ReactNode;
}

function ToolbarButton({ onClick, active, icon }: ToolbarButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        active ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-700"
      } flex items-center justify-center w-8 h-8 rounded hover:bg-gray-200 text-sm font-medium transition-colors duration-300`}
      style={{ minWidth: "36px", textAlign: "center" }}
    >
      {icon}
    </button>
  );
}

export default function ProfessionalEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
      Image,
      Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({
        placeholder: "Start typing your content here…",
      }),
    ],
    content: "<p></p>",
    parseOptions: {
      preserveWhitespace: true, // or true, depending on your needs
    },
  });

  const [linkUrl, setLinkUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [read, setRead] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!editor) return null;

  // Handler for local image selection
  const handleLocalImageSelect = () => {
    fileInputRef.current?.click();
  };

  // Handler for uploading image file to your server
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      const formData = new FormData();
      formData.append("file", file);

      try {
        // Replace '/api/upload' with your actual upload endpoint
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Upload failed");
        }

        const data = await response.json();
        // Assume your API returns { url: "https://yourserver.com/path/to/image.jpg" }
        const imageUrl: string = data.url;
        editor.chain().focus().setImage({ src: imageUrl }).run();
      } catch (error) {
        console.error("Image upload error:", error);
      }
    }
  };

  const handleSetLink = () => {
    if (!linkUrl) return;
    editor.chain().focus().extendMarkRange("link").setLink({ href: linkUrl }).run();
    setLinkUrl("");
  };

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

  const saveBlogPost = async () => {
    let editorContent = editor.getHTML();

    // 🔹 Remove completely empty <p> tags or replace them with <br>
    editorContent = editorContent
      .replace(/<p>\s*<\/p>/g, "<br/>") // Removes empty <p> tags
      .replace(/<p>(&nbsp;|\s)*<\/p>/g, "<br/>"); // Removes <p> with only spaces or &nbsp;

    // console.log("Processed Content:", editorContent); // Debugging

    const blogData = {
      title,
      read,
      imageUrl: linkUrl,
      content: editorContent,
    };

    try {
      const response = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      });

      const result = await response.json();
      console.log("Blog post saved:", result);
    } catch (error) {
      console.error("Error saving blog post:", error);
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-4 bg-white border border-gray-200 rounded-md shadow-sm">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Professional Editor</h1>

      {/* Title Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 px-2 py-1 rounded w-full"
        />
      </div>

      {/* Read Time / Description Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter read time or description (e.g. '3 min read')"
          value={read}
          onChange={(e) => setRead(e.target.value)}
          className="border border-gray-300 px-2 py-1 rounded w-full"
        />
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive("bold")}
          icon={<MdFormatBold />}
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive("italic")}
          icon={<MdFormatItalic />}
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          active={editor.isActive("underline")}
          icon={<MdFormatUnderlined />}
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          active={editor.isActive("strike")}
          icon={<MdStrikethroughS />}
        />

        {/* Heading Dropdown */}
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

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive("bulletList")}
          icon={<MdFormatListBulleted />}
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive("orderedList")}
          icon={<MdFormatListNumbered />}
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          active={editor.isActive("blockquote")}
          icon={<MdFormatQuote />}
        />

        {/* Alignment */}
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          active={editor.isActive({ textAlign: "left" })}
          icon={<MdFormatAlignLeft />}
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          active={editor.isActive({ textAlign: "center" })}
          icon={<MdFormatAlignCenter />}
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          active={editor.isActive({ textAlign: "right" })}
          icon={<MdFormatAlignRight />}
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          active={editor.isActive({ textAlign: "justify" })}
          icon={<MdFormatAlignJustify />}
        />

        {/* Image Upload Button */}
        <ToolbarButton onClick={handleLocalImageSelect} icon={<MdInsertPhoto />} />
        {/* Hidden file input for local image upload */}
        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
      </div>

      {/* Image Link Input */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Please attach your image link here"
          value={linkUrl}
          onChange={(e) => setLinkUrl(e.target.value)}
          className="border border-gray-300 px-2 py-1 rounded text-sm outline-none focus:outline-none w-72 lg:w-96"
        />
      </div>

      {/* Editor Content */}
      <div className="relative">
        <EditorContent
          editor={editor}
          className="ProseMirror min-h-[200px] resize-y overflow-auto p-3 border border-gray-200 rounded focus:outline-none"
        />
      </div>

      {/* Save Button */}
      <div className="mt-4 text-right">
        <button
          onClick={saveBlogPost}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full shadow hover:opacity-90 transition-all"
        >
          Save Blog
        </button>
      </div>
    </div>
  );
}
