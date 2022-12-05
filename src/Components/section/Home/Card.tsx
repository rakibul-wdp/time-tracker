import { memo } from "react";
import { CardArea } from "./styles";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import CardBody from "./CardBody";

const Card = memo(() => {
    return (
        <CardArea>
            <CardHeader />
            <CardBody />
            <CardFooter />
        </CardArea>
    );
});

export default Card;
