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
import EditThemeSettings from "./pages/EditThemeSettings"
import EditFontSettings from "./pages/EditFontSettings"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"

const App = () => {
  return (
    <NotesProvider>
      <SearchProvider>
        <ToastContainer
          toastClassName={() =>
            "bg-transparent shadow-none p-0 m-0 border-0 flex justify-end max-md:mb-20 max-sm:mb-16 max-md:mr-2"
          }
          position="bottom-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          className="p-0"
          closeButton={false}
        />

        <Routes>
          <Route index element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />

          import ProtectedRoute from "./components/ProtectedRoute";

          // ...

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
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