import { FC, useEffect } from "react";

import { Layout } from "../Layout";
import { MobileHeader } from "@/widgets/components/MobileHeader";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import { DoctorsFromUserCountry } from "@/widgets/components/DoctorsFromUserCountry";
import { Posts } from "./ui/Posts";
import styles from "./styles.module.scss";
import { FilterBtn } from "@/shared/ui/FilterBtn";
import addNotification from "react-push-notification";
import { io } from 'socket.io-client'
import { env } from "process";
import { useCookie } from "@/shared/lib/hooks/useCookie";




const MainPage: FC = () => {
    useEffect(() => console.log('rerender'))
    return (
        <Layout>
            <MobileHeader />
            <DoctorsFromUserCountry />

            <div className={styles.line}></div>

            <div className={styles.content}>
                <div className={styles.contentHeader}>
                    <h4>Популярные посты</h4>

                    <FilterBtn
                        type={window.innerWidth >= 768 ? "big" : "small"}
                        onClick={() => console.log("asdsad")}
                    />
                </div>

                <div className={styles.postsWrapper}>
                    <Posts />
                </div>
            </div>

            <MobileMenu />
        </Layout>
    );
};

export default MainPage;
