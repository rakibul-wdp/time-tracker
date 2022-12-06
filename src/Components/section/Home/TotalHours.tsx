import { memo } from "react";
import { Button, Text } from "~/Components/common";
import { CustomDiv } from "~/Components/common/CustomDiv";
import { useTheme } from "~/universal/theme";

const TotalHours = memo(() => {
    const [theme] = useTheme();

    return (
        <CustomDiv width="fit-content" margin="0">
            <Text color={theme.accentHalfOpacity} weight="500" fontSize="14px" lineHeight="21px" marginBottom="5px" align="start">
                Total Number of hours
            </Text>

            <Button width="171px" mobWidth="155px" padding="11px" weight="500" lineHeight="18px">
                0 Hours
            </Button>
        </CustomDiv>
    );
});

export default TotalHours;
