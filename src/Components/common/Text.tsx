import styled from "styled-components";
import breakpoints from "../../universal/breakpoints";

interface TextProps {
    width?: string;
    color?: string;
    weight?: string;
    align?: string;
    margin?: string;
    padding?: string;
    fontSize?: string;
    lineHeight?: string;
    tabLineHeight?: string;
    mobLineHeight?: string;
    tabWidth?: string;
    mobWidth?: string;
    mobFontSize?: string;
    tabFontSize?: string;
    mobWeight?: string;
    tabWeight?: string;
    tabAlign?: string;
    mobileAlign?: string;
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    tabMarginTop?: string;
    tabMarginBottom?: string;
    tabMarginLeft?: string;
    mobMarginTop?: string;
    mobMarginBottom?: string;
    mobMarginLeft?: string;
    opacity?: number;
    hoverOpacity?: number;
    mobOpacity?: number;
    transition?: string;
    firstLetterBig?: boolean;
    firstLetterLower?: boolean;
    underline?: boolean;
    hoverColor?: string;
    hoverBgColor?: string;
    fontStyle?: string;
    letterSpacing?: string;
    mobLetterSpacing?: string;
    firstLetterLeftMargin?: boolean;
    mobFirstLetterLeftMargin?: boolean;
    mobColor?: string;
    pointer?: boolean;
}

export const Text = styled.p<TextProps>`
    font-style: ${(p) => p.fontStyle || "normal"};
    width: ${(p) => p.width || "auto"};
    margin: ${(p) => p.margin || "0"};
    padding: ${(p) => p.padding || "0"};
    margin-top: ${(p) => p.marginTop || "0"};
    margin-bottom: ${(p) => p.marginBottom || "0"};
    margin-left: ${(p) => p.marginLeft || "0"};
    color: ${(p) => p.color || "#050504"};
    font-weight: ${(p) => p.weight};
    font-size: ${(p) => p.fontSize || "14px"};
    line-height: ${(p) => p.lineHeight || "21px"};
    text-align: ${(p) => p.align || "start"};
    opacity: ${(p) => p.opacity || 1};
    transition: ${(p) => p.transition};
    text-decoration-line: ${(p) => p.underline && "underline"};
    letter-spacing: ${(p) => p.letterSpacing};
    cursor: ${(p) => (p.pointer && "pointer") || "auto"};

    :hover {
        opacity: ${(p) => p.hoverOpacity};
        color: ${(p) => p.hoverColor};
        background-color: ${(p) => p.hoverBgColor};
    }

    ::first-letter {
        font-size: ${(p) => p.firstLetterBig && "50px"};
        margin-left: ${(p) => (p.firstLetterBig || p.firstLetterLeftMargin) && "50px"};
        text-transform: ${(p) => (p.firstLetterLower ? "lowercase" : "uppercase")};
    }

    @media (max-width: ${breakpoints.tablet}) {
        width: ${(p) => p.tabWidth};
        font-size: ${(p) => p.tabFontSize};
        font-weight: ${(p) => p.tabWeight};
        text-align: ${(p) => p.tabAlign};
        line-height: ${(p) => p.tabLineHeight};
        margin-top: ${(p) => p.tabMarginTop};
        margin-bottom: ${(p) => p.tabMarginBottom};
        margin-left: ${(p) => p.tabMarginLeft};
    }
    @media (max-width: ${breakpoints.mobile}) {
        width: ${(p) => p.mobWidth};
        font-size: ${(p) => p.mobFontSize};
        font-weight: ${(p) => p.mobWeight};
        text-align: ${(p) => p.mobileAlign};
        line-height: ${(p) => p.mobLineHeight};
        color: ${(p) => p.mobColor};
        letter-spacing: ${(p) => p.mobLetterSpacing};
        margin-top: ${(p) => p.mobMarginTop};
        margin-bottom: ${(p) => p.mobMarginBottom};
        margin-left: ${(p) => p.mobMarginLeft};
        opacity: ${(p) => p.mobOpacity};

        ::first-letter {
            font-size: ${(p) => p.firstLetterBig && "30px"};
            margin-left: ${(p) => (p.firstLetterBig || p.mobFirstLetterLeftMargin) && "30px"};
            text-transform: ${(p) => (p.firstLetterLower ? "lowercase" : "uppercase")};
        }
    }
`;
