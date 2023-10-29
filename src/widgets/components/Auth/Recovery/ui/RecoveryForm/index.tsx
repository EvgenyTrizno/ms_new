formimport { FC } from "react";

export const RecoveryForm: FC = () => {
    return (            <form className={styles.form} onSubmit={handleSubmit}>
        {isSelect === "tel" ? (
            <Input
                type="text"
                placeholder="Введите тел.номер"
                value={number}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setNumber(e.target.value)
                }
            />
        ) : (
            <Input
                type="text"
                placeholder="Введите эл.почту"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                }
            />
        )} */}
        <Btn color="#0064FA" type="submit" disabled={disableBtn}>
            Продолжить
        </Btn>
        </form>
    )
};
