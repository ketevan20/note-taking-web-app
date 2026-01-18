import Logo from "../Logo/Logo"

const MobileHeader = () => {
  return (
    <div className="w-full px-8 py-4 bg-[rgba(243,245,248,1)] max-sm:px-4 max-sm:py-3 dark:bg-[rgba(35,37,48,1)]">
        <Logo />
    </div>
  )
}

export default MobileHeader