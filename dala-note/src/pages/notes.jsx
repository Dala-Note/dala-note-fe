import Header from "../components/header";
import NotesSection from "../components/notesection";
import Tiptap from "../components/tiptapeditor";

const Notes = () => {
  return (
    <div className="flex flex-col  gap-4 pt-4 min-h-full">
      <Header />
      <div className="w-full px-10">
      <Tiptap />
      </div>
    </div>
  );
};

export default Notes;