import { MOBILE } from "@/shared/utils";
import { Layout } from "../Layout";
import { CustomMobileHeader } from "@/widgets";
import { ROUTES } from "@/shared/utils/PATHS";
import { Container } from "@/shared/ui/Container";
import Hardware from "@/entities/Hardware";

const HardwarePage = () => {
  return (
    <Layout>
      {MOBILE && <CustomMobileHeader back text={ROUTES.hardware.label} />}

      <Container>
        <Hardware />
        <Hardware />
        <Hardware />
        <Hardware />
        <Hardware />
      </Container>
    </Layout>
  );
};

export default HardwarePage;
