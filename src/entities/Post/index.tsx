import { FC, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { LikeIcon, SaveIcon, TelegramIcon } from "@/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { deleteSave, save } from "@/shared/api/saved.api";
import { useMutation } from "react-query";
import { SendLikeData, SendSaveData } from "@/shared/types";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import { useAuth } from "@/shared/model/store/auth";
import { like, deleteLike } from "@/shared/api";
import cn from "clsx";

type Props = {
    id: number;
    avatar?: string;
    title?: string;
    rank?: string;
    text?: string;
    imgs: string[];
    videos: string[];
    isLike: boolean;
    isSave: boolean;

    saveId?: number;
    likeId?: number;
};

export const Post: FC<Props> = ({
    id,
    avatar,
    title,
    rank,
    text,
    imgs,
    videos,
    isLike,
    isSave,
    saveId,
    likeId,
}) => {
    const navigate = useNavigate();
    const { getCookie } = useCookie();
    const { user } = useAuth();
    const [isSaveState, setSaveState] = useState(false);
    const [isLikeState, setLikeState] = useState(false);

    const [likeIdState, setLikeIdState] = useState<number>();
    const [saveIdState, setSaveIdState] = useState<number>();

    useEffect(() => {
        setSaveState(isSave);
        setLikeState(isLike);

        if (likeId) {
            setLikeIdState(likeId);
        }

        if (saveId) {
            setSaveIdState(saveId);
        }
    }, []);

    const { mutate: saveMutate } = useMutation(
        (data: SendSaveData) => save(getCookie("access_token") as string, data),
        {
            onSuccess: (data) => {
                setSaveState(true);
                setSaveIdState(data.data.id);
            },
        }
    );

    const { mutate: likeMutate } = useMutation(
        (data: SendLikeData) => like(getCookie("access_token") as string, data),
        {
            onSuccess: (data) => {
                setLikeState(true);
                setLikeIdState(data.data.id);
            },
        }
    );

    const { mutate: deleteLikeMutate } = useMutation((data: number) =>
        deleteLike(getCookie("access_token") as string, data)
    );

    const { mutate: deleteSaveMutate } = useMutation((data: number) =>
        deleteSave(getCookie("access_token") as string, data)
    );

    const savePost = () => {
        if (!user) navigate("/login");

        if (isSaveState && saveIdState) {
            deleteSaveMutate(saveIdState);

            setSaveState(false);
        } else {
            saveMutate({ news: id, user: user.id });
        }
    };

    const likePost = () => {
        if (!user) navigate("/login");

        if (isLikeState && likeIdState) {
            deleteLikeMutate(likeIdState);

            setLikeState(false);
        } else {
            likeMutate({ news: id, user: user.id });
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.user}>
                {avatar && (
                    <img className={styles.userAvatar} src={avatar} alt="avatar" />
                )}
                <div className={styles.userContent}>
                    {title && <p>{title}</p>}
                    {rank && <p>{title}</p>}
                </div>
            </div>

            <p className={styles.text}>{text}</p>

            {(imgs.length > 0 || videos.length > 0) && (
                <Swiper
                    spaceBetween={10}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Autoplay]}
                >
                    {imgs.map((el, idx) => (
                        <SwiperSlide>
                            <img className={styles.img} src={el} alt="post-img" key={idx} />
                        </SwiperSlide>
                    ))}

                    {videos.map((el, idx) => (
                        <SwiperSlide>
                            <video className={styles.img} src={el} key={idx} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            <div className={styles.footer}>
                <div className={styles.btns}>
                    <div className={styles.btn} onClick={savePost}>
                        <SaveIcon
                            className={cn({
                                [styles.saveActive]: isSaveState,
                            })}
                        />
                    </div>
                    <div className={styles.btn}>
                        <TelegramIcon />
                    </div>
                    <div className={styles.btn} onClick={likePost}>
                        <LikeIcon
                            className={cn({
                                [styles.likeActive]: isLikeState,
                            })}
                        />
                    </div>
                </div>

                <Link className={styles.moreDetailsLink} to={`/posts/${id}`}>
                    <span>Подробнее</span>

                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.92893 2.92893L15 10L7.92893 17.0711"
                            stroke="#0064FA"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
};
