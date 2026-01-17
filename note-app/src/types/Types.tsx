export type Tag = {
    name: string;
}

export type Note = {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    tags: Tag[];
    archived: boolean;
}

export type NotesContextType = {
    notes: Note[];
    tags: Tag[];
    addNote: (note: Note) => void;
    deleteNote: (noteId: string) => void;
    updateNote: (updatedNote: Note) => void;
    archiveNote: (noteId: string) => void;
    unarchiveNote: (noteId: string) => void;
}