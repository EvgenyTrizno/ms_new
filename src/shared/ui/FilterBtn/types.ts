type TFilterBtnType = "big" | "small";

export interface IFilterBtnProps {
    onClick: () => void;
    type: TFilterBtnType;
    isActive?: boolean;
}
