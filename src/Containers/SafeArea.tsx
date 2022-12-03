import styled from "styled-components";
import breakpoints from "~/universal/breakpoints";

export const SafeArea = styled.main<{ width?: string; xlWidth?: string }>`
    width: ${(p) => p.width || "90%"};
    margin: 0 auto;
    position: relative;

    @media (min-width: ${breakpoints.xl}) {
        width: ${(p) => p.xlWidth || breakpoints.safeAre};
    }
`;
