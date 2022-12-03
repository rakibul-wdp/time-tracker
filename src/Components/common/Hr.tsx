import styled from "styled-components";
import breakpoints from "~/universal/breakpoints";

export interface HrProps {
    width?: string;
    color?: string;
    padding?: string;
    height?: string;
    opacity?: number;

    margin?: string;
    marginTop?: string;
    marginBottom?: string;

    tabWidth?: string;
    tabMargin?: string;
    tabMarginTop?: string;
    tabMarginBottom?: string;
    tabPadding?: string;

    mobWidth?: string;
    mobPadding?: string;
    mobMargin?: string;
    mobMarginTop?: string;
    mobMarginBottom?: string;
}

export const Hr = styled.hr<HrProps>`
    width: ${(p) => (p.width ? p.width : "100%")};
    border-color: ${(p) => (p.color ? p.color : "#000000")};
    padding: ${(p) => p.padding};
    height: ${(p) => p.height};
    margin: ${(p) => p.margin};
    margin-top: ${(p) => p.marginTop};
    margin-bottom: ${(p) => p.marginBottom};
    opacity: ${(p) => p.opacity || 1};

    @media (max-width: ${breakpoints.tablet}) {
        width: ${(p) => p.tabWidth};
        padding: ${(p) => p.tabPadding};
        margin: ${(p) => p.tabMargin};
        margin-top: ${(p) => p.tabMarginTop};
        margin-bottom: ${(p) => p.tabMarginBottom};
    }
    @media (max-width: ${breakpoints.mobile}) {
        width: ${(p) => p.mobWidth};
        padding: ${(p) => p.mobPadding};
        margin: ${(p) => p.mobMargin};
        margin-top: ${(p) => p.mobMarginTop};
        margin-bottom: ${(p) => p.marginBottom};
    }
`;
