import moment from "moment";
import React, { memo, useState } from "react";
import { Button } from "~/Components/common";
import { useTheme } from "~/universal/theme";
import { CardHeaderMain } from "./styles";

const CardHeader = memo(() => {
    const [theme] = useTheme();
    const [newDate, setNewDate] = useState({
        day: "03 February 2023",
        start: "",
        end: "",
    });

    const date = moment("YYYY-MM-DD");
    console.log(date);
    12;

    return (
        <CardHeaderMain>
            <Button bg={theme.primaryHover} color={theme.highlightFill}>
                Add New Date
            </Button>
        </CardHeaderMain>
    );
});

export default CardHeader;
