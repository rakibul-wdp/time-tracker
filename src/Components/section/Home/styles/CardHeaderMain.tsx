import styled from "styled-components";
import breakpoints from "~/universal/breakpoints";

export const CardHeaderMain = styled.div`
    margin-left: 39px;
    padding-top: 42px;
    padding-bottom: 30px;

    @media (max-width: ${breakpoints.mobile}) {
        margin-left: 20px;
        padding-top: 25px;
        padding-bottom: 20px;
    }
`;
