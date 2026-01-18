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
        <NavLink to={to} className={({ isActive }) => `w-full p-2 rounded-md flex flex-col gap-3 text-[rgba(14,18,27,1)] dark:text-[rgba(255,255,255,1)] ${isActive ? 'bg-[rgba(243,245,248,1)] dark:bg-[rgba(35,37,48,1)]' : ''}`}>
            <p className="font-semibold text-[16px] leading-[120%]">{title}</p>
            <div className="flex gap-1 flex-wrap">
                {tags.map(tag => <div className="py-0.5 px-1.5 bg-[rgba(224,228,234,1)] rounded-sm dark:bg-[rgba(82,88,102,1)] dark:text-[rgba(255,255,255,1)]">{tag.name}</div>)}
            </div>
            <p className="dark:text-[rgba(202,207,216,1)] text-[rgba(43,48,59,1)]">{date.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            })}</p>
        </NavLink>
    )
}

export default NoteItem