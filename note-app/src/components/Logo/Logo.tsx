import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <Link to={"/"}>
            <div className="flex gap-2.5">
                <img src="/images/Feather.svg" alt="Feather in logo" />
                <img src="/images//Notes.svg" alt="notes logo" />
            </div>
        </Link>
    )
}

export default Logo