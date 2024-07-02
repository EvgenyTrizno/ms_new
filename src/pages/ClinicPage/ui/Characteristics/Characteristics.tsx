import { FC } from "react";
import styles from "./Characteristics.module.scss";
import { PropsWithClassName } from "@/shared/types";
import cn from "clsx";
import { CharacteristicsItem } from "./CharacteristicsItem/CharacteristicsItem";
import BoxWrapper from "@/entities/BoxWrapper";
import { Doughnut, ChartProps } from "react-chartjs-2";

export const Characteristics: FC<PropsWithClassName> = ({ className }) => {
    const data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                data: [5, 7],
                backgroundColor: ["#0064FA", "rgba(0, 100, 250, 0.7)"
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
            <h1 className={styles.clinic__title}>Общие показатели клиники</h1>
            <BoxWrapper color="white" className={styles.box_wrapper}>
                <h1>Опыт в лечении: 3 года</h1>
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
            <div className={cn(className, styles.wrapper)}>
                <CharacteristicsItem className={styles.item} title="64%" text="Помощь в лечении" />
                <CharacteristicsItem className={styles.item} title="64%" text="Ответственность" />
                <CharacteristicsItem className={styles.item} title="64%" text="Точность в расчетах" />
                <CharacteristicsItem className={styles.item} title="64%" text="Точность в лечении" />
            </div>
            <h1 className={styles.clinic__title}>Польза услуг</h1>
            <div className={styles.graph__container}>

            <div className={styles.graph}>

                <Doughnut data={data} options={options} plugins={[doughnutLabel]} />
            </div>

            <div className={styles.list}>
                <div className={styles.item}>
                    <div className={styles.circle}></div>
                    <p>Сотрудничество 4%</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.circle}></div>
                    <p>Сотрудничество 4%</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.circle}></div>
                    <p>Сотрудничество 4%</p>
                </div>
                <div className={styles.item}>
                    <p>Сотрудничество 4%</p>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.item}>
                    <div className={styles.circle}></div>
                    <p>Сотрудничество 4%</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.circle}></div>
                    <p>Сотрудничество 4%</p>
                </div>
            </div>
            </div>
        </>
    );
};
