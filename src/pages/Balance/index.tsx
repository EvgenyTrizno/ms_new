import { FC } from "react";
import { Layout } from "../Layout";
import { Table } from "./ui/Table";
import { Cols } from "@/shared/ui/Cols";
import { Payments } from "./ui/Payments";
import { Container } from "@/shared/ui/Container";
import { Char } from "./ui/Char";
import { Stats } from "./ui/Stats";
import { SMALL_LAPTOP } from "@/shared/utils";

const BalancePage: FC = () => {
    return (
        <Layout>
            <Container>
                <Stats />
                <Cols type="auto" count={SMALL_LAPTOP ? 1 : 2} gap={10}>
                    <Payments />
                    <Char />
                </Cols>
                <Table />
            </Container>
        </Layout>
    );
};

export default BalancePage;
