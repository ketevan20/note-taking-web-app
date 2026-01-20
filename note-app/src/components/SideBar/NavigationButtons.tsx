import { NavLink } from "react-router-dom";
import { errowIcon } from "../../icons/Icons";

type NavigationButtonsType = {
    to: string;
    text: string;
    svg: React.ReactNode;
}

const NavigationButtons = ({ to, svg, text }: NavigationButtonsType) => {
    return (
        <NavLink to={to} className={({ isActive }) => `group w-full px-3 py-2.5 flex items-center gap-2 rounded-lg text-[rgba(43,48,59,1)] dark:text-[rgba(224,228,234,1)] ${isActive ? "bg-[rgba(243,245,248,1)] text-[rgba(14,18,27,1)] dark:bg-[rgba(35,37,48,1)] dark:text-[rgba(255,255,255,1)]" : "hover:bg-[#f3f5f8ad] dark:hover:bg-[#2325305d]"}`}>
            {({ isActive }) => (
                <>
                    <div className={`group-hover:text-[rgba(51,92,255,1)] ${isActive ? 'text-[rgba(51,92,255,1)]' : ''}`}>
                        {svg}
                    </div>
                    <p className="flex-1">{text}</p>
                    {isActive && errowIcon}
                </>
            )}
        </NavLink>
    )
}

export default NavigationButtons