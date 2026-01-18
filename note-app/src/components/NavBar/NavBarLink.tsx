import type { ReactNode } from "react"
import { NavLink } from "react-router-dom"

type NavBarLinkType = {
    to: string;
    icon: ReactNode;
    label: string;
}

const NavBarLink = ({ to, icon, label }: NavBarLinkType) => {
    return (
        <NavLink to={to} className={({ isActive }) =>
            `w-full max-w-20 py-1 rounded-lg flex flex-col items-center gap-1
    ${isActive
                ? "bg-[rgba(235,241,255,1)] text-[rgba(51,92,255,1)] dark:bg-[rgba(43,48,59,1)]"
                : "text-gray-700 hover:bg-gray-100"}`
        }>
            {icon}
            <p className="hidden sm:block">{label}</p>
        </NavLink>
    )
}

export default NavBarLink