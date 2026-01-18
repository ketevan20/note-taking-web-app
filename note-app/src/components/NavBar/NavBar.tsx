import NavBarLink from "./NavBarLink"
import { archiveIcon, homeIcon, searchIcon, settingsIcon, tagIcon } from "../../icons/Icons"

const NavBar = () => {
    return (
        <div className="fixed bottom-0 w-screen border-t border-[rgba(224,228,234,1)] py-3 px-8 bg-[rgba(255,255,255,1)] flex justify-between shadow-[0px_-4px_6px_0px_rgba(240,240,240,0.6)] max-sm:px-4 dark:bg-[rgba(14,18,27,1)] dark:border-[rgba(35,37,48,1)] dark:text-[rgba(153,160,174,1)] dark:shadow-[0px_-4px_6px_0px_rgba(0,0,0,0.3)]">
            <NavBarLink
                to="notes"
                icon={ homeIcon }
                label="Home"
            />

            <div className="w-px h-auto bg-[rgba(224,228,234,1)] max-sm:hidden dark:bg-[rgba(35,37,48,1)]"></div>

            <NavBarLink
                to="search"
                icon={searchIcon}
                label="Search"
            />

            <div className="w-px h-auto bg-[rgba(224,228,234,1)] max-sm:hidden dark:bg-[rgba(35,37,48,1)]"></div>

             <NavBarLink
                to="archived-notes"
                icon={archiveIcon}
                label="Archived"
            />

            <div className="w-px h-auto bg-[rgba(224,228,234,1)] max-sm:hidden dark:bg-[rgba(35,37,48,1)]"></div>

            <NavBarLink
                to="tags"
                icon={tagIcon}
                label="Tags"
            />

            <div className="w-px h-auto bg-[rgba(224,228,234,1)] max-sm:hidden dark:bg-[rgba(35,37,48,1)]"></div>

            <NavBarLink
                to="settings"
                icon={settingsIcon}
                label="Settings"
            />
        </div>
    )
}

export default NavBar