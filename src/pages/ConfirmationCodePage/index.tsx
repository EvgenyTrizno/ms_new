import { AuthContainer } from "@/shared/ui/AuthContainer";
import styles from "./styles.module.scss";
import { ChangeEvent, useState, useRef, FormEvent, useEffect } from "react";
import { Button } from "@/shared/ui";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useResendSms, useVerifyCode } from "@/shared/lib/hooks";
import cn from "clsx";

const additionValues = (
  first: string,
  second: string,
  third: string,
  fourth: string
) => {
  return `${first}${second}${third}${fourth}`;
};

const ConfirmationCodePage = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  const [timer, setTimer] = useState(59);

  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const thirdInputRef = useRef<HTMLInputElement>(null);
  const fourthInputRef = useRef<HTMLInputElement>(null);

  const [searchParams] = useSearchParams();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const { mutate, isError, isLoading, isSuccess } = useVerifyCode(
    searchParams.get("email") || "",
    Number(additionValues(first, second, third, fourth))
  );

  const { mutate: mutateResendSms, isSuccess: resendSmsIsSuccess } =
    useResendSms(searchParams.get("email") || "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setError(false);

    switch (name) {
      case "first":
        setFirst(value);
        break;
      case "second":
        setSecond(value);
        break;
      case "third":
        setThird(value);
        break;
      case "fourth":
        setFourth(value);
        break;
    }

    if (value.length === 1) {
      switch (name) {
        case "first":
          secondInputRef.current && secondInputRef.current.focus();
          break;
        case "second":
          thirdInputRef.current && thirdInputRef.current.focus();
          break;
        case "third":
          fourthInputRef.current && fourthInputRef.current.focus();
          break;
      }
    }
  };

  const formHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate();
  };

  useEffect(() => {
    if (!isError) return;

    setError(true);
  }, [isError]);

  useEffect(() => {
    if (!isSuccess) return;

    const timeout = setTimeout(() => {
      navigate("/");
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isSuccess]);

  const sendAgainHandler = () => {
    mutateResendSms();
  };

  useEffect(() => {
    if (!resendSmsIsSuccess) return;

    setTimer(59);
  }, [resendSmsIsSuccess]);

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 20);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <AuthContainer title="Завершение">
      <form onSubmit={formHandler}>
        <p
          className={cn(styles.helpText, {
            [styles.success]: isSuccess,
          })}
        >
          {isSuccess
            ? "Успешно!"
            : "Введите код который был отправлен вам на эл.почту"}
        </p>

        <div className={styles.fields}>
          <div
            className={cn(styles.field, {
              [styles.error]: error,
              [styles.success]: isSuccess,
            })}
          >
            <input
              type="text"
              value={first}
              onChange={handleChange}
              name="first"
              ref={firstInputRef}
              maxLength={1}
            />
          </div>
          <div
            className={cn(styles.field, {
              [styles.error]: error,
              [styles.success]: isSuccess,
            })}
          >
            <input
              type="text"
              value={second}
              onChange={handleChange}
              name="second"
              ref={secondInputRef}
              maxLength={1}
            />
          </div>
          <div
            className={cn(styles.field, {
              [styles.error]: error,
              [styles.success]: isSuccess,
            })}
          >
            <input
              type="text"
              value={third}
              onChange={handleChange}
              name="third"
              ref={thirdInputRef}
              maxLength={1}
            />
          </div>
          <div
            className={cn(styles.field, {
              [styles.error]: error,
              [styles.success]: isSuccess,
            })}
          >
            <input
              type="text"
              value={fourth}
              onChange={handleChange}
              name="fourth"
              ref={fourthInputRef}
              maxLength={1}
            />
          </div>
        </div>

        {timer <= 0 ? (
          <p className={styles.resetCode} onClick={sendAgainHandler}>
            Выслать код повторно
          </p>
        ) : (
          <p className={styles.timer}>00:{timer < 10 ? `0${timer}` : timer}</p>
        )}

        <Button
          title={isLoading ? "Загрузка..." : "Зарегистрироваться"}
          size="large"
          type="submit"
          disabled={isLoading}
        />

        <p className={styles.questionText}>
          Уже имеется аккаунт? <Link to="/">Войти</Link>
        </p>
      </form>
    </AuthContainer>
  );
};

export default ConfirmationCodePage;
