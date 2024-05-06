import Image from "next/image";

const TextButton = ({
  label,
  icon,
  btnColor = "#8D36DF",
}: {
  label: string;
  icon?: string;
  btnColor?: string;
}) => {
  return (
    <button
      className={` cursor-pointer  font-medium text-sm text-[${btnColor}] flex gap-2 items-center`}
      type="button"
    >
      {icon && <Image width={10} height={20} src={icon} alt="icon" />}
      {label}
    </button>
  );
};

export default TextButton;
