import { useLocation, useNavigate } from "react-router-dom"
import { errowBackIcon } from "../../icons/Icons"

const GoBack = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <button onClick={() => {
      if(location.pathname.startsWith('/tags')) navigate(-1);
      else navigate('..');
    }} className="flex gap-1 items-center text-[rgba(82,88,102,1)] dark:text-[rgba(202,207,216,1)]">{errowBackIcon} Go Back</button>
  )
}

export default GoBack