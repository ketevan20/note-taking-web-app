import { useNavigate } from "react-router-dom";
import { useNotes } from "../../context/NotesContext";
import { archiveIcon, deleteIcon } from "../../icons/Icons"

type MenuBarProps = {
    noteId: string;
    archived: boolean;
}

const MenuBar = ({ noteId, archived }: MenuBarProps) => {
    const navigate = useNavigate();
    const { deleteNote, archiveNote, unarchiveNote } = useNotes();

    return (
        <div className="w-full pl-4 py-4 flex flex-col gap-3 max-lg:pr-4 text-[rgba(14,18,27,1)] dark:text-[rgba(255,255,255,1)]">
            <button onClick={() => {archived ? unarchiveNote(noteId) : archiveNote(noteId); navigate("..")}} className="w-full flex gap-2 items-center px-4 py-3 border border-[rgba(202,207,216,1)] rounded-lg cursor-pointer dark:border-[rgba(82,88,102,1)]">{archiveIcon} {!archived ? 'Archive Note' : 'Restore Note'}</button>
            <button onClick={() => { deleteNote(noteId); navigate("..") }} className="w-full flex gap-2 items-center px-4 py-3 border border-[rgba(202,207,216,1)] rounded-lg cursor-pointer dark:border-[rgba(82,88,102,1)]">{deleteIcon} Delete Note</button>
        </div>
    )
}

export default MenuBar