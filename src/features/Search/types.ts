import { ChangeEventHandler } from "react";
export interface ISeacrh {
  placeholder?: string;
  height?: string;
  width?: string;
  className?: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  showSearchByScroll?: boolean;
  additionalBlock?: JSX.Element;
}
