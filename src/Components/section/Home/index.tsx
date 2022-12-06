import { memo } from "react";
import { Text } from "~/Components/common";
import { CommonMain, SafeArea } from "~/Containers";
import { useTheme } from "~/universal/theme";
import Card from "./Card";

const Home = memo(() => {
    const [theme] = useTheme();

    return (
        <CommonMain>
            <SafeArea>
                <Text marginTop="33px" weight="500" fontSize="16px" lineHeight="24px" align="center" color={theme.primary}>
                    Time Tracker
                </Text>
                <Card />
            </SafeArea>
        </CommonMain>
    );
});

export default Home;
