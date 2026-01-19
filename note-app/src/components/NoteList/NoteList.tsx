import { useLocation, useNavigate } from "react-router-dom";
import type { Note } from "../../types/Types"
import NoteItem from "../NoteItem/NoteItem"
import { useMediaQuery } from "react-responsive";

type NoteListProps = {
    notes: Note[] | null;
}

const NoteList = ({ notes }: NoteListProps) => {
    const location = useLocation();
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ maxWidth: 768 });
    
    return (
        <div className="flex flex-col gap-1">
            {!isMobile && location.pathname === '/notes/Untitled%20Note' && <div className="w-full bg-[rgba(243,245,248,1)] p-2 rounded-md text-[rgba(14,18,27,1)] dark:bg-[rgba(35,37,48,1)] dark:text-[rgba(255,255,255,1)]">Untitled Note</div>}
            {
                notes ? notes.map((note, index) =>
                    <>
                        <NoteItem to={`${note.id}`} key={note.id} title={note.title} tags={note.tags} date={new Date(note.createdAt)} />
                        <div className={`w-full h-px bg-[rgba(224,228,234,1)] ${index !== notes.length-1 ? "block" : "hidden"} dark:bg-[rgba(35,37,48,1)]`}></div>
                    </>
                ) : <div className="w-full bg-[rgba(243,245,248,1)] p-2 rounded-md text-[rgba(14,18,27,1)] text-[14px] leading-[130%] tracking-[-0.2px] dark:bg-[rgba(35,37,48,1)] dark:text-[rgba(255,255,255,1)]">No notes match your search. Try a different keyword or <button onClick={() => navigate(`/notes/${encodeURIComponent('Untitled Note')}`, { replace: true })} className="underline">create a new note.</button></div>
            }
        </div>
    )
}

export default NoteList