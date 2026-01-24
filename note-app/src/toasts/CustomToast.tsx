import { checkIcon, infoIcon } from "../icons/Icons";

type CustomToastProps = {
  message: string;
  closeToast: () => void;
  link?: string;
  onClick?: () => void;
  invalid?: boolean;
};

const CustomToast = ({ message, closeToast, link, onClick, invalid }: CustomToastProps) => {
  return (
    <div className="w-97.5 max-w-[80%] text-[12px] bg-[rgba(255,255,255,1)] border border-[rgba(224,228,234,1)] shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.1)] text-[rgba(14,18,27,1)] rounded-lg p-2 flex items-center gap-2 dark:bg-[rgba(35,37,48,1)] dark:border-[rgba(43,48,59,1)] dark:shadow-[0px_16px_32px_-12px_var(--colorsbaseblack)] dark:text-[rgba(255,255,255,1)]">
      {!invalid ? checkIcon : <span className="text-red-600">{infoIcon}</span>}
      <p className="flex-1">{message}</p>
      {link && <button onClick={onClick} className="underline cursor-pointer">{link}</button>}
      <button onClick={closeToast} className="cursor-pointer">✕</button>
    </div>
  );
};

export default CustomToast;
