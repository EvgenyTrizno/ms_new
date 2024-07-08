import { FC, useEffect, useState } from "react"
import { Layout } from "../Layout";
import { CustomMobileHeader } from "@/widgets";
import { useDoctorsQuery } from "@/widgets/components/DoctorsFromUserCountry/lib/hooks/useDoctorsQuery";
import { useLocation } from "react-router";
import DoctorCol from "./ui/DoctorCol";
import { useQuery } from "react-query";
import { getServices } from "@/shared/api/services";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import Service from "../DoctorPage/ui/Service";
import { IService } from "@/shared/types/services.interface";
import { Btn } from "@/shared/ui/Btn";
import { Button } from "@/shared/ui";
import { Filter } from "@/shared/ui/Filter";
import { Characteristics } from "@/pages/ClinicPage/ui/Characteristics/Characteristics";
import styles from "./styles.module.scss"
import BoxWrapper from "@/entities/BoxWrapper";
import { CharacteristicsItem } from "../ClinicPage/ui/Characteristics/CharacteristicsItem/CharacteristicsItem";
import { Doughnut } from "react-chartjs-2";
import News from "./ui/News";



const ServicePage: FC = () => {
    const { state } = useLocation();
    const [filter, setFilter] = useState<string>("Общие параметры");
    const service: IService = state.service

    const data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                data: [5, 7, 3],
                backgroundColor: ["#0064FA", "rgba(0, 100, 250, 0.7)", "rgba(0, 100, 250, 0.2)"
                ],
                borderColor: ["#fff"],
                borderWidth: 5,
                borderRadius: 7,
                cutout: 60,
            },
        ],
    };

    const doughnutLabel = {
        id: 'doughnutLabel',
        afterDatasetDraw(chart, args, plugins) {
            const { ctx, data } = chart;
            const x = chart.getDatasetMeta(0).data[0].x;
            const y = chart.getDatasetMeta(0).data[0].y;
            console.log(x, y)
            ctx.save();
            ctx.font = 'bold 26px Montserrat';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.fillText('200', x, y)
            ctx.font = '400 10px Montserrat';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.fillText('пациентов', x, y + 15)
        }
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },


    };

    return (
        <>

            <Layout bgColor="white" >
                <CustomMobileHeader text={`${service.online ? "Онлайн" : "Офлайн"} услуги`} />
                <div className="flex flex-col">
                    <h3 className="font-medium text-[#7D7F82] text-[14px]">Название:</h3>
                    <h1 className="font-semibold text-[16px]">{service.title}</h1>
                    <h3 className="font-medium text-[#7D7F82] text-[14px] mt-4">Описание:</h3>
                    <h3 className="font-medium text-[#262626] text-[16px]">{service.description}</h3>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col">
                            <h3 className="font-medium text-[#7D7F82] text-[14px] mt-4">Длительность:</h3>
                            <h3 className="font-medium text-[#262626] text-[16px]">{service.duration > 61 ? `${Math.floor(service.duration / 60)} часов ${service.duration % 60} минут` : `${service.duration} минут`}</h3>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-medium text-[#7D7F82] text-[14px] mt-4">Цена:</h3>
                            <h3 className="font-medium text-[#262626] text-[16px]">{service.price} UZS</h3>
                        </div>
                    </div>

                    <Button
                        className="mt-[18px]"
                        title="Записаться"
                        styleType="outline"
                        onClick={() => console.log("click")}
                    />
                    <Filter
                        className="mt-[18px]"
                        data={["Общие параметры", "Польза услуги"]}
                        isSelect={filter}
                        setIsSelect={setFilter}
                    />
                </div>
                {
                    filter === "Общие параметры" ?
                        <>
                            <BoxWrapper color="white" className={styles.box_wrapper}>
                                <h1>Появление услуги: 3 года</h1>
                            </BoxWrapper>
                            <div className={styles.clinic__heal}>
                                <BoxWrapper color="white" className={styles.clinic__heal__block}>
                                    <h1 className={styles.clinic__heal__h1}>32</h1>
                                    <p className={styles.clinic__heal__p}>Лечатся</p>
                                </BoxWrapper>
                                <BoxWrapper color="white" className={styles.clinic__heal__block}>
                                    <h1 className={styles.clinic__heal__h1}>1637</h1>
                                    <p className={styles.clinic__heal__p}>Лечилось всего</p>
                                </BoxWrapper>
                            </div>
                            <div className={styles.wrapper}>
                                <CharacteristicsItem className={styles.item} title="64%" text="Помощь в лечении" />
                                <CharacteristicsItem className={styles.item} title="64%" text="Ответственность" />
                                <CharacteristicsItem className={styles.item} title="64%" text="Точность в расчетах" />
                                <CharacteristicsItem className={styles.item} title="64%" text="Точность в лечении" />
                            </div>
                        </>
                        :
                        <>
                            <h1 className={styles.clinic__title}>Польза услуги</h1>
                            <div className={styles.graph__container}>

                                <div className={styles.graph}>

                                    <Doughnut data={data} options={options} plugins={[doughnutLabel]} />
                                </div>

                                <div className={styles.list}>
                                    <div className={styles.item}>
                                        <div className={styles.circle}></div>
                                        <p>Рассчитанная польза 4%</p>
                                    </div>
                                    <div className={styles.item}>
                                        <div className={styles.circle}></div>
                                        <p>Полученная польза 4%</p>
                                    </div>
                                    <div className={styles.item}>
                                        <div className={styles.circle}></div>
                                        <p>Разница 4%</p>
                                    </div>
                                    <div className="w-[150px] h-[1px] bg-[#C8DBF6]"></div>
                                    <h1 className="mx-auto font-medium text-[13px] text-[#0064FA]">Подробнее</h1>
                                </div>
                            </div>
                        </>
                }








                <h1 className="font-semibold text-[16px] mt-[25px]">Новости</h1>
                <News />
                <News />
                <News />


            </Layout >
        </>
    )
}
export default ServicePage;
