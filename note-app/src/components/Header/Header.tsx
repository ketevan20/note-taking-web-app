import { useLocation, useNavigate, useParams } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar";
import { settingsIcon } from "../../icons/Icons";
import { useSearch } from "../../context/SearchContext";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { tagsId } = useParams(); 
  const { searchId } = useSearch();

  function renderTitle() {
    if(location.pathname.startsWith('/archived-notes')) {
      return "Archived Notes";
    } else if(tagsId) {
      return <p><span className="text-[rgba(82,88,102,1)] dark:text-[rgba(202,207,216,1)]">Notes Tagged:</span> {tagsId}</p>
    } else if(location.pathname.startsWith('/search')) {
      return <p><span className="text-[rgba(82,88,102,1)] dark:text-[rgba(202,207,216,1)]">Search Results for: </span>{searchId}</p>;
    } else if(location.pathname.startsWith('/settings')) {
      return "Settings";
    } else {
      return "All Notes";
    }
  }
  return (
    <div className="w-full px-8 py-3 border-b border-[rgba(224,228,234,1)] flex items-center justify-between dark:border-[rgba(35,37,48,1)]">
        <p className="text-[rgba(14,18,27,1)] font-bold leading-[120%] text-[24px] dark:text-[rgba(255,255,255,1)]">{renderTitle()}</p>
        <div className="flex gap-7 items-center">
          {<SearchBar />}
          <button onClick={() => navigate('settings')} className="w-6 h-6 cursor-pointer dark:text-[rgba(153,160,174,1)]">{settingsIcon}</button>
        </div>
    </div>
  )
}

export default Header