import { Layout } from "../Layout";
import styles from "./styles.module.scss";
import { CustomMobileHeader } from "@/widgets";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";

const AddCard = () => {
  return (
    <Layout>
      <CustomMobileHeader back text="Добавить карту" />

      <form className={styles.form}>
        <div className={styles.inputs}>
          <Input type="text" placeholder="Держатель карты" />
          <Input type="text" placeholder="Номер карты" />
          <Input type="text" placeholder="ГГ / ДД" />
          <Input type="text" placeholder="CVV" />
        </div>

        <Button title="Добавить карту" onClick={() => console.log("click")} />
      </form>
    </Layout>
  );
};

export default AddCard;
