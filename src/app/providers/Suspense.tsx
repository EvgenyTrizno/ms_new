import { FC, ReactNode, Suspense } from "react";
interface Props {
  children: ReactNode;
}

export const PSuspense: FC<Props> = ({ children }): JSX.Element => {
  return <Suspense>{children}</Suspense>;
};
