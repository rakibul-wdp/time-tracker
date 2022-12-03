import styled from "styled-components";
import breakpoints from "~/universal/breakpoints";

interface FlexContainerProps {
    xlWidth?: string;
    width?: string;
    maxWidth?: string;
    height?: string;

    flexWrap?: string;
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    gap?: string;

    margin?: string;
    marginTop?: string;
    marginBottom?: string;
    marginRight?: string;
    marginLeft?: string;

    padding?: string;
    background?: string;
    borderRadius?: string;

    tabWidth?: string;
    tabMaxWidth?: string;
    tabFlexWrap?: string;
    tabHeight?: string;

    tabJustifyContent?: string;
    tabAlignItems?: string;
    tabFlexDirection?: string;
    tabGap?: string;

    tabMargin?: string;
    tabMarginTop?: string;
    tabMarginBottom?: string;
    tabMarginRight?: string;
    tabMarginLeft?: string;
    tabPadding?: string;

    mobWidth?: string;
    mobMaxWidth?: string;
    mobHeight?: string;

    mobFlexWrap?: string;
    mobJustifyContent?: string;
    mobAlignItems?: string;
    mobFlexDirection?: string;
    mobGap?: string;

    mobMargin?: string;
    mobMarginTop?: string;
    mobMarginBottom?: string;
    mobMarginRight?: string;
    mobMarginLeft?: string;
    mobPadding?: string;
}

export const FlexContainer = styled.section<FlexContainerProps>`
    display: flex;
    width: ${(p) => p.width || "90%"};
    max-width: ${(p) => p.maxWidth};
    height: ${(p) => p.height};

    justify-content: ${(p) => p.justifyContent || "space-between"};
    align-items: ${(p) => p.alignItems || "center"};
    gap: ${(p) => p.gap || "30px"};
    flex-direction: ${(p) => p.flexDirection || "row"};
    flex-wrap: ${(p) => p.flexWrap};

    margin: ${(p) => p.margin || "0 auto"};
    margin-top: ${(p) => p.marginTop};
    margin-bottom: ${(p) => p.marginBottom};
    margin-right: ${(p) => p.marginRight};
    margin-left: ${(p) => p.marginLeft};

    padding: ${(p) => p.padding || "0"};
    background: ${(p) => p.background};
    border-radius: ${(p) => p.borderRadius};

    @media (min-width: ${breakpoints.xl}) {
        width: ${(p) => p.xlWidth};
    }
    @media (max-width: ${breakpoints.tablet}) {
        width: ${(p) => p.tabWidth};
        max-width: ${(p) => p.tabMaxWidth};
        height: ${(p) => p.tabHeight};

        justify-content: ${(p) => p.tabJustifyContent};
        align-items: ${(p) => p.tabAlignItems};
        gap: ${(p) => p.tabGap};
        flex-direction: ${(p) => p.tabFlexDirection};
        flex-wrap: ${(p) => p.tabFlexWrap};

        margin: ${(p) => p.tabMargin};
        margin-top: ${(p) => p.tabMarginTop};
        margin-bottom: ${(p) => p.tabMarginBottom};
        margin-right: ${(p) => p.tabMarginRight};
        margin-left: ${(p) => p.tabMarginLeft};
        padding: ${(p) => p.tabPadding};
    }
    @media (max-width: ${breakpoints.mobile}) {
        width: ${(p) => p.mobWidth};
        max-width: ${(p) => p.mobMaxWidth};
        height: ${(p) => p.mobHeight};
        justify-content: ${(p) => p.mobJustifyContent};
        align-items: ${(p) => p.mobAlignItems};
        gap: ${(p) => p.mobGap};
        flex-direction: ${(p) => p.mobFlexDirection};
        flex-wrap: ${(p) => p.mobFlexWrap};

        margin: ${(p) => p.mobMargin};
        margin-top: ${(p) => p.mobMarginTop};
        margin-bottom: ${(p) => p.mobMarginBottom};
        margin-right: ${(p) => p.mobMarginRight};
        margin-left: ${(p) => p.mobMarginLeft};

        padding: ${(p) => p.mobPadding};
    }
`;
