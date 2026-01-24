import { Outlet, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import NavigationButtons from "../components/SideBar/NavigationButtons";
import { fontIcon, logoutIcon, sunIcon } from "../icons/Icons";
import { useState } from "react";
import Modal from "../modal/Modal";

const Settings = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const location = useLocation();
  const [ isOpen, setIsOpen ] = useState(false);

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

          <div className="h-px bg-[rgba(224,228,234,1)] dark:bg-[rgba(35,37,48,1)]"></div>

          <button onClick={() => setIsOpen(true)} className="group w-full px-3 py-2.5 flex items-center gap-2 rounded-lg text-[rgba(14,18,27,1)] hover:bg-[#f3f5f8ad] dark:hover:bg-[#2325305d] dark:text-[rgba(255,255,255,1)]">
            <span className="group-hover:text-[rgba(51,92,255,1)]">{logoutIcon}</span>
            Logout
          </button>

          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            modalType={'logout'}
          />
        </div>
      )}

      {(isMobile || isNoteOpen) && <Outlet />}
    </div>
  );
};

export default Settings;
