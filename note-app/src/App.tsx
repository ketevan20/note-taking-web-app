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