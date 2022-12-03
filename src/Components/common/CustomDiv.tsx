import styled from "styled-components";
import breakpoints from "../../universal/breakpoints";

interface CustomDivProps {
    display?: string;
    xlWidth?: string;
    width?: string;
    height?: string;

    background?: string;
    border?: string;
    borderBottom?: string;
    borderRadius?: string;

    padding?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingRight?: string;
    paddingLeft?: string;

    margin?: string;
    marginTop?: string;
    marginBottom?: string;
    marginRight?: string;
    marginLeft?: string;

    tabDisplay?: string;
    mobDisplay?: string;

    tabWidth?: string;
    mobWidth?: string;

    tabHeight?: string;
    mobHeight?: string;

    tabPadding?: string;
    tabPaddingTop?: string;
    tabPaddingBottom?: string;
    tabPaddingRight?: string;
    tabPaddingLeft?: string;

    tabMargin?: string;
    tabMarginTop?: string;
    tabMarginBottom?: string;
    tabMarginRight?: string;
    tabMarginLeft?: string;

    mobPadding?: string;
    mobPaddingTop?: string;
    mobPaddingBottom?: string;
    mobPaddingRight?: string;
    mobPaddingLeft?: string;

    mobMargin?: string;
    mobMarginTop?: string;
    mobMarginBottom?: string;
    mobMarginRight?: string;
    mobMarginLeft?: string;
    opacity?: number;
}

export const CustomDiv = styled.div<CustomDivProps>`
    display: ${(p) => p.display || "block"};
    position: relative;
    top: 0;
    width: ${(p) => p.width};
    height: ${(p) => p.height};
    background: ${(p) => p.background};
    opacity: ${(p) => p.opacity || 1};

    border: ${(p) => p.border || "none"};
    border-bottom: ${(p) => p.borderBottom};
    border-radius: ${(p) => p.borderRadius};

    padding: ${(p) => p.padding || "0"};
    padding-top: ${(p) => p.paddingTop};
    padding-bottom: ${(p) => p.paddingBottom};
    padding-right: ${(p) => p.paddingRight};
    padding-left: ${(p) => p.paddingLeft};

    margin: ${(p) => p.margin || "0 auto"};
    margin-top: ${(p) => p.marginTop};
    margin-bottom: ${(p) => p.marginBottom};
    margin-right: ${(p) => p.marginRight};
    margin-left: ${(p) => p.marginLeft};

    @media (min-width: ${breakpoints.xl}) {
        width: ${(p) => p.xlWidth};
    }
    @media (max-width: ${breakpoints.tablet}) {
        display: ${(p) => p.tabDisplay};
        width: ${(p) => p.tabWidth};
        height: ${(p) => p.tabHeight};

        padding: ${(p) => p.tabPadding};
        padding-top: ${(p) => p.tabPaddingTop};
        padding-bottom: ${(p) => p.tabPaddingBottom};
        padding-right: ${(p) => p.tabPaddingRight};
        padding-left: ${(p) => p.tabPaddingLeft};

        margin: ${(p) => p.tabMargin};
        margin-top: ${(p) => p.tabMarginTop};
        margin-bottom: ${(p) => p.tabMarginBottom};
        margin-right: ${(p) => p.tabMarginRight};
        margin-left: ${(p) => p.tabMarginLeft};
    }
    @media (max-width: ${breakpoints.mobile}) {
        display: ${(p) => p.mobDisplay};
        width: ${(p) => p.mobWidth};
        height: ${(p) => p.mobHeight};

        padding: ${(p) => p.mobPadding};
        padding-top: ${(p) => p.mobPaddingTop};
        padding-bottom: ${(p) => p.mobPaddingBottom};
        padding-right: ${(p) => p.mobPaddingRight};
        padding-left: ${(p) => p.mobPaddingLeft};

        margin: ${(p) => p.mobMargin};
        margin-top: ${(p) => p.mobMarginTop};
        margin-bottom: ${(p) => p.mobMarginBottom};
        margin-right: ${(p) => p.mobMarginRight};
        margin-left: ${(p) => p.mobMarginLeft};
    }
`;
