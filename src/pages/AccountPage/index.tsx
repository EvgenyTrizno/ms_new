import { FC, useRef, useState } from "react";

import { Layout } from "../Layout";
import { MOBILE } from "@/shared/utils";
import styles from "./styles.module.scss";
import { SearchWithFilter } from "@/features/SearchWithFilter";
import { AccountMoreDetailedForm } from "@/widgets/components/MobilePopup/AccountMoreDetailedForm/AccountMoreDetailedForm";
import { useOpensModals } from "@/shared/model/store/opensModals";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import { MobileHeader } from "@/widgets/components/MobileHeader";
import { useAuth } from "@/shared/model/store/auth";
import { MobilePopup, Slider } from "@/widgets";
import { NotesList } from "./ui/NotesList";
import { Filter } from "@/shared/ui/Filter";
import {
    AccountIcon,
    EditIcon,
    LikeIcon,
    PaymentsIcon,
    PeopleIcon,
    StatsIcon,
} from "@/icons";
import BoxWrapper from "@/entities/BoxWrapper";
import { ProfileItem } from "./ui/ProfileItem";
import { AccountForm } from "./ui/AccountForm";
import { ProfileLink } from "./ui/ProfileLink";
import { ROUTES } from "@/shared/utils/PATHS";
import { updateUserData, updateUserImg } from "@/shared/api";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import { useMutation } from "react-query";
import { IUser } from "@/shared/types";

