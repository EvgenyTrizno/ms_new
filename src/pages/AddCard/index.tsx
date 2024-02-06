import { MOBILE } from "@/shared/utils";
import { Layout } from "../Layout";
import styles from "./styles.module.scss";
import { CustomMobileHeader } from "@/widgets";
import { Container } from "@/shared/ui/Container";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";

const AddCard = () => {
  return (
    <Layout>
      {MOBILE && <CustomMobileHeader back text="Добавить карту" />}

      <Container withFooter={false}>
        <form className={styles.form}>
          <div className={styles.inputs}>
            <Input type="text" placeholder="Держатель карты" />
            <Input type="text" placeholder="Номер карты" />
            <Input type="text" placeholder="ГГ / ДД" />
            <Input type="text" placeholder="CVV" />
          </div>

          <Button title="Добавить карту" onClick={() => console.log("click")} />
        </form>
      </Container>
    </Layout>
  );
};

export default AddCard;
