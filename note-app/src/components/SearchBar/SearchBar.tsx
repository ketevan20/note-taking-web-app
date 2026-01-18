import { searchIcon } from "../../icons/Icons"
import { useSearch } from "../../context/SearchContext";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar = () => {
    const { searchId, setSearchId} = useSearch();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="w-full md:max-w-75 px-4 py-3 rounded-lg border border-[rgba(202,207,216,1)] flex gap-2 dark:border-[rgba(82,88,102,1)] dark:text-[rgba(255,255,255,1)]">
            <div className="dark:text-[rgba(153,160,174,1)]">{searchIcon}</div>
            <input onChange={(e) => {
                setSearchId(e.target.value);
                !location.pathname.endsWith('search') ? navigate('search') : '';
            }} type="text" className="w-full outline-0" defaultValue={searchId} placeholder="Search by title, content, or tags…"/>
        </div>
    )
}

export default SearchBar