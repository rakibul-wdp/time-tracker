import styled from "styled-components";
import breakpoints from "~/universal/breakpoints";

export interface MainProps {
    bg: string;
    height?: string;
    tabHeight?: string;
    mobHeight?: string;
}

export const Main = styled.header<MainProps>`
    width: 100%;
    background-color: ${(p) => p.bg};
    height: ${(p) => p.height || "105px"};
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;

    @media (max-width: ${breakpoints.tablet}) {
        height: ${(p) => p.tabHeight || "95px"};
    }

    @media (max-width: ${breakpoints.mobile}) {
        height: ${(p) => p.mobHeight || "68px"};
    }
`;
