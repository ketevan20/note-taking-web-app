import SettingsOptions from "../components/SettingsOptions/SettingsOptions";
import { monospaceIcon, sansSerifIcon, serifIcon } from "../icons/Icons";
import { useState } from "react";

const EditFontSettings = () => {
    const fontOptions = [
        { id: "sans-serif", icon: sansSerifIcon, title: "Sans-serif", description: "Clean and modern, easy to read.", value: "sans-serif" },
        { id: "serif", icon: serifIcon, title: "Serif", description: "Classic and elegant for a timeless feel.", value: "serif" },
        { id: "monospace", icon: monospaceIcon, title: "Monospace", description: "Code-like, great for a technical vibe.", value: "monospace" }
    ];

    const [font, setFont] = useState(() => {
        const saved = localStorage.getItem('font');
        return saved ? saved : fontOptions[0].id;
    });

    const [initialValue, setInitialValue] = useState(font);


    function saveTheme() {
        localStorage.setItem('font', font);
        document.documentElement.classList.remove(initialValue);
        document.documentElement.classList.add(font);
        setInitialValue(font);
    }

    return (
        <SettingsOptions
            title="Font Theme"
            description="Choose your font theme:"
            options={fontOptions}
            selected={font}
            onChange={setFont}
            onSave={saveTheme}
            initialValue={initialValue} />
    )
}

export default EditFontSettings