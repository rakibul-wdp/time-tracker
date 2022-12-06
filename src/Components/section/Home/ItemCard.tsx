import { memo } from "react";
import { Hr } from "~/Components/common";
import { CustomDiv } from "~/Components/common/CustomDiv";
import { FlexContainer } from "~/Containers";
import { useTheme } from "~/universal/theme";
import DateSection from "./DateSection";
import TimeSection from "./styles/TimeSection";
import TotalHours from "./TotalHours";

export interface ItemCardProps {
    date: {
        day: string;
        start: string;
        end: string;
    };
}

const ItemCard = memo((props: ItemCardProps) => {
    const [theme] = useTheme();

    return (
        <CustomDiv width="100%" margin="0">
            <FlexContainer margin="0" gap="20px" width="100%" tabFlexDirection="column">
                <DateSection date={props.date.day} />
                <FlexContainer margin="0" width="45%" gap="25%" tabWidth="100%" tabJustifyContent="center" tabGap="15%" mobFlexDirection="column" mobGap="20px">
                    <TimeSection time={props.date.start} tittle="Start Time" />
                    <TimeSection time={props.date.start} tittle="End Time" />
                </FlexContainer>
                <TotalHours />
            </FlexContainer>
            <Hr color={theme.primaryText} opacity={0.5} marginTop="20px" />
        </CustomDiv>
    );
});

export default ItemCard;
