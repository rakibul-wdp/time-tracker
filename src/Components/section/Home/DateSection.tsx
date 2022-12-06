import { memo } from "react";
import left from "~/assets/left.svg";
import right from "~/assets/right.svg";
import { Images, Text } from "~/Components/common";
import { CustomDiv } from "~/Components/common/CustomDiv";
import { FlexContainer } from "~/Containers";
import { useTheme } from "~/universal/theme";

const DateSection = memo(({ date }: { date: string }) => {
    const [theme] = useTheme();

    return (
        <CustomDiv width="fit-content" margin="0">
            <Text color={theme.accentHalfOpacity} weight="500" fontSize="14px" lineHeight="21px" align="center">
                Day
            </Text>

            <FlexContainer width="fit-content" margin="9px auto" gap="10px">
                <Images pointer src={left} alt="" />

                <Text color={theme.primary} weight="400" fontSize="12px" lineHeight="18px" align="center" pointer>
                    {date}
                </Text>

                <Images pointer src={right} alt="" />
            </FlexContainer>

            <Text color={theme.primaryText} weight="400" fontSize="20px" lineHeight="30px" align="center" pointer>
                Friday
            </Text>
        </CustomDiv>
    );
});

export default DateSection;
