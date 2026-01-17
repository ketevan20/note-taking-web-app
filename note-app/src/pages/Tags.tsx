import { Outlet, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useNotes } from "../context/NotesContext";
import NoteList from "../components/NoteList/NoteList";
import NewNoteButton from "../components/Buttons/NewNoteButton";
import MobileNewNoteButton from "../components/Buttons/MobileNewNoteButton";
import GoBack from "../components/Buttons/GoBack";

const Tags = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { tagsId, noteId } = useParams();
  const { notes } = useNotes();

  const isTagOpen = Boolean(noteId);
  console.log(tagsId);
  console.log(noteId);

  return (
    <div className="w-full flex">
      {(!isMobile || !isTagOpen) && (
        <div className="w-full xl:w-72.5 md:w-52 md:pr-5 md:py-4 md:border-r border-[rgba(224,228,234,1)] flex flex-col gap-4">
          {!isMobile && <NewNoteButton />}
          {isMobile && <MobileNewNoteButton />}

          {isMobile && <GoBack />}

          {isMobile && <p>Notes Tagged: {tagsId}</p>}

          <p>All notes with the ”{tagsId}” tag are shown here.</p>

          <NoteList notes={notes.filter(note => tagsId && note.tags.some(tag => tag.name === tagsId))} />
        </div>
      )}

      {(!isMobile || isTagOpen) && <Outlet />}
    </div>
  );
};

export default Tags;
