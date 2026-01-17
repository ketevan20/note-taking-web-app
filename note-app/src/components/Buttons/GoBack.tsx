import { useNavigate } from "react-router-dom"
import { errowBackIcon } from "../../icons/Icons"

const GoBack = () => {
    const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="flex gap-1 items-center">{errowBackIcon} Go Back</button>
  )
}

export default GoBack