import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useNotes } from "../../context/NotesContext";
import { errowIcon, tagIcon } from "../../icons/Icons";
import MobileNewNoteButton from "../Buttons/MobileNewNoteButton";

const Tags = () => {
    let { tags } = useNotes();
    const isMobile = useMediaQuery({ maxWidth: '768px' });

    return (
        <div className="w-full">
            {isMobile && <MobileNewNoteButton />}

            <p className="px-2 mb-2 text-[rgba(14,18,27,1)] font-bold leading-[120%] text-[24px] md:text-[rgba(113,119,132,1)] md:text-[14px] md:font-normal dark:text-[rgba(255,255,255,1)]">Tags</p>

            <div className="flex flex-col gap-1">
                {tags.map((tag, index) => (
                    <div key={tag.name}>
                        <NavLink to={`/tags/${tag.name}`} className={({ isActive }) => `w-full px-3 py-2.5 flex items-center gap-2 rounded-lg text-[rgba(43,48,59,1)] dark:text-[rgba(224,228,234,1)] ${isActive ? "bg-[rgba(243,245,248,1)] text-[rgba(14,18,27,1)] dark:bg-[rgba(35,37,48,1)] dark:text-[rgba(255,255,255,1)]" : ""}` }>
                            {({ isActive }) => (
                                <>
                                    <div className={`${isActive ? 'text-[rgba(51,92,255,1)]' : ''}`}>
                                        {tagIcon}
                                    </div>
                                    <span>{tag.name}</span>
                                    {isActive && <div className="flex-1 justify-items-end">{errowIcon}</div>}
                                </>
                            )}
                        </NavLink>
                        {isMobile && index !== tags.length - 1 && <div className="w-full h-px bg-[rgba(224,228,234,1)] mt-1 dark:bg-[rgba(35,37,48,1)]"></div>}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Tags