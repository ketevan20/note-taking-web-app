import { useNavigate } from "react-router-dom";
import { plusIcon } from "../../icons/Icons"

const MobileNewNoteButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`/notes/${encodeURIComponent('Untitled Note')}`, { replace: true })} className="absolute bottom-26.5 max-sm:bottom-18 right-8 w-16 h-16 max-sm:w-12 max-sm:h-12 bg-[rgba(51,92,255,1)] rounded-full flex items-center justify-center text-white">
        {plusIcon}
    </button>
  )
}

export default MobileNewNoteButton