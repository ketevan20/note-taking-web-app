import { useNotes } from "../../context/NotesContext";
import { archiveIcon, deleteIcon } from "../../icons/Icons"
import Modal from "../../modal/Modal";
import { useState } from "react";
import type { ModalType } from "../../types/Types";
import { useNavigate } from "react-router-dom";

type MenuBarProps = {
    noteId: string;
    archived: boolean;
}

const MenuBar = ({ noteId, archived }: MenuBarProps) => {
    const { unarchiveNote } = useNotes();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState<ModalType | null>(null);


    return (
        <div className="w-full pl-4 py-4 flex flex-col gap-3 max-lg:pr-4 text-[rgba(14,18,27,1)] dark:text-[rgba(255,255,255,1)]">
            <button onClick={() => { if (archived) {unarchiveNote(noteId); navigate('..')} else { setModalType('archive'); setIsOpen(true) } }} className="w-full flex gap-2 items-center px-4 py-3 border border-[rgba(202,207,216,1)] rounded-lg cursor-pointer dark:border-[rgba(82,88,102,1)] hover:bg-[#f3f5f8ad] dark:hover:bg-[#2325305d] group"><span className="group-hover:text-[rgba(51,92,255,1)]">{archiveIcon}</span> {!archived ? 'Archive Note' : 'Restore Note'}</button>
            <button onClick={() => { setModalType('delete'); setIsOpen(true) } } className="w-full flex gap-2 items-center px-4 py-3 border border-[rgba(202,207,216,1)] rounded-lg cursor-pointer dark:border-[rgba(82,88,102,1)] hover:bg-[#f3f5f8ad] dark:hover:bg-[#2325305d] group"><span className="group-hover:text-[rgba(51,92,255,1)]">{deleteIcon}</span> Delete Note</button>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                noteId={noteId}
                modalType={modalType}
                navigateTo={1}
            />
        </div>
    )
}

export default MenuBar