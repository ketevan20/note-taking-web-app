import { Link } from "react-router-dom"
import { logoIcon } from "../../icons/Icons"

const Logo = () => {
    return (
        <Link to={"/notes"}>
            <div className="inline-flex items-center gap-2.5 text-[rgba(14,18,27,1)] dark:text-[rgba(255,255,255,1)]">
                <img src="/images/Feather.svg" alt="Feather in logo" />
                {logoIcon}
            </div>
        </Link>
    )
}

export default Logo