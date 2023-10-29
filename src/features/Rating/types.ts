export interface IRatingProps {
    defaultValue: number;
    onChange?: (value: number) => void;
    disabled?: boolean;
    width?: string;
    height?: string;
    gap?: string;
}
