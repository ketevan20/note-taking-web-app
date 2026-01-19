import { useNavigate } from "react-router-dom"
import { useNotes } from "../context/NotesContext"
import { archiveIcon, deleteIcon } from "../icons/Icons"
import type { ModalType } from "../types/Types"
import { motion } from "motion/react"

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    modalType: ModalType | null
    noteId: string
    navigateTo: number
}

const Modal = ({ isOpen, modalType, noteId, navigateTo, onClose }: ModalProps) => {
    const { deleteNote, archiveNote } = useNotes();
    const navigate = useNavigate();

    if (!isOpen) return null;

    const modalProps = modalType === "delete" ? {
        label: "Delete Note",
        text: "Are you sure you want to permanently delete this note? This action cannot be undone.",
        icon: deleteIcon,
        onConfirm: () => {
            deleteNote(noteId);
            navigateTo == 1 ? navigate('..') : navigate(-1);
        },
        color: 'rgba(251, 55, 72, 1)'
    } : {
        label: "Archive Note",
        text: "Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.",
        icon: archiveIcon,
        onConfirm: () => {
            archiveNote(noteId);
            navigateTo == 1 ? navigate('..') : navigate(-1);
        },
        color: 'rgba(51, 92, 255, 1)'
    }

    return (
        <div className="fixed inset-0 bg-[#0e121b3e] flex items-center justify-center z-50 dark:bg-[#0e121b8e]">
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 } }} className="w-110 max-w-[90%] border border-[rgba(224,228,234,1)] bg-white rounded-xl dark:bg-[rgba(43,48,59,1)] dark:border-[rgba(82,88,102,1)]">
                <div className="p-5 flex gap-4">
                    <div className="w-10 h-10 bg-[rgba(243,245,248,1)] rounded-lg flex items-center justify-center dark:bg-[rgba(82,88,102,1)]">
                        {modalProps.icon}
                    </div>

                    <div className="flex-1 flex flex-col gap-1.5">
                        <p className="font-semibold text-[16px] dark:text-[rgba(255,255,255,1)]">{modalProps.label}</p>
                        <p className="leading-[130%] text-[rgba(43,48,59,1)] dark:text-[rgba(224,228,234,1)]">{modalProps.text}</p>
                    </div>
                </div>

                <div className="w-full h-px bg-[rgba(224,228,234,1)] dark:bg-[rgba(82,88,102,1)]" />

                <div className="px-5 py-4 flex gap-4 justify-end">
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-[rgba(243,245,248,1)] px-4 py-3 rounded-lg dark:bg-[rgba(113,119,132,1)]">Cancel</button>

                    <button
                        type="button"
                        onClick={modalProps.onConfirm}
                        style={{ backgroundColor: modalProps.color }}
                        className="px-4 py-3 rounded-lg text-white"
                    >{modalProps.label}</button>

                </div>
            </motion.div>
        </div>
    )
}

export default Modal
