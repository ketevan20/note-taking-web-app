import { NavLink } from "react-router-dom";
import type { Tag } from "../../types/Types";

type NoteItemProps = {
    to: string;
    title: string;
    tags: Tag[];
    date: Date;
}

const NoteItem = ({ to, title, tags, date }: NoteItemProps) => {
    return (
        <NavLink to={to} style={({ isActive }) => ({ backgroundColor: isActive ? 'rgba(243, 245, 248, 1)' : 'transparent', color: isActive ? 'rgba(14, 18, 27, 1)' : 'rgba(43, 48, 59, 1)' })} className="w-full p-2 rounded-md flex flex-col gap-3">
            <p>{title}</p>
            <div className="flex gap-1 flex-wrap">
                {tags.map(tag => <div className="py-0.5 px-1.5 bg-[rgba(224,228,234,1)] rounded-sm">{tag.name}</div>)}
            </div>
            {date.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            })}
        </NavLink>
    )
}

export default NoteItem