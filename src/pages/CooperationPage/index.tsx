import { MOBILE } from "@/shared/utils";
import { Layout } from "../Layout";
import { CustomMobileHeader } from "@/widgets";
import { ROUTES } from "@/shared/utils/PATHS";
import { Container } from "@/shared/ui/Container";
import User from "@/entities/User";
import { Rows } from "@/shared/ui/Rows";
import { useClinic } from "@/shared/model/store/clinic";
import { DataListWrapper } from "@/widgets/components/DataListWrapper";
import { Doctor } from "@/entities/Doctor";

const CooperationPage = () => {
  const { currentClinic } = useClinic();

  return (
    <Layout>
      {MOBILE && <CustomMobileHeader back text={ROUTES.cooperation.label} />}

      <Container>
        <DataListWrapper
          listIsUndefined={!currentClinic?.clinic[0].employees ? true : false}
          listLength={currentClinic?.clinic[0].employees.length || 0}
        >
          <Rows gap={0} rows={["auto"]}>
            {currentClinic?.clinic[0].employees.map((doctor, idx) => {
              return <Doctor data={doctor} count={idx + 1} />;
            })}
          </Rows>
        </DataListWrapper>
      </Container>
    </Layout>
  );
};

export default CooperationPage;
