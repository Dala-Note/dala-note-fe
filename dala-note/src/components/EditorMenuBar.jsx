import "../components/styles/index.css";
import { LuHeading1, LuHeading2, LuHeading3 } from "react-icons/lu";
import {
  FaParagraph,
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaHighlighter,
} from "react-icons/fa";
import {
  CiTextAlignLeft,
  CiTextAlignCenter,
  CiTextAlignRight,
  CiTextAlignJustify,
} from "react-icons/ci";
import { GoListOrdered, GoListUnordered } from "react-icons/go";
import MenuButton from "./MenuButton";

export default function EditorMenuBar({ editor }) {
  if (!editor) {
    return null;
  }

  const menuItems = [
    {
      icon: <LuHeading1 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: editor.isActive("heading", { level: 1 }),
      title: "Heading 1",
    },
    {
      icon: <LuHeading2 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: editor.isActive("heading", { level: 2 }),
      title: "Heading 2",
    },
    {
      icon: <LuHeading3 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: editor.isActive("heading", { level: 3 }),
      title: "Heading 3",
    },
    {
      icon: <FaParagraph className="size-4" />,
      onClick: () => editor.chain().focus().setParagraph().run(),
      isActive: editor.isActive("paragraph"),
      title: "Paragraph",
    },
    {
      icon: <FaBold className="size-4" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("bold"),
      title: "Bold",
    },
    {
      icon: <FaItalic className="size-4" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive("italic"),
      title: "Italic",
    },
    {
      icon: <FaStrikethrough className="size-4" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive("strike"),
      title: "Strikethrough",
    },
    {
      icon: <FaHighlighter className="size-4" />,
      onClick: () => editor.chain().focus().toggleHighlight().run(),
      isActive: editor.isActive("highlight"),
      title: "Highlight",
    },
    {
      icon: <CiTextAlignLeft className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      isActive: editor.isActive({ textAlign: "left" }),
      title: "Align Left",
    },
    {
      icon: <CiTextAlignCenter className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      isActive: editor.isActive({ textAlign: "center" }),
      title: "Align Center",
    },
    {
      icon: <CiTextAlignRight className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      isActive: editor.isActive({ textAlign: "right" }),
      title: "Align Right",
    },
    {
      icon: <CiTextAlignJustify className="size-4" />,
      onClick: () => editor.chain().focus().setTextAlign("justify").run(),
      isActive: editor.isActive({ textAlign: "justify" }),
      title: "Justify",
    },
    {
      icon: <GoListUnordered className="size-4" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive("bulletList"),
      title: "Bullet List",
    },
    {
      icon: <GoListOrdered className="size-4" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive("orderedList"),
      title: "Ordered List",
    },
  ];

  return (
    <div className="control-group border-b pb-3 mb-3">
      <div className="flex flex-wrap gap-2">
        {menuItems.map((item, index) => (
          <MenuButton
            key={index}
            onClick={item.onClick}
            isActive={item.isActive}
            title={item.title}
          >
            {item.icon}
          </MenuButton>
        ))}
      </div>
    </div>
  );
}