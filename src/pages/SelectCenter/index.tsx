import { FC } from "react";

import { SelectCenter } from "@/features/SelectCenterOnMap";
import { AuthContainer } from "@/shared/ui/AuthContainer";

const SelectCenterPage: FC = () => {
    return (
        <AuthContainer title="Центр №3">
            <SelectCenter />
        </AuthContainer>
    );
};

export default SelectCenterPage;
