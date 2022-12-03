import styled from "styled-components";
import breakpoints from "~/universal/breakpoints";

export const CommonMain = styled.main`
    width: 100%;
    height: auto;
    padding-top: 105px;

    @media (max-width: ${breakpoints.tablet}) {
        padding-top: 95px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding-top: 68px;
    }
`;
