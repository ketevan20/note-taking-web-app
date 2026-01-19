import { useNavigate } from "react-router-dom";
import { useNotes } from "../../context/NotesContext"
import { archiveIcon, deleteIcon, restoreIcon } from "../../icons/Icons"
import GoBack from "../Buttons/GoBack"
import { useState } from "react";
import type { ModalType } from "../../types/Types";
import Modal from "../../modal/Modal";

type MobileHeaderControlProps = {
    isArchived: boolean;
    noteId: string;
    isNew: boolean;
}

const MobileHeaderControl = ({ isNew, isArchived, noteId }: MobileHeaderControlProps) => {
    const navigate = useNavigate();
    const { unarchiveNote } = useNotes();
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState<ModalType | null>(null);
    const [to, setTo ] = useState<number>(1);

    return (
        <div className="w-full flex justify-between items-center pb-4 border-b border-[rgba(224,228,234,1)] dark:border-[rgba(35,37,48,1)]">
            <GoBack />

            <div className="flex gap-4 items-center">
                {!isNew && <button type="button" onClick={() => { setModalType('delete'); setIsOpen(true); setTo(-1)}} className="w-4.5 h-4.5">{deleteIcon}</button>}
                {!isNew && <button type="button" onClick={() => { if (isArchived) {unarchiveNote(noteId); navigate(-1)} else { setModalType('archive'); setIsOpen(true); setTo(1) } }} className="w-4.5 h-4.5">{isArchived ? restoreIcon : archiveIcon}</button>}
                <button type="button" onClick={() => navigate(-1)}>Cancel</button>
                <button type="submit" className="text-[rgba(51,92,255,1)]">Save Note</button>
            </div>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                noteId={noteId}
                modalType={modalType}
                navigateTo={to}
            />
        </div>
    )
}

export default MobileHeaderControl