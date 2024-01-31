import { MOBILE } from "@/shared/utils";
import { Layout } from "../Layout";
import { CustomMobileHeader } from "@/widgets";
import { ROUTES } from "@/shared/utils/PATHS";
import { Container } from "@/shared/ui/Container";
import User from "@/entities/User";
import { Rows } from "@/shared/ui/Rows";

const CooperationPage = () => {
  return (
    <Layout>
      {MOBILE && <CustomMobileHeader back text={ROUTES.cooperation.label} />}

      <Container>
        <Rows gap={0} rows={["auto"]}>
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
        </Rows>
      </Container>
    </Layout>
  );
};

export default CooperationPage;
