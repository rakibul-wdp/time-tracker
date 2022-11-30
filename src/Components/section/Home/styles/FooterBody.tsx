import styled from "styled-components";
import breakpoints from "~/universal/breakpoints";

export const FooterBody = styled.div`
    margin: 0 auto;
    margin: 0 29px 0 39px;
    border-top: 1px solid #2da7717f;

    @media (max-width: ${breakpoints.mobile}) {
        height: 70%;
        margin: 0 20px;
    }
`;
