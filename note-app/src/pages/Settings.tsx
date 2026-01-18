import { Outlet, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import NavigationButtons from "../components/SideBar/NavigationButtons";
import { fontIcon, sunIcon } from "../icons/Icons";

const Settings = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const location = useLocation();

  const isNoteOpen = Boolean(!location.pathname.endsWith('settings'));

  return (
    <div className="w-full flex">
      {(!isMobile || !isNoteOpen) && (
        <div className="w-full min-w-max xl:w-72.5 md:w-52 md:pr-5 md:py-4 md:border-r border-[rgba(224,228,234,1)] flex flex-col gap-4 dark:border-[rgba(35,37,48,1)]">
          <p className="md:hidden font-bold text-[24px] leading-[120%] dark:text-[rgba(255,255,255,1)]">Settings</p>
          
          <NavigationButtons 
            to="theme"
            svg={sunIcon}
            text="Color Theme"
          />

          <NavigationButtons 
            to="font"
            svg={fontIcon}
            text="Font Theme"
          />
        </div>
      )}

      {(isMobile || isNoteOpen) && <Outlet />}
    </div>
  );
};

export default Settings;
