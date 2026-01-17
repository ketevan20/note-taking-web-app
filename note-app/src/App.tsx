import { Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import AllNotes from "./pages/AllNotes"
import ArchivedNotes from "./pages/ArchivedNotes"
import EditNote from "./pages/EditNote"
import Settings from "./pages/Settings"
import Search from "./pages/Search"
import Tags from "./pages/Tags"
import { NotesProvider } from "./context/NotesContext"
import TagList from "./components/TagList/TagList"
import { SearchProvider } from "./context/SearchContext"

const App = () => {
  const notes = [
    {
      id: "note-1",
      title: "Finish dashboard UI",
      content: "Complete sidebar and navbar responsiveness.",
      createdAt: "2026-01-13T16:54:10.292Z",
      tags: [{ name: "Work" }, { name: "UI" }],
      archived: false
    },
    {
      id: "note-2",
      title: "Buy groceries",
      content: "Milk, eggs, fruits, coffee.",
      createdAt: "2026-01-13T16:54:10.292Z",
      tags: [{ name: "Personal" }, { name: "Errands" }],
      archived: false
    },
    {
      id: "note-3",
      title: "React useReducer",
      content: "Revise reducer patterns and immutability.",
      createdAt: "2026-01-13T16:54:10.292Z",
      tags: [{ name: "Study" }, { name: "React" }, { name: "JavaScript" }],
      archived: true
    },
    {
      id: "note-4",
      title: "Workout plan",
      content: "Leg day + 20 minutes cardio.",
      createdAt: "2026-01-13T16:54:10.292Z",
      tags: [{ name: "Health" }, { name: "Personal" }],
      archived: false
    }
  ];

  // Optional global tags list (derived manually)
  const tags = [
    { name: "Work" },
    { name: "UI" },
    { name: "Personal" },
    { name: "Errands" },
    { name: "Study" },
    { name: "React" },
    { name: "JavaScript" },
    { name: "Health" }
  ];

  localStorage.setItem("notes", JSON.stringify(notes));
  localStorage.setItem("tags", JSON.stringify(tags));

  console.log("Notes with multiple tags added ✅");

  return (
    <NotesProvider>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>

            <Route path="/" element={<AllNotes />}>
              <Route path=":noteId" element={<EditNote />} />
            </Route>

            <Route path="archived-notes" element={<ArchivedNotes />}>
              <Route path=":noteId" element={<EditNote />} />
            </Route>

            <Route path="tags" element={<TagList />} />
            <Route path="tags/:tagsId" element={<Tags />}>
              <Route path=":noteId" element={<EditNote />} />
            </Route>

            <Route path="settings">
              <Route index element={<Settings />} />
              <Route path=":settingsId" element={<EditNote />} />
            </Route>

            <Route path="search" element={<Search />}>
              <Route path=":noteId" element={<EditNote />} />
            </Route>
          </Route>
        </Routes>
      </SearchProvider>
    </NotesProvider>
  )
}

export default App