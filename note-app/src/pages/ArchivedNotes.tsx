import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useNotes } from "../context/NotesContext";
import NoteList from "../components/NoteList/NoteList";
import NewNoteButton from "../components/Buttons/NewNoteButton";
import MobileNewNoteButton from "../components/Buttons/MobileNewNoteButton";

const ArchivedNotes = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { noteId } = useParams();
  const { notes } = useNotes();
  const navigate = useNavigate();

  const isNoteOpen = Boolean(noteId);

  return (
    <div className="w-full flex">
      {(!isMobile || !isNoteOpen) && (
        <div className="w-full xl:w-72.5 md:w-52 md:pr-5 md:py-4 md:border-r border-[rgba(224,228,234,1)] flex flex-col gap-4">
          {!isMobile && <NewNoteButton />}
          {isMobile && <MobileNewNoteButton />}
          {isMobile && <p>Archived Notes</p>}

          <p>All your archived notes are stored here. You can restore or delete them anytime.</p>

          { !notes.filter(note => note.archived).length ? <div className="p-2 bg-[rgba(243,245,248,1)] border border-[rgba(224,228,234,1)] rounded-lg">No notes have been archived yet. Move notes here for safekeeping, or <button onClick={() => navigate('/Untitled Note')} className="underline">create a new note.</button></div> : ''}

          <NoteList notes={notes.filter(note => note.archived)} />
        </div>
      )}

      {(!isMobile || isNoteOpen) && <Outlet />}
    </div>
  );
};

export default ArchivedNotes;
