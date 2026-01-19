import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar/SideBar"
import NavBar from "../components/NavBar/NavBar"
import { useMediaQuery } from 'react-responsive';
import Header from "../components/Header/Header";
import MobileHeader from "../components/MobileHeader/MobileHeader";

const MainLayout = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="min-h-screen w-full flex max-md:flex-col relative overflow-auto font-[Inter] dark:bg-[rgba(14,18,27,1)] serif:font-serif monospace:font-['Source_Code_Pro']">

      {!isMobile && <SideBar />}
      {isMobile && <NavBar />}

      <div className={`flex-1 flex flex-col max-md:max-h-screen overflow-auto ${isMobile ? 'bg-[rgba(243,245,248,1)] dark:bg-[rgba(35,37,48,1)]' : ''}`}>
        {!isMobile && <Header />}
        {isMobile && <MobileHeader />}

        <div className="flex-1 bg-white max-md:rounded-t-2xl flex max-lg:pr-0 max-md:pr-8 px-8 max-md:py-6 max-sm:px-4 max-sm:py-5 max-sm:mb-10 max-md:mb-16 dark:bg-[rgba(14,18,27,1)]">
          <Outlet />
        </div>
      </div>

    </div>
  )
}

export default MainLayout