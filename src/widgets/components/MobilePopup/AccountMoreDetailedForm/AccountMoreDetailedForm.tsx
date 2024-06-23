import { MainData } from "@/pages/AccountPage/ui/MainData";
import styles from "./AccountMoreDetailedForm.module.scss";
import { useForm } from "react-hook-form";
import { AccountMoreDetailedFormData } from "@/shared/types/formsTypes";
import { Button } from "@/shared/ui";
import { useMutation } from "react-query";
import { updateUserData } from "@/shared/api";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import { IUser } from "@/shared/types";
import { useEffect, useState } from "react";
import { useAuth } from "@/shared/model/store/auth";
import { Email } from "../../Protection/ui/Email";
import { Number } from "../../Protection/ui/Number";

export const AccountMoreDetailedForm = () => {
    const { register, handleSubmit, setValue, watch } =
        useForm<AccountMoreDetailedFormData>();
    const { getCookie } = useCookie();
    const {
        mutate: updateUserDataMutate,
        data: newUserData,
        isError: updateUserDataIsError,
        isSuccess: updateUserDataIsSuccess,
    } = useMutation((updateData: Partial<IUser>) =>
        updateUserData(getCookie("access_token") as string, updateData)
    );
    const { user, setUser } = useAuth();
    const [sexName, setSex] = useState(user?.sex)
    const [countryId, setCountry] = useState<number>(null)
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [typeBtn, setTypeBtn] = useState<"primary" | "success" | "error">(
        "primary"
    );

    useEffect(() => {
        if (!newUserData) return;

        setUser(newUserData.data);
    }, [newUserData, setUser]);

    useEffect(() => {
        if (success) return setTypeBtn("success");
        if (error) return setTypeBtn("error");

        return setTypeBtn("primary");
    }, [error, success]);

    useEffect(() => {
        if (!user) return;

        const data = {
            name: user.first_name,
            surname: user.surname,
            birthdate: user.birthday,
            address: user.address,
            email: user.email,
            sex: user.sex,
            number: user.number,
        };

        Object.entries(data).forEach((el) => {
            const key = el[0] as keyof AccountMoreDetailedFormData;
            const value = el[1];

            if (typeof value === "string") {
                setValue(key, value);
            }
        });
    }, [setValue, user]);

    useEffect(() => {
        if (!updateUserDataIsError) return;

        setError(true);

        const timeout = setTimeout(() => {
            setError(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [updateUserDataIsError]);

    useEffect(() => {
        if (!updateUserDataIsSuccess) return;

        setSuccess(true);

        const timeout = setTimeout(() => {
            setSuccess(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [updateUserDataIsSuccess]);

    const formHandler = (data: AccountMoreDetailedFormData) => {
        const { name, surname, birthdate, login, address, email } = data;

        const resData = {
            first_name: name,
            surname,
            birthdate,
            sex: sexName,
            country: countryId,
            login,
            address,
            email,
        };

        updateUserDataMutate(resData);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(formHandler)}>
            <div>
                <p className={styles.groupTitle}>Основная информация</p>
                <MainData register={register} setCountry={setCountry} setSex={setSex} />
            </div>


            <div>
                <p className={styles.groupTitle}>Защита профиля</p>
                <div className={styles.protection}>
                    <Number
                        hookFormData={{
                            register,
                            registerName: "number",
                        }}
                        verify={!!watch("number")}
                    />
                    <Email
                        hookFormData={{
                            register,
                            registerName: "email",
                        }}
                        verify={!!watch("email")}
                    />
                </div>
            </div>

            <Button type="submit" color={typeBtn} title="Сохранить" />
        </form>
    );
};
