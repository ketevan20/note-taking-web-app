import { archiveIcon, homeIcon } from "../../icons/Icons"
import Logo from "../Logo/Logo"
import TagList from "../TagList/TagList"
import NavigationButtons from "./NavigationButtons"

const SideBar = () => {
    return (
        <div className="min-w-68 max-xl:min-w-54 min-h-screen px-4 py-3 border-r border-[rgba(224,228,234,1)]">
            <div className="py-4">
                <Logo />
            </div>
            <div className="mt-4 mb-2 flex flex-col gap-1">
                <NavigationButtons
                    to="/"
                    svg={homeIcon}
                    text="All Notes" />
                <NavigationButtons
                    to="archived-notes"
                    svg={archiveIcon}
                    text="Archived Notes" />
            </div>
            <div className="w-full h-px bg-[rgba(224,228,234,1)] mb-2"></div>
            <TagList />
        </div>
    )
}

export default SideBar