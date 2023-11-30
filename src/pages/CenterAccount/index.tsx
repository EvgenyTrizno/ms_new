import { FC } from "react";

import { Layout } from "../Layout";
import { Cols } from "@/shared/ui/Cols";
import { InfoCard } from "./ui/InfoCard";
import { Slider } from "./ui/Slider";
import { Container } from "@/shared/ui/Container";
import { PC, SMALL_LAPTOP } from "@/shared/utils";
import { AddBtn } from "@/shared/ui/AddBtn";
import { Image } from "@/shared/ui/Image";

import clinic from "./assets/clinic.svg";
import user from "./assets/user.svg";
import arrow from "./assets/arrow.svg";

const CenterAccount: FC = () => {
    return (
        <Layout>
            <Container>
                <Cols gap={10} type="auto" count={PC ? 2 : 1}>
                    <InfoCard
                        type="center"
                        name="Центр"
                        rank={"Основной центр"}
                    />
                    <InfoCard
                        type="doctor"
                        name="Зайцева Елена Юрьевна"
                        rank="Главный врач"
                    />
                </Cols>
                <Slider
                    image={clinic}
                    addBtn={
                        SMALL_LAPTOP ? (
                            <Image src={arrow} alt="" />
                        ) : (
                            <AddBtn onClick={() => ({})} />
                        )
                    }
                    text="Коллеги"
                />
                <Slider
                    image={user}
                    addBtn={
                        SMALL_LAPTOP ? (
                            <Image src={arrow} alt="" />
                        ) : (
                            <AddBtn onClick={() => ({})} />
                        )
                    }
                    text="О сотрудниках"
                />
            </Container>
        </Layout>
    );
};

export default CenterAccount;
