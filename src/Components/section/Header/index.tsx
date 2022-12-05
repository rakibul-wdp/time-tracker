import React, { memo } from "react";
import { Images } from "~/Components/common";
import { useTheme } from "~/universal/theme";
import { Main } from "./styles";
import logo from "~/assets/logo.svg";

const Header = memo(() => {
    const [theme] = useTheme();

    return (
        <Main bg={theme.primaryHover} height="105px" tabHeight="95px" mobHeight="68px">
            <Images mobWidth="159px" src={logo} alt="inmogr" />
        </Main>
    );
});

export default Header;
