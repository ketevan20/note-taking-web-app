import NavBarLink from "./NavBarLink"
import { archiveIcon, homeIcon, searchIcon, settingsIcon, tagIcon } from "../../icons/Icons"

const NavBar = () => {
    return (
        <div className="fixed bottom-0 w-screen border-t border-[rgba(224,228,234,1)] py-3 px-8 bg-[rgba(255,255,255,1)] flex justify-between shadow-[0px_-4px_6px_0px_rgba(240,240,240,0.6)] max-sm:px-4">
            <NavBarLink
                to="/"
                icon={ homeIcon }
                label="Home"
            />

            <div className="w-px h-auto bg-[rgba(224,228,234,1)] max-sm:hidden"></div>

            <NavBarLink
                to="search"
                icon={searchIcon}
                label="Search"
            />

            <div className="w-px h-auto bg-[rgba(224,228,234,1)] max-sm:hidden"></div>

             <NavBarLink
                to="archived-notes"
                icon={archiveIcon}
                label="Archived"
            />

            <div className="w-px h-auto bg-[rgba(224,228,234,1)] max-sm:hidden"></div>

            <NavBarLink
                to="tags"
                icon={tagIcon}
                label="Tags"
            />

            <div className="w-px h-auto bg-[rgba(224,228,234,1)] max-sm:hidden"></div>

            <NavBarLink
                to="settings"
                icon={settingsIcon}
                label="Settings"
            />
        </div>
    )
}

export default NavBar