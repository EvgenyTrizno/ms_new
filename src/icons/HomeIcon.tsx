import { PropsWithClassName, PropsWithSize } from "@/shared/types";
import { FC } from "react";

export const HomeIcon: FC<PropsWithClassName<PropsWithSize>> = ({
  className,
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9.02 2.82258L3.63 7.02258C2.73 7.72258 2 9.21258 2 10.3426L2 17.7526C2 20.0726 3.89 21.9726 6.21 21.9726H17.79C20.11 21.9726 22 20.0726 22 17.7626V10.4826C22 9.27258 21.19 7.72258 20.2 7.03258L14.02 2.70258C12.62 1.72258 10.37 1.77258 9.02 2.82258Z"
        stroke="#B1B2B4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99872 13H11.9987M14.9987 13H11.9987M11.9987 13V10M11.9987 13V16"
        stroke="#B1B2B4"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
