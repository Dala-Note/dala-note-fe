import "../components/styles/index.css";
import { useEditor, EditorContent, EditorContext } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import Heading from "@tiptap/extension-heading";
import TextAlign from "@tiptap/extension-text-align";
import Paragraph from "@tiptap/extension-paragraph";
import Document from "@tiptap/extension-document";
import { BulletList, OrderedList, ListItem } from "@tiptap/extension-list";
import { useMemo } from "react";
import EditorMenuBar from "./EditorMenuBar";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      Document,
      StarterKit.configure({
        // Disable the built-in list extensions to avoid conflicts
        bulletList: false,
        orderedList: false,
        listItem: false,
      }),
      // Add list extensions explicitly
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc ml-6",
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal ml-6",
        },
      }),
      ListItem,
      Highlight,
      Paragraph,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],
    content: "", // initial content
    editorProps: {
      attributes: {
        class:
          "min-h-[156px] border rounded-md bg-slate-50 py-2 px-3 prose prose-sm max-w-none focus:outline-none",
      },
    },
  });

  // Memoize the provider value to avoid unnecessary re-renders
  const providerValue = useMemo(() => ({ editor }), [editor]);

  return (
    <EditorContext.Provider value={providerValue}>
      <EditorMenuBar editor={editor} />
      <EditorContent editor={editor} />
    </EditorContext.Provider>
  );
};

export default Tiptap;
