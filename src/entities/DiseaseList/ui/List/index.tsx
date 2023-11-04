import { FC } from "react";

import { Rows } from "@/shared/ui/Rows";
import { useDiseasesQuery } from "../../lib/hooks/useDiseasesQuery";
import { Disease } from "../Disease";
import { IListProps } from "./types";

export const List: FC<IListProps> = ({ search, setDisease }) => {
    const { data } = useDiseasesQuery();

    return (
        <Rows
            gap={10}
            rows={["auto"]}
            style={{ maxHeight: 350, overflowY: "scroll" }}
        >
            {data &&
                data.data
                    .filter((item) =>
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item) => (
                        <Disease
                            setDisease={setDisease}
                            diseaseId={item.id}
                            disease={item.name}
                        />
                    ))}
        </Rows>
    );
};
