import { FC } from "react";

import { Text } from "@/shared/ui/Text";
import { useResendSmsMutation } from "../../lib/hooks/useResendSmsMutation";
import { useRegistration } from "@/shared/model/store/registration";

export const ResendCode: FC = () => {
    const { number } = useRegistration();
    const { mutate } = useResendSmsMutation(number);

    return (
        <Text
            type="p"
            fz="14px"
            onClick={() => mutate()}
            position="center"
            style={{ cursor: "pointer" }}
        >
            Отправить код снова
        </Text>
    );
};
