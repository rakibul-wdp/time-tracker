import styled from "styled-components";
import breakpoints from "../../universal/breakpoints";

interface TittleProps {
    mobileSize?: number;
    margin?: string;
    mobMargin?: string;
    mobWeight?: string;
    mobLineHeight?: string;
}

export const Tittle = styled.h1<TittleProps>`
    margin: ${(p) => p.margin || 0};
    padding: 0;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #868e96;
    text-align: center;

    @media (max-width: ${breakpoints.mobile}) {
        margin: ${(p) => p.mobMargin || "20px"};
        font-size: ${(p) => (p.mobileSize ? `${p.mobileSize}px` : "32px")};
        font-weight: 600;
        line-height: ${(p) => p.mobLineHeight || "30px"};
    }
`;
