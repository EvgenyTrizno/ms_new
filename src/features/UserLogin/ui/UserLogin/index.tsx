import { FC, useEffect, useState } from "react";
import { AxiosError } from "axios";

import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";
import { ForgotPassword } from "../ForgotPassword";
import { PasswordInputField } from "../PasswordInputField";
import { Input } from "@/shared/ui/Input";
import { Btn } from "@/shared/ui/Btn";
import { useLoginMutation } from "@/shared/lib/hooks/useLoginMutation";

import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export const UserLogin: FC = () => {
  const [numberOrEmail, setNumberOrEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { mutate, error } = useLoginMutation(numberOrEmail, password);
  const [errorText, setErrorText] = useState<string>();

  useEffect(() => {
    if (!error) return;

    if (error instanceof AxiosError) {
      const { detail } = error.response?.data;

      if (detail === "No active users") {
        return setErrorText("Пользователя не существует");
      }

      return setErrorText("Ошибка. Попробуйте позже");
    }
  }, [error]);

  return (
    <Rows gap={20} rows={["auto"]}>
      {errorText && (
        <Text type="p" color="#d64657" position="center">
          {errorText}
        </Text>
      )}

      <Rows gap={5} rows={["auto"]}>
        <Rows gap={10} rows={["auto"]}>
          <div className={styles.box}>
            <Input
              type="text"
              placeholder="Введите номер или почту"
              onChange={(e) => {
                setErrorText(undefined);
                setNumberOrEmail(e.target.value);
              }}
            />
          </div>
          <div className={styles.box}>
            <PasswordInputField
              onChange={(e) => {
                setErrorText(undefined);
                setPassword(e.target.value);
              }}
            />
          </div>
        </Rows>
        <ForgotPassword />
      </Rows>
      <Rows gap={20} rows={["auto"]}>
        <Btn color="#0064FA" onClick={() => mutate()}>
          Войти
        </Btn>
        <div className={styles.register}>
          <Text color="#7D7F82" fz="16px" type="p">
            Нет учетной записи?
          </Text>
          <Link to="/registration">
            <Text color="#0064FA" fz="16px" type="p">
              Зарегистрироваться
            </Text>
          </Link>
        </div>
      </Rows>
    </Rows>
  );
};
