import { useLocation, useParams } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar";
import { settingsIcon } from "../../icons/Icons";
import { useSearch } from "../../context/SearchContext";

const Header = () => {
  const location = useLocation();
  const { tagsId } = useParams(); 
  const { searchId } = useSearch();

  function renderTitle() {
    if(location.pathname.startsWith('/archived-notes')) {
      return "Archived Notes";
    } else if(tagsId) {
      return "Notes Tagged: " + tagsId;
    } else if(location.pathname.startsWith('/search')) {
      return "Search Results for: " + searchId;
    } else if(location.pathname.startsWith('/settings')) {
      return "Settings";
    } else {
      return "All Notes";
    }
  }
  return (
    <div className="w-full px-8 py-3 border-b border-[rgba(224,228,234,1)] flex items-center justify-between">
        {renderTitle()}
        <div className="flex gap-7 items-center">
          {<SearchBar />}
          <div className="w-6 h-6">{settingsIcon}</div>
        </div>
    </div>
  )
}

export default Header