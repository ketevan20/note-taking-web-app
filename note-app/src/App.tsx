import { Navigate, Route, Routes } from "react-router-dom"
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
import EditThemeSettings from "./pages/EditThemeSettings"
import EditFontSettings from "./pages/EditFontSettings"

const App = () => {
  return (
    <NotesProvider>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>

            <Route index element={<Navigate to="notes" replace />} />

            <Route path="notes" element={<AllNotes />}>
              <Route path=":noteId" element={<EditNote />} />
            </Route>

            <Route path="archived-notes" element={<ArchivedNotes />}>
              <Route path=":noteId" element={<EditNote />} />
            </Route>

            <Route path="tags" element={<TagList />} />
            <Route path="tags/:tagsId" element={<Tags />}>
              <Route path=":noteId" element={<EditNote />} />
            </Route>

            <Route path="settings" element={<Settings />}>
              <Route path="theme" element={<EditThemeSettings />} />
              <Route path="font" element={<EditFontSettings />} />
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