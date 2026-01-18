import { useNavigate } from "react-router-dom"

const NewNoteButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`/notes/${encodeURIComponent('Untitled Note')}`, { replace: true })} className="px-4 py-3 bg-[rgba(51,92,255,1)] text-white w-full rounded-lg text-center cursor-pointer">
        <p>+ Create New Notes</p>
    </button>
  )
}

export default NewNoteButton