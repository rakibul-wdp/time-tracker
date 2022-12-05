import { dates } from "@/Data/dates";
import { memo } from "react";
import ItemCard from "./ItemCard";
import { CardBodyMain } from "./styles";

const CardBody = memo(() => {
    return (
        <CardBodyMain>
            {dates.map((date, i) => (
                <ItemCard date={date} key={i} />
            ))}
        </CardBodyMain>
    );
});

export default CardBody;
