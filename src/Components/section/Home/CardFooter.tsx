import React, { memo } from "react";
import { Text } from "~/Components/common";
import { FlexContainer } from "~/Containers";
import { useTheme } from "~/universal/theme";
import { CardFooterMain, FooterBody } from "./styles";

const CardFooter = memo(() => {
    const [theme] = useTheme();

    return (
        <CardFooterMain>
            <FooterBody>
                <FlexContainer margin="10px auto" marginBottom="30px" mobMarginBottom="20px" gap="0" width="100%" flexWrap="wrap" mobGap="10px">
                    <FlexContainer margin="0" gap="30px" width="fit-content" mobWidth="100%">
                        <Text weight="500" fontSize="14px" lineHeight="21px" align="center" color={theme.highlightFill}>
                            Total Day{" "}
                        </Text>
                        <Text weight="500" fontSize="14px" lineHeight="21px" align="center" color={theme.highlightFill}>
                            2 days
                        </Text>
                    </FlexContainer>
                    <FlexContainer margin="0" gap="35px" width="fit-content" mobWidth="100%">
                        <Text weight="500" fontSize="14px" lineHeight="21px" align="center" color={theme.highlightFill}>
                            Total Hours
                        </Text>
                        <Text weight="500" fontSize="14px" lineHeight="21px" align="center" color={theme.highlightFill}>
                            14 Hours
                        </Text>
                    </FlexContainer>
                </FlexContainer>
            </FooterBody>
        </CardFooterMain>
    );
});

export default CardFooter;
