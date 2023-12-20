import { FC, useState } from "react";

import { Layout } from "../Layout";
import { Container } from "@/shared/ui/Container";
import { Filter } from "@/shared/ui/Filter";
import { AppointmentsList } from "./ui";
import { MOBILE, TABLET } from "@/shared/utils";
import { CustomMobileHeader } from "@/widgets";
import { SliderFilter } from "./ui/FilterSlider";

const AppointmentsPage: FC = () => {
    const filters = ["Предложения", "Популярные", "Подписка", "Корзина"];
    const [filter, setFilter] =
        useState<(typeof filters)[number]>("Предложения");

    return (
        <Layout>
            {(MOBILE || TABLET) && <CustomMobileHeader back text="Аккаунт" />}
            <Container>
                {!MOBILE && !TABLET ? (
                    <Filter
                        width="max-content"
                        data={filters}
                        isSelect={filter}
                        setIsSelect={setFilter}
                    />
                ) : (
                    <SliderFilter
                        data={filters}
                        isSelect={""}
                        setIsSelect={() => ({})}
                    />
                )}
                <AppointmentsList />
            </Container>
        </Layout>
    );
};

export default AppointmentsPage;
