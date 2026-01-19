import { archiveIcon, deleteIcon } from "../icons/Icons";
import { useNotes } from "../context/NotesContext";

type ModalType = "delete" | "archive";

type GetModalPropsArgs = {
    modalType: ModalType;
    noteId: string;
};

export const getNoteModalProps = ({
    modalType,
    noteId,
}: GetModalPropsArgs) => {
    const { deleteNote, archiveNote } = useNotes();

    if (modalType === "delete") {
        return {
            label: "Delete Note",
            text:
                "Are you sure you want to permanently delete this note? This action cannot be undone.",
            icon: deleteIcon,
            onConfirm: () => {
                deleteNote(noteId);
            },
        };
    }

    return {
        label: "Archive Note",
        text: "Do you want to restore this note?",
        icon: archiveIcon,
        onConfirm: () => {
            archiveNote(noteId);
        },
    };
};
