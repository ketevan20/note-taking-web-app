import { useMediaQuery } from "react-responsive";
import GoBack from "../Buttons/GoBack";

export type SettingsOption = {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    value: string;
};

type SettingsOptionsProps = {
    title: string;
    description: string;
    options: SettingsOption[];
    selected: string;
    onChange: (value: string) => void;
    onSave: () => void;
    initialValue: string;
};

const SettingsOptions = ({ title, description, options, selected, initialValue, onChange, onSave }: SettingsOptionsProps) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div className="h-full max-h-200 w-full md:max-w-132 flex flex-col gap-6 md:py-4 md:px-6 text-[rgba(43,48,59,1)] text-[14px] font-normal leading-[130%] tracking-[-0.2px] dark:text-[rgba(202,207,216,1)]">
            {isMobile && <GoBack />}

            <div>
                <h1 className="text-[rgba(14,18,27,1)] font-semibold text-[24px] leading-[120%] tracking-[-0.3px] mb-1 md:text-[16px] dark:text-[rgba(255,255,255,1)]">
                    {title}
                </h1>
                <p>{description}</p>
            </div>

            <div className="flex flex-col gap-4">
                {options.map((option) => (
                    <label
                        key={option.id}
                        htmlFor={option.id}
                        className={`w-full rounded-xl border border-[rgba(224,228,234,1)] p-4 flex items-center gap-4 cursor-pointer dark:border-[rgba(43,48,59,1)]
              ${selected === option.value ? "bg-[rgba(243,245,248,1)] dark:bg-[rgba(35,37,48,1)]" : ""}
            `}
                    >
                        <div className="w-10 h-10 bg-[rgba(255,255,255,1)] border border-[rgba(224,228,234,1)] rounded-xl flex items-center justify-center dark:border-[rgba(43,48,59,1)] dark:bg-[rgba(14,18,27,1)]">
                            {option.icon}
                        </div>

                        <div className="flex-1 flex flex-col gap-1.5">
                            <p className="font-medium text-[rgba(14,18,27,1)] dark:text-[rgba(255,255,255,1)]">{option.title}</p>
                            <p>{option.description}</p>
                        </div>

                        <input
                            type="radio"
                            id={option.id}
                            value={option.value}
                            checked={selected === option.value}
                            onChange={() => onChange(option.value)}
                        />
                    </label>
                ))}
            </div>

            <button
                onClick={onSave}
                type="button"
                className="bg-[rgba(51,92,255,1)] px-4 py-3 rounded-lg text-white self-end disabled:bg-[#a1b1f0]"
                disabled={initialValue == selected}
            >
                Apply Changes
            </button>
        </div>
    );
};

export default SettingsOptions;
