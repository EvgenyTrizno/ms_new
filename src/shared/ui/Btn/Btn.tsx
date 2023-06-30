import { FC } from "react";
import { motion } from "framer-motion";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IBtn } from "@/shared/types";

import styles from "./Btn.module.scss";

export const Btn: FC<IBtn> = ({
    color,
    width = "100%",
    children,
    onClick = () => "",
    br,
    padding,
    disabled,
    border,
    textColor,
}) => {
    // const [isHovered, setIsHovered] = useState<boolean>(false);
    // const [isTouch, setIsTouch] = useState<boolean>(false);

    // useEffect(() => {
    //     return () => {
    //         setIsHovered(false);
    //         setIsTouch(false);
    //     };
    // }, []);

    return (
        <motion.button
            className={styles.btn}
            style={{
                backgroundColor: color,
                width: width,
                borderRadius: br,
                padding,
                border,
                color: textColor,
            }}
            disabled={disabled}
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
            // onTap={() => {
            //     setIsHovered(false);
            //     setIsTouch(true);
            // }}
            onClick={() => onClick()}
        >
            {/* {isHovered && !isTouch && (
                <motion.span
                    initial={{ opacity: 0, x: -100, y: 2 }}
                    animate={{ opacity: 1, x: -40 }}
                    transition={{ duration: 0.5 }}
                >
                    <MdOutlineKeyboardArrowRight size={25} />
                </motion.span>
            )}
            {isTouch && (
                <motion.span
                    initial={{ opacity: 0, x: 35, y: 2 }}
                    animate={{ opacity: 1, x: 40, y: 2 }}
                    transition={{ duration: 0.2 }}
                >
                    <MdOutlineKeyboardArrowRight size={25} />
                </motion.span>
            )} */}
            {children}
        </motion.button>
    );
};
