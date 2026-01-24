import {
    collection,
    doc,
    getDocs,
    setDoc,
    updateDoc,
    deleteDoc,
    serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import type { Note } from "../types/Types";

export const getUserNotes = async (uid: string): Promise<Note[]> => {
    const notesRef = collection(db, "users", uid, "notes");
    const snapshot = await getDocs(notesRef);

    return snapshot.docs.map(doc => {
        const data = doc.data();

        return {
            id: doc.id,
            ...data,
            createdAt: data.createdAt?.toDate(),
            updatedAt: data.updatedAt?.toDate(),
        } as unknown as Note;
    });
};

export const createNote = async (uid: string, note: Note) => {
    const noteRef = doc(db, "users", uid, "notes", note.id);
    await setDoc(noteRef, {
        ...note,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
    });
};

export const updateNoteInDb = async (uid: string, note: Note) => {
    const noteRef = doc(db, "users", uid, "notes", note.id);
    await updateDoc(noteRef, {
        ...note,
        updatedAt: serverTimestamp(),
    });
};

export const deleteNoteFromDb = async (uid: string, noteId: string) => {
    const noteRef = doc(db, "users", uid, "notes", noteId);
    await deleteDoc(noteRef);
};

export const archiveUnarchiveNoteInDb = async (
    uid: string,
    noteId: string,
    data: Partial<Note>
) => {
    const noteRef = doc(db, "users", uid, "notes", noteId);

    await updateDoc(noteRef, {
        ...data,
        updatedAt: serverTimestamp(),
    });
};