const AccountPage: FC = () => {
    const { isOpenMoreDetailed, setOpenMoreDetailed } = useOpensModals();
    const { user } = useAuth();
    const inputImg = useRef<HTMLInputElement | null>(null);
    const [filter, setFilter] = useState("Текущие");
    const { getCookie } = useCookie();





    const handleImg = (event) => {

        console.log(URL.createObjectURL(event.target.files[0]))
        const fd = new FormData();
        fd.append('image', event.target.files[0])
        updateUserImg(getCookie("access_token"), fd)
    }
    return (
        <>
            <MobileHeader />
            <Layout>
                {MOBILE ? (
                    <div className={styles.wrapper}>
                        {/* <SearchWithFilter */}
                        {/*     className={styles.search} */}
                        {/*     placeholder="Поиск" */}
                        {/*     onChange={() => console.log("asd")} */}
                        {/*     value="" */}
                        {/* /> */}

                        {/* <div className={styles.timeWrapper}> */}
                        {/*     <p>Ваша очередь наступит через</p> */}
                        {/*     <span>23:59</span> */}
                        {/* </div> */}

                        <div className={styles.contentWrapper}>
                            <img
                                className={styles.avatar}
                                src={user?.image || "/assets/doctor.svg"}
                                alt="avatar"
                            />

                            <div className={styles.contentHeader}>
                                {(user?.first_name || user?.surname) && (
                                    <h4>
                                        {user?.first_name} {user?.surname}
                                    </h4>
                                )}

                                <div className={styles.contentHeaderList}>
                                    {(user?.country || user?.city) && (
                                        <div className={styles.contentHeaderItem}>
                                            <img src="/assets/icons/location.svg" alt="location" />
                                            <span>
                                                {user?.country?.name}, {user?.city?.name}
                                            </span>
                                        </div>
                                    )}

                                    <div
                                        className={styles.contentHeaderItem}
                                        onClick={() => setOpenMoreDetailed(true)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <img src="/assets/icons/warning.svg" alt="location" />
                                        <span>Подробнее</span>
                                    </div>
                                </div>
                            </div>
                            <Filter
                                data={["Текущие", "История"]}
                                isSelect={filter}
                                setIsSelect={setFilter}
                            />

                            <NotesList filter={filter} />
                        </div>
                    </div>
                ) : (
                    <div className={styles.desktopWrapper}>
                        <BoxWrapper color="white">
                            <div className={styles.profileInfo}>
                                <div className={styles.avatarWrapper}>
                                    <img src={user?.image ? user.image : "/assets/doctor.svg"} alt="avatar" />

                                    <div className={styles.avatarEdit}>
                                        <input type="file" style={{ display: "none" }} accept="image/jpeg, image/png, image/gif" ref={inputImg} onChange={(e) => handleImg(e)} />

                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" onClick={(e) => inputImg.current.click()}>
                                            <path
                                                d="M8.475 1.375L10.125 3.025M1.875 9.625L2.40152 7.69444C2.43587 7.56849 2.45304 7.50552 2.47941 7.44679C2.50282 7.39464 2.53158 7.34508 2.56524 7.29888C2.60315 7.24685 2.64931 7.20069 2.74162 7.10838L7.00416 2.84585C7.08583 2.76417 7.12667 2.72333 7.17377 2.70803C7.21519 2.69457 7.25981 2.69457 7.30124 2.70803C7.34833 2.72333 7.38917 2.76417 7.47085 2.84585L8.65416 4.02916C8.73583 4.11083 8.77667 4.15167 8.79197 4.19877C8.80543 4.24019 8.80543 4.28481 8.79197 4.32624C8.77667 4.37333 8.73583 4.41417 8.65416 4.49585L4.39162 8.75838C4.29931 8.85069 4.25315 8.89685 4.20112 8.93476C4.15493 8.96842 4.10536 8.99718 4.05321 9.02059C3.99449 9.04696 3.93151 9.06413 3.80556 9.09849L1.875 9.625Z"
                                                stroke="#0064FA"
                                                strokeWidth="1.125"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                <div className={styles.profileInfoMain}>
                                    <h4>{user?.last_name} {user?.first_name?.slice(0, 1)}.{user?.surname?.slice(0, 1)}</h4>

                                    <p>{user?.is_staff == true ? "Админ" : "Пользователь"}</p>
                                </div>
                            </div>
                        </BoxWrapper>

                        <div className={styles.list}>
                            <ProfileItem icon={<AccountIcon />} title="Аккаунт">
                                <AccountForm />
                            </ProfileItem>
                            {/* <ProfileLink */}
                            {/*     icon={ */}
                            {/*         <svg width="20" height="20" viewBox="0 0 20 20" fill="none"> */}
                            {/*             <path */}
                            {/*                 d="M8.99115 12.6421C8.82448 12.6421 8.66615 12.5754 8.54948 12.4587L6.53281 10.4421C6.29115 10.2004 6.29115 9.80039 6.53281 9.55872C6.77448 9.31706 7.17448 9.31706 7.41615 9.55872L8.99115 11.1337L12.5745 7.55039C12.8161 7.30872 13.2161 7.30872 13.4578 7.55039C13.6995 7.79206 13.6995 8.19206 13.4578 8.43372L9.43281 12.4587C9.31615 12.5754 9.15781 12.6421 8.99115 12.6421Z" */}
                            {/*                 fill="#0064FA" */}
                            {/*             /> */}
                            {/*             <path */}
                            {/*                 d="M10.001 18.9577C9.47604 18.9577 8.95104 18.7827 8.54271 18.4327L7.22604 17.2994C7.09271 17.1827 6.75937 17.066 6.58437 17.066H5.15104C3.91771 17.066 2.91771 16.066 2.91771 14.8327V13.4077C2.91771 13.2327 2.80104 12.9077 2.68438 12.7743L1.55937 11.4493C0.876042 10.641 0.876042 9.36602 1.55937 8.55768L2.68438 7.23268C2.80104 7.09935 2.91771 6.77435 2.91771 6.59935V5.16602C2.91771 3.93268 3.91771 2.93268 5.15104 2.93268H6.59271C6.76771 2.93268 7.10104 2.80768 7.23438 2.69935L8.55104 1.56602C9.36771 0.866016 10.6427 0.866016 11.4594 1.56602L12.776 2.69935C12.9094 2.81602 13.2427 2.93268 13.4177 2.93268H14.8344C16.0677 2.93268 17.0677 3.93268 17.0677 5.16602V6.58268C17.0677 6.75768 17.1927 7.09102 17.3094 7.22435L18.4427 8.54102C19.1427 9.35768 19.1427 10.6327 18.4427 11.4493L17.3094 12.766C17.1927 12.8993 17.0677 13.2327 17.0677 13.4077V14.8244C17.0677 16.0577 16.0677 17.0577 14.8344 17.0577H13.4177C13.2427 17.0577 12.9094 17.1827 12.776 17.291L11.4594 18.4244C11.051 18.7827 10.526 18.9577 10.001 18.9577ZM5.15104 4.18268C4.60937 4.18268 4.16771 4.62435 4.16771 5.16602V6.59102C4.16771 7.06602 3.94271 7.67435 3.63437 8.03268L2.50937 9.35768C2.21771 9.69935 2.21771 10.291 2.50937 10.6327L3.63437 11.9577C3.94271 12.3243 4.16771 12.9243 4.16771 13.3993V14.8244C4.16771 15.366 4.60937 15.8077 5.15104 15.8077H6.59271C7.07604 15.8077 7.68437 16.0327 8.05104 16.3493L9.36771 17.4827C9.70937 17.7743 10.3094 17.7743 10.651 17.4827L11.9677 16.3493C12.3344 16.041 12.9427 15.8077 13.426 15.8077H14.8427C15.3844 15.8077 15.826 15.366 15.826 14.8244V13.4077C15.826 12.9243 16.051 12.316 16.3677 11.9493L17.501 10.6327C17.7927 10.291 17.7927 9.69102 17.501 9.34935L16.3677 8.03268C16.051 7.66602 15.826 7.05768 15.826 6.57435V5.16602C15.826 4.62435 15.3844 4.18268 14.8427 4.18268H13.426C12.9427 4.18268 12.3344 3.95768 11.9677 3.64102L10.651 2.50768C10.3094 2.21602 9.70937 2.21602 9.36771 2.50768L8.05104 3.64935C7.68437 3.95768 7.06771 4.18268 6.59271 4.18268H5.15104Z" */}
                            {/*                 fill="#0064FA" */}
                            {/*             /> */}
                            {/*         </svg> */}
                            {/*     } */}
                            {/*     title="Рекомендации" */}
                            {/*     href={ROUTES.recommendations.path} */}
                            {/* /> */}

                            <ProfileLink
                                icon={<PaymentsIcon />}
                                title="Платежи"
                                href="/payments"
                            />

                            {/* <ProfileLink */}
                            {/*     icon={<EditIcon />} */}
                            {/*     title="Назначения" */}
                            {/*     href="/appointments" */}
                            {/* /> */}
                            <ProfileLink
                                icon={<StatsIcon />}
                                title="Статистика"
                                href="/statistics"
                            />

                            {/* <ProfileLink */}
                            {/*     icon={<PeopleIcon />} */}
                            {/*     title="Доступ" */}
                            {/*     href="/access" */}
                            {/* /> */}
                            {/**/}
                            {/* <ProfileLink */}
                            {/*     icon={<LikeIcon />} */}
                            {/*     title="Подписки" */}
                            {/*     href="/subscriptions" */}
                            {/* /> */}

                            <ProfileLink
                                icon={
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M4.10781 18.9596C3.75781 18.9596 3.43281 18.8763 3.14115 18.7096C2.49948 18.3346 2.13281 17.5763 2.13281 16.6346V4.88464C2.13281 2.76797 3.85781 1.04297 5.97448 1.04297H14.0161C16.1328 1.04297 17.8578 2.76797 17.8578 4.88464V16.6263C17.8578 17.568 17.4911 18.3263 16.8495 18.7013C16.2078 19.0763 15.3661 19.0346 14.5411 18.5763L10.4745 16.318C10.2328 16.1846 9.75781 16.1846 9.51615 16.318L5.44948 18.5763C4.99948 18.8263 4.54115 18.9596 4.10781 18.9596ZM5.98281 2.29297C4.55781 2.29297 3.39115 3.45964 3.39115 4.88464V16.6263C3.39115 17.118 3.53281 17.4846 3.78281 17.6263C4.03281 17.768 4.42448 17.7263 4.84948 17.4846L8.91615 15.2263C9.53281 14.8846 10.4661 14.8846 11.0828 15.2263L15.1495 17.4846C15.5745 17.7263 15.9661 17.7763 16.2161 17.6263C16.4661 17.4763 16.6078 17.1096 16.6078 16.6263V4.88464C16.6078 3.45964 15.4411 2.29297 14.0161 2.29297H5.98281V2.29297Z"
                                            fill="#0064FA"
                                        />
                                        <path
                                            d="M9.2401 11.0422C9.08177 11.0422 8.92344 10.9839 8.79844 10.8589L7.54844 9.60885C7.30677 9.36719 7.30677 8.96719 7.54844 8.72552C7.7901 8.48385 8.1901 8.48385 8.43177 8.72552L9.2401 9.53385L12.1318 6.64219C12.3734 6.40052 12.7734 6.40052 13.0151 6.64219C13.2568 6.88385 13.2568 7.28385 13.0151 7.52552L9.68177 10.8589C9.55677 10.9839 9.39844 11.0422 9.2401 11.0422Z"
                                            fill="#0064FA"
                                        />
                                    </svg>
                                }
                                title="Сохранённое"
                                href="/saved"
                            />
                        </div>
                    </div>
                )}
            </Layout>

            {MOBILE && <MobileMenu />}

            <MobilePopup
                isOpen={isOpenMoreDetailed}
                title="Подробнее"
                closeHandler={() => setOpenMoreDetailed(false)}
            >
                <AccountMoreDetailedForm />
            </MobilePopup>
        </>
    );
};

export default AccountPage;
