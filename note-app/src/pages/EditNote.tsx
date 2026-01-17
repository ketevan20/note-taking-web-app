import { useNavigate, useParams } from "react-router-dom"
import { clockIcon, loadingIcon, tagIcon } from "../icons/Icons";
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNotes } from "../context/NotesContext";
import { useMediaQuery } from "react-responsive";
import MenuBar from "../components/MenuBar/MenuBar";
import MobileHeaderControl from "../components/MobileHeaderControl/MobileHeaderControl";

const EditNote = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();
  const { notes, updateNote, addNote } = useNotes();
  const { noteId } = useParams();

  let note = notes.find(note => note.id === noteId);

  if (!note) {
    if (noteId === 'Untitled Note') {
      note = {
        id: '',
        title: 'Untitled Note',
        content: '',
        archived: false,
        createdAt: new Date(),
        tags: [{ name: '' }],
      }
    } else return <div>Note not found</div>;
  }

  let newNote = note;

  const formattedDate =
    note.createdAt
      ? new Date(note.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      : "";

  const schema = Yup.object().shape({
    title: Yup.string()
      .required("Can't be empty"),
    tags: Yup.string()
      .required("Can't be empty"),
    content: Yup.string()
      .required("Can't be empty")
  })

  return (
    <div className="flex-1 h-full md:flex max-lg:flex-col">

      <Formik
        initialValues={{ title: note.title, tags: note.tags.map(tag => tag.name).join(","), content: note.content, createdAt: formattedDate, archived: note.archived }}
        onSubmit={(value) => {
          newNote.title = value.title;
          newNote.content = value.content;
          newNote.tags = value.tags.split(',').map(tag => ({ name: tag.trim() }));
          newNote.createdAt = new Date();
          if (noteId === 'Untitled Note') {
            newNote.id = crypto.randomUUID();
            addNote(newNote);
          } else {
            updateNote(newNote);
          }
          navigate('..')
        }}
        validationSchema={schema}
        enableReinitialize
      >
        {({ errors, touched }) => (
          <Form className="h-full max-h-200 md:flex-2 flex flex-col gap-4 md:py-4 md:px-6">
            {isMobile && <MobileHeaderControl isNew={noteId === 'Untitled Note'} noteId={note.id} isArchived={note.archived} />}

            <div className="flex flex-col">
              <Field name='title' type='text' placeholder="Enter a title" />
              {errors.title && touched.title && <ErrorMessage component='p' className="text-red-600" name="title" />}
            </div>

            <div className="flex flex-col gap-1">
              <div>
                <div className="flex gap-1">
                  <div className="w-28.75 flex items-center gap-1.5 py-1"><span className="w-4 h-4">{tagIcon}</span> Tags</div>
                  <Field name='tags' type='text' placeholder="Add tags separated by commas (e.g. Work, Planning)" className="flex-1" />
                </div>
                {errors.tags && touched.tags && <ErrorMessage component='p' className="text-red-600" name="tags" />}
              </div>

              {note.archived && <div className="flex gap-1">
                <div className="w-28.75 flex items-center gap-1.5 py-1">{loadingIcon} Status</div>
                <Field name='archived' type="text" value={'Archived'} className="flex-1" disabled={true} />
              </div>}

              <div className="flex gap-1">
                <div className="w-28.75 flex items-center gap-1.5 py-1">{clockIcon} Last edited</div>
                <Field name='createdAt' type="text" placeholder="Not yet saved" className="flex-1" disabled={true} />
              </div>

            </div>

            <div className="w-full h-px bg-[rgba(224,228,234,1)]"></div>

            <Field as="textarea" name='content' className="w-full flex-1 resize-none" placeholder="Start writing your note here..."></Field>
            {errors.content && touched.content && <ErrorMessage component='p' className="text-red-600" name="content" />}

            <div className="w-full h-px bg-[rgba(224,228,234,1)] max-md:hidden"></div>

            {!isMobile && <div className="flex gap-4 max-lg:mb-2">
              <button type="submit" className="bg-[rgba(51,92,255,1)] px-4 py-3 rounded-lg">Save Note</button>
              <button onClick={() => navigate('..')} type="button" className="bg-[rgba(243,245,248,1)] px-4 py-3 rounded-lg">Cancel</button>
            </div>}
          </Form>
        )}
      </Formik>

      {!isMobile && noteId !== 'Untitled Note' && <div className="flex-1 max-w-64.5 lg:border-l max-lg:border-t border-[rgba(224,228,234,1)] min-w-max max-lg:max-w-full">
        <MenuBar noteId={note.id} archived={note.archived} />
      </div>}

    </div>
  )
}

export default EditNote
