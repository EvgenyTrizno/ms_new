import { useEffect, useState } from "react";

export const useResultForm = (isError: boolean, isSuccess: boolean) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [text, setText] = useState("Сохранить");

  useEffect(() => {
    if (!isError) return;

    setError(true);
    setText("Ошибка");

    const timeout = setTimeout(() => {
      setError(false);
      setText("Сохранить");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isError]);

  useEffect(() => {
    if (!isSuccess) return;

    setSuccess(true);
    setText("Сохранено!");

    const timeout = setTimeout(() => {
      setSuccess(false);
      setText("Сохранить");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isSuccess]);

  return { error, success, resText: text };
};
