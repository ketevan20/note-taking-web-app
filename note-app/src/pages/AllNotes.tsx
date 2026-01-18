import { Outlet, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useNotes } from "../context/NotesContext";
import NoteList from "../components/NoteList/NoteList";
import NewNoteButton from "../components/Buttons/NewNoteButton";
import MobileNewNoteButton from "../components/Buttons/MobileNewNoteButton";

const AllNotes = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { noteId } = useParams();
  const { notes } = useNotes();

  const isNoteOpen = Boolean(noteId);

  return (
    <div className="w-full flex">
      {(!isMobile || !isNoteOpen) && (
        <div className="w-full xl:w-72.5 md:w-52 md:pr-5 md:py-4 md:border-r border-[rgba(224,228,234,1)] flex flex-col gap-4 dark:border-[rgba(35,37,48,1)]">
          {!isMobile && <NewNoteButton />}
          {isMobile && <MobileNewNoteButton />}

          <p className="md:hidden font-bold text-[24px] leading-[120%] dark:text-[rgba(255,255,255,1)]">All Notes</p>

          {!notes.filter(note => !note.archived).length ? <div className="p-2 bg-[rgba(243,245,248,1)] border border-[rgba(224,228,234,1)] rounded-lg dark:bg-[rgba(35,37,48,1)] dark:border-[rgba(43,48,59,1)] dark:text-[rgba(255,255,255,1)]">You don’t have any notes yet. Start a new note to capture your thoughts and ideas.</div> : ''}

          <NoteList notes={notes.filter(note => !note.archived)} />
        </div>
      )}

      {(isMobile || isNoteOpen) && <Outlet />}
    </div>
  );
};

export default AllNotes;
