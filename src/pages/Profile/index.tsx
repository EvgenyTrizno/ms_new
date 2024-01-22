import { FC } from "react";

import { Layout } from "../Layout";
import { MOBILE, TABLET } from "@/shared/utils";
import { Container } from "@/shared/ui/Container";
import { User } from "./ui/UserInfo";
import { MainData } from "./ui/MainData";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import { MobileHeader } from "@/widgets/components/MobileHeader";
import { useBurgerMenu } from "@/shared/model/store/burgerMenu";
import { MobileProfile } from "../MobileProfile";

const ProfilePage: FC = () => {
  const { isOpen, setIsOpen } = useBurgerMenu();
  return (
    <Layout>
      {(MOBILE || TABLET) && (
        <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      {MOBILE && TABLET ? (
        <div
          style={{
            height: MOBILE ? "calc(100% - 156px)" : "",
            padding: "16px 0 0 0",
            width: "100vw",
            position: "fixed",
            top: "82px",
            overflowY: "auto",
          }}
        >
          <MobileProfile />
        </div>
      ) : (
        // ""
        <Container height={MOBILE ? "calc(100% - 156px)" : ""}>
          {!MOBILE && !TABLET && <User />}
          <MainData />
        </Container>
      )}

      {MOBILE && <MobileMenu />}
    </Layout>
  );
};

export default ProfilePage;
