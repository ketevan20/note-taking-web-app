import { createContext, useContext, useEffect, useReducer } from "react";
import type { Note, NotesContextType, Tag } from "../types/Types";

const notesContext = createContext<NotesContextType | null>(null);

export const useNotes = () => {
    const context = useContext(notesContext);
    if (!context) {
        throw new Error("useNotes must be used within a NotesProvider");
    }
    return context;
};

const initialValues = () => {
    const storedNotes = localStorage.getItem("notes");
    const notes: Note[] = storedNotes ? JSON.parse(storedNotes) : [];

    notes.sort(
        (a, b) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
    );

    return { notes };
};

type State = {
    notes: Note[];
};

type Action =
    | { type: "addNote"; note: Note }
    | { type: "updateNote"; note: Note }
    | { type: "deleteNote"; noteId: string }
    | { type: "archiveNote"; noteId: string }
    | { type: "unarchiveNote"; noteId: string }
    | { type: "replaceNotes"; notes: Note[] };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "addNote":
            return { ...state, notes: [action.note, ...state.notes] };

        case "updateNote":
            return { ...state, notes: state.notes.map(note => note.id === action.note.id ? action.note : note) };

        case "deleteNote":
            return {...state, notes: state.notes.filter(note => note.id !== action.noteId) };

        case "archiveNote":
            return { ...state, notes: state.notes.map(note => note.id === action.noteId ? { ...note, archived: true } : note ) };

        case "unarchiveNote":
            return { ...state, notes: state.notes.map(note => note.id === action.noteId ? { ...note, archived: false } : note ) };

        case "replaceNotes":
            return { ...state, notes: action.notes };

        default:
            return state;
    }
}


export const NotesProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [state, dispatch] = useReducer(reducer, undefined, initialValues);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(state.notes));
    }, [state.notes]);

    const addNote = (note: Note) =>
        dispatch({ type: "addNote", note });

    const updateNote = (note: Note) =>
        dispatch({ type: "updateNote", note });

    const deleteNote = (noteId: string) =>
        dispatch({ type: "deleteNote", noteId });

    const archiveNote = (noteId: string) =>
        dispatch({ type: "archiveNote", noteId });

    const unarchiveNote = (noteId: string) =>
        dispatch({ type: "unarchiveNote", noteId });

    const tags: Tag[] = Array.from(
        new Set(
            state.notes.flatMap(note =>
                note.tags.map(tag => tag.name)
            )
        )
    ).map(name => ({ name }));

    const value: NotesContextType = {
        notes: state.notes,
        tags,
        addNote,
        updateNote,
        deleteNote,
        archiveNote,
        unarchiveNote,
    };

    return (
        <notesContext.Provider value={value}>
            {children}
        </notesContext.Provider>
    );
};
