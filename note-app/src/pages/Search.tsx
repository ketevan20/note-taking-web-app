import { Outlet, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useNotes } from "../context/NotesContext";
import NoteList from "../components/NoteList/NoteList";
import NewNoteButton from "../components/Buttons/NewNoteButton";
import MobileNewNoteButton from "../components/Buttons/MobileNewNoteButton";
import SearchBar from "../components/SearchBar/SearchBar";
import { useSearch } from "../context/SearchContext";

const Search = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { noteId } = useParams();
  const { notes } = useNotes();
  const { searchId } = useSearch();
  
  const isNoteOpen = Boolean(noteId);

  const notesToRender = searchId
    ? notes.filter(note =>
      note.title.toLowerCase().includes(searchId) ||
      note.tags.some(tag =>
        tag.name.toLowerCase().includes(searchId)
      )
    )
    : notes;

  return (
    <div className="w-full flex">
      {(!isMobile || !isNoteOpen) && (
        <div className="w-full xl:w-72.5 md:w-52 md:pr-5 md:py-4 md:border-r border-[rgba(224,228,234,1)] flex flex-col gap-4">
          {!isMobile && <NewNoteButton />}
          {isMobile && <MobileNewNoteButton />}

          <p className="md:hidden">Search</p>
          {isMobile && <SearchBar />}
          {searchId && <p className="md:hidden">All notes matching "{searchId}" are displayed below.</p>}


          <NoteList notes={notesToRender} />
        </div>
      )}

      {(isMobile || isNoteOpen) && <Outlet />}
    </div>
  );
};

export default Search;
