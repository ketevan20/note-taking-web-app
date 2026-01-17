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
            <p className="px-2 mb-2">Tags</p>
            <div className="flex flex-col gap-1">
                {tags.map((tag, index) => (
                    <div key={tag.name}>
                        <NavLink to={`/tags/${tag.name}`} className="w-full px-3 py-2.5 flex items-center gap-2 rounded-lg" style={({ isActive }) => ({ backgroundColor: isActive ? 'rgba(243, 245, 248, 1)' : 'transparent', color: isActive ? 'rgba(14, 18, 27, 1)' : 'rgba(43, 48, 59, 1)' })}>
                            {({ isActive }) => (
                                <>
                                    {tagIcon}
                                    <span>{tag.name}</span>
                                    {isActive && <div className="flex-1 justify-items-end">{errowIcon}</div>}
                                </>
                            )}
                        </NavLink>
                        {isMobile && index !== tags.length - 1 && <div className="w-full h-px bg-[rgba(224,228,234,1)] mt-1"></div>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tags