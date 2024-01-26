import { PropsWithClassName, PropsWithSize } from "@/shared/types";
import { FC } from "react";

export const SearchIcon: FC<PropsWithClassName<PropsWithSize>> = ({
  className,
  width = 20,
  height = 20,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M8.99994 16.999C13.4182 16.999 16.9999 13.4173 16.9999 8.99902C16.9999 4.58075 13.4182 0.999023 8.99994 0.999023C4.58166 0.999023 0.999939 4.58075 0.999939 8.99902C0.999939 13.4173 4.58166 16.999 8.99994 16.999Z"
        stroke="#B1B2B4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.0003 18.9994L14.6503 14.6494"
        stroke="#B1B2B4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
