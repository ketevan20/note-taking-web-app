import type { ReactNode } from "react"
import { NavLink } from "react-router-dom"

type NavBarLinkType = {
    to: string;
    icon: ReactNode;
    label: string;
}

const NavBarLink = ({ to, icon, label }: NavBarLinkType) => {
    return (
        <NavLink to={to} className='w-full max-w-20 py-1 rounded-lg flex flex-col items-center gap-1' style={({ isActive }) => ({ backgroundColor: isActive ? 'rgba(235, 241, 255, 1)' : 'transparent', color: isActive ? 'rgba(51, 92, 255, 1)' : ''})}>
            {icon}
            <p className="hidden sm:block">{label}</p>
        </NavLink>
    )
}

export default NavBarLink