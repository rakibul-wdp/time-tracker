import styled from "styled-components";
import breakpoints from "~/universal/breakpoints";

export interface ButtonProps {
    bg?: string;
    color?: string;
    weight?: string;
    fontSize?: string;
    lineHeight?: string;
    width?: string;
    padding?: string;

    mobWidth?: string;
}

export const Button = styled.button<ButtonProps>`
    width: ${(p) => p.width || "auto"};
    border: none;
    padding: ${(p) => p.padding || "10px"};
    border-radius: 5px;
    color: ${(p) => p.color || "#2DA771"};
    background: ${(p) => p.bg || "#c7f0df"};
    font-weight: ${(p) => p.weight || 400};
    font-size: ${(p) => p.fontSize || "12px"};
    line-height: ${(p) => p.lineHeight || "15px"};

    @media (max-width: ${breakpoints.mobile}) {
        width: ${(p) => p.mobWidth};
    }
`;
