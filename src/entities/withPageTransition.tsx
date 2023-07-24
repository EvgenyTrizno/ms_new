import { useEffect, useRef, FC, ComponentClass, ComponentType } from "react";
import { motion } from "framer-motion";
import { useLocation, Location } from "react-router";

export const withPageTransition = (
    WrappedComponent: ComponentType<FC | ComponentClass>
) => {
    return (props: any) => {
        const location = useLocation();
        const locationRef = useRef<Location | null>(null);

        const isGoBack = location.pathname !== locationRef.current?.pathname;

        useEffect(() => {
            locationRef.current = location;
        }, [location]);

        const variants = {
            initial: {
                x: isGoBack ? "-100%" : "100%",
                opacity: 0,
            },
            animate: {
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.4,
                },
            },
            exit: {
                x: isGoBack ? "100%" : "-100%",
                opacity: 0,
                transition: {
                    duration: 0.4,
                },
            },
        };

        return (
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
            >
                <WrappedComponent {...props} />
            </motion.div>
        );
    };
};
