import styled from "styled-components";
import breakpoints from "../../universal/breakpoints";

interface ImagesProps {
    width?: string;
    height?: string;
    borderRadius?: string;
    margin?: string;
    display?: string;
    tabWidth?: string;
    tabHeight?: string;
    tabBorderRadius?: string;
    tabMargin?: string;
    tabDisplay?: string;
    mobWidth?: string;
    mobHeight?: string;
    mobBorderRadius?: string;
    mobMargin?: string;
    mobDisplay?: string;
    hoverOver?: boolean;
    rotate?: number;
    pointer?: boolean;
}

export const Images = styled.img<ImagesProps>`
    ${(p) => p.width && `width: ${p.width};`}
    ${(p) => p.width && `width: ${p.width};`}
    ${(p) => p.height && `height: ${p.height};`}
    ${(p) => p.pointer && `cursor: pointer;`}
    ${(p) => p.borderRadius && `border-radius: ${p.borderRadius};`}
    ${(p) => p.margin && `margin: ${p.margin};`}
    ${(p) => p.display && `display: ${p.display};`}
    ${(p) =>
        p.rotate &&
        `transform: rotate(${p.rotate}deg);
         transition: all 0.5s;`}
    ${(p) =>
        p.hoverOver &&
        `opacity: 0.38;
    :hover{
        opacity: 1;
        transition: all 0.5s;
    };`}
    @media (max-width: ${breakpoints.tablet}) {
        ${(p) => p.tabWidth && `width: ${p.tabWidth};`}
        ${(p) => p.tabHeight && `height: ${p.tabHeight};`}
        ${(p) => p.tabBorderRadius && `border-radius: ${p.tabBorderRadius};`}
        ${(p) => p.tabMargin && `margin: ${p.tabMargin};`}
        ${(p) => p.tabDisplay && `display: ${p.tabDisplay};`}
    }
    @media (max-width: ${breakpoints.mobile}) {
        ${(p) => p.mobWidth && `width: ${p.mobWidth};`}
        ${(p) => p.mobHeight && `height: ${p.mobHeight};`}
        ${(p) => p.mobBorderRadius && `border-radius: ${p.mobBorderRadius};`}
        ${(p) => p.mobMargin && `margin: ${p.mobMargin};`}
        ${(p) => p.mobDisplay && `display: ${p.mobDisplay};`}
    }
`;
