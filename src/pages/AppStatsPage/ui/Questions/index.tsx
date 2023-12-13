import { FC } from "react";

import { Cols } from "@/shared/ui/Cols";
import { QuestionsLayout } from "../QuestionsLayout";
import { Question } from "../Question";
import { MOBILE, TABLET } from "@/shared/utils";

export const Questions: FC = () => {
    return (
        <Cols gap={10} count={MOBILE || TABLET ? 1 : 2} type="auto">
            <QuestionsLayout
                text="Часто задаваемые вопросы пользователей"
                questions={
                    <>
                        {[1, 2, 3].map((item) => (
                            <Question key={item} />
                        ))}
                    </>
                }
            />
            <QuestionsLayout
                text="Часто задаваемые вопросы сотрудников "
                questions={
                    <>
                        {[1, 2, 3].map((item) => (
                            <Question key={item} />
                        ))}
                    </>
                }
            />
        </Cols>
    );
};
