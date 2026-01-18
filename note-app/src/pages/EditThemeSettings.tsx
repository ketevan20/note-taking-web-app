import SettingsOptions from "../components/SettingsOptions/SettingsOptions";
import { darkModeIcon, sunIcon, systemModeIcon } from "../icons/Icons";
import { useState } from "react";

const EditThemeSettings = () => {
    const themeOptions = [
        { id: "light", icon: sunIcon, title: "Light Mode", description: "Pick a clean and classic light theme", value: "light" },
        { id: "dark", icon: darkModeIcon, title: "Dark Mode", description: "Select a sleek and modern dark theme", value: "dark" },
        { id: "system", icon: systemModeIcon, title: "System", description: "Adapts to your device's theme", value: "system" }
    ];

    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved ? saved : themeOptions[0].id;
    });

    const [initialValue, setInitialValue] = useState(theme);

    function saveTheme() {
        localStorage.setItem('theme', theme);
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        const shouldBeDark =
            theme === "dark" ||
            (theme === "system" && prefersDark);

        document.documentElement.classList.toggle("dark", shouldBeDark);
        setInitialValue(theme);
        console.log(initialValue);
    }

    return (
        <SettingsOptions
            title="Color Theme"
            description="Choose your color theme:"
            options={themeOptions}
            selected={theme}
            onChange={setTheme}
            onSave={saveTheme}
            initialValue={initialValue} />
    )
}

export default EditThemeSettings