import { FC, useEffect, useRef } from "react";

import { Layout } from "../Layout";
import { CustomMobileHeader, SliderHeader } from "@/widgets";
import { SliderWrapper } from "@/widgets/components/SliderWrapper";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { File } from "@/entities";
import styles from "./styles.module.scss";
import BoxWrapper from "@/entities/BoxWrapper";
import { Link } from "react-router-dom";
import { useLikesQuery } from "@/shared/lib/hooks/useLikesQuery";
import { useNewsQuery, useSavedQuery } from "@/shared/lib/hooks/"
import { useAuth } from "@/shared/model/store/auth";

const SavedPage: FC = () => {
    const fileSwiperRef = useRef<SwiperRef>(null);
    const gallerySwiperRef = useRef<SwiperRef>(null);
    const { data: saved, isSuccess } = useSavedQuery();
    const { user } = useAuth();
    const { data: news, isSuccess: newsSuccess } = useNewsQuery();
    let newsId: number[];



    return (
        <Layout>
            <CustomMobileHeader back text="Сохраненное" />

            <div className={styles.content}>
                {/* <BoxWrapper className={styles.boxWrapper} color="white"> */}
                {/*     <SliderWrapper> */}
                {/*         <SliderHeader title="Файлы" swiperRef={fileSwiperRef} withArrows /> */}
                {/**/}
                {/*         <Swiper */}
                {/*             ref={fileSwiperRef} */}
                {/*             spaceBetween={10} */}
                {/*             slidesPerView={1.7} */}
                {/*             slidesPerGroup={1} */}
                {/*             slidesOffsetBefore={16} */}
                {/*             slidesOffsetAfter={16} */}
                {/*             navigation */}
                {/*             breakpoints={{ */}
                {/*                 768: { */}
                {/*                     slidesPerView: 3.5, */}
                {/*                     slidesPerGroup: 3, */}
                {/*                 }, */}
                {/*                 1024: { */}
                {/*                     slidesPerView: 4, */}
                {/*                     slidesPerGroup: 4, */}
                {/*                 }, */}
                {/*                 1280: { */}
                {/*                     slidesPerView: 7.4, */}
                {/*                     slidesPerGroup: 7, */}
                {/*                 }, */}
                {/*             }} */}
                {/*         > */}
                {/*             <SwiperSlide> */}
                {/*                 <File /> */}
                {/*             </SwiperSlide> */}
                {/*             <SwiperSlide> */}
                {/*                 <File /> */}
                {/*             </SwiperSlide> */}
                {/*             <SwiperSlide> */}
                {/*                 <File /> */}
                {/*             </SwiperSlide> */}
                {/**/}
                {/*             <SwiperSlide> */}
                {/*                 <File /> */}
                {/*             </SwiperSlide> */}
                {/*             <SwiperSlide> */}
                {/*                 <File /> */}
                {/*             </SwiperSlide> */}
                {/*             <SwiperSlide> */}
                {/*                 <File /> */}
                {/*             </SwiperSlide> */}
                {/*             <SwiperSlide> */}
                {/*                 <File /> */}
                {/*             </SwiperSlide> */}
                {/*             <SwiperSlide> */}
                {/*                 <File /> */}
                {/*             </SwiperSlide> */}
                {/*             <SwiperSlide> */}
                {/*                 <File /> */}
                {/*             </SwiperSlide> */}
                {/*         </Swiper> */}
                {/*     </SliderWrapper> */}
                {/* </BoxWrapper> */}

                <BoxWrapper className={styles.boxWrapper} color="white">
                    <SliderWrapper>
                        <SliderHeader
                            title="Публикации"
                            swiperRef={gallerySwiperRef}
                            withArrows
                        />

                        <Swiper
                            ref={gallerySwiperRef}
                            spaceBetween={10}
                            slidesPerView={1.4}
                            slidesPerGroup={1}
                            slidesOffsetBefore={16}
                            slidesOffsetAfter={16}
                            navigation
                            breakpoints={{
                                768: {
                                    slidesPerView: 2.4,
                                    slidesPerGroup: 3,
                                },
                                1024: {
                                    slidesPerView: 2.9,
                                    slidesPerGroup: 4,
                                },
                                1280: {
                                    slidesPerView: 4.2,
                                    slidesPerGroup: 7,
                                },
                            }}
                        >
                            {
                                saved?.data.map(saved => news?.data.filter(news => news.id === saved.news && user?.id === saved.user)
                                    .map(news => (
                                        <SwiperSlide>
                                            <div className={styles.galleryBlock}>
                                                {
                                                    news.news_images.length > 0 ? news.news_images.map(image => (

                                                        <img src={image.image} alt="gallery" />
                                                    )) : <></>
                                                }
                                                <div className={styles.galleryBlockContent}>
                                                    <h4>{news.title}</h4>
                                                    <Link to="#">{news.text}</Link>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))

                                )
                            }
                            {/* <SwiperSlide> */}
                            {/*     <div className={styles.galleryBlock}> */}
                            {/*         <img src="/assets/gallery-item.jpg" alt="gallery" /> */}
                            {/*         <img src="/assets/gallery-item.jpg" alt="gallery" /> */}
                            {/*         <img src="/assets/gallery-item.jpg" alt="gallery" /> */}
                            {/*         <img src="/assets/gallery-item.jpg" alt="gallery" /> */}
                            {/**/}
                            {/*         <div className={styles.galleryBlockContent}> */}
                            {/*             <h4>Публикация</h4> */}
                            {/*             <Link to="#">Описание</Link> */}
                            {/*         </div> */}
                            {/*     </div> */}
                            {/* </SwiperSlide> */}
                            {/* <SwiperSlide> */}
                            {/*     <div className={styles.galleryBlock}> */}
                            {/*         <img src="/assets/gallery-item.jpg" alt="gallery" /> */}
                            {/*         <img src="/assets/gallery-item.jpg" alt="gallery" /> */}
                            {/*         <img src="/assets/gallery-item.jpg" alt="gallery" /> */}
                            {/*         <img src="/assets/gallery-item.jpg" alt="gallery" /> */}
                            {/**/}
                            {/*         <div className={styles.galleryBlockContent}> */}
                            {/*             <h4>Публикация</h4> */}
                            {/*             <Link to="#">Описание</Link> */}
                            {/*         </div> */}
                            {/*     </div> */}
                            {/* </SwiperSlide> */}
                            {/* <SwiperSlide> */}
                            {/*     <div className={styles.galleryBlock}> */}
                            {/*         <img src="/assets/gallery-item.jpg" alt="gallery" /> */}
                            {/*         <img src="/assets/gallery-item.jpg" alt="gallery" /> */}
                            {/*         <img src="/assets/gallery-item.jpg" alt="gallery" /> */}
                            {/*         <img src="/assets/gallery-item.jpg" alt="gallery" /> */}
                            {/**/}
                            {/*         <div className={styles.galleryBlockContent}> */}
                            {/*             <h4>Публикация</h4> */}
                            {/*             <Link to="#">Описание</Link> */}
                            {/*         </div> */}
                            {/*     </div> */}
                            {/* </SwiperSlide> */}
                            {/* <SwiperSlide> */}
                            {/*     <div className={styles.galleryBlock}> */}
                            {/*         <img src="/assets/gallery-item.jpg" alt="gallery" /> */}
                            {/*         <img src="/assets/gallery-item.jpg" alt="gallery" /> */}
                            {/*         <img src="/assets/gallery-item.jpg" alt="gallery" /> */}
                            {/*         <img src="/assets/gallery-item.jpg" alt="gallery" /> */}
                            {/**/}
                            {/*         <div className={styles.galleryBlockContent}> */}
                            {/*             <h4>Публикация</h4> */}
                            {/*             <Link to="#">Описание</Link> */}
                            {/*         </div> */}
                            {/*     </div> */}
                            {/* </SwiperSlide> */}
                        </Swiper>
                    </SliderWrapper>
                </BoxWrapper>
            </div>
        </Layout >
    );
};

export default SavedPage;
