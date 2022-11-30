import styled from "styled-components";
import breakpoints from "~/universal/breakpoints";

export const CardArea = styled.div`
    width: 100%;
    max-width: 991px;
    height: 77.5vh;
    margin: 0 auto;
    margin-top: 13px;
    position: relative;

    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    @media (max-width: ${breakpoints.tablet}) {
        height: 78.5vh;
    }
    @media (max-width: ${breakpoints.mobile}) {
        height: 81.5vh;
    }
`;
