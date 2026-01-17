import { useLocation } from "react-router-dom";
import type { Note } from "../../types/Types"
import NoteItem from "../NoteItem/NoteItem"
import { useMediaQuery } from "react-responsive";

type NoteListProps = {
    notes: Note[];
}

const NoteList = ({ notes }: NoteListProps) => {
    const location = useLocation();
    const isMobile = useMediaQuery({ maxWidth: 768 });

    console.log(location.pathname === 'Untitled Note');

    return (
        <div className="flex flex-col gap-1">
            {!isMobile && location.pathname === '/Untitled%20Note' && <div className="w-full bg-[rgba(243,245,248,1)] p-2 rounded-md">Untitled Note</div>}
            {
                notes.map((note, index) =>
                    <>
                        <NoteItem to={`${note.id}`} key={note.id} title={note.title} tags={note.tags} date={new Date(note.createdAt)} />
                        <div className={`w-full h-px bg-[rgba(224,228,234,1)] ${index !== notes.length-1 ? "block" : "hidden"}`}></div>
                    </>
                )
            }
        </div>
    )
}

export default NoteList