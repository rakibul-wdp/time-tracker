import styled from "styled-components";
import breakpoints from "~/universal/breakpoints";

export const CardBodyMain = styled.div`
    height: 73%;
    margin: 0 29px 0 39px;
    overflow: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 15px;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(transparent, #c7f0df, #32a070c0);
        border-radius: 6px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(transparent, "#32A071");
    }

    @media (max-width: ${breakpoints.tablet}) {
        ::-webkit-scrollbar {
            width: 7px;
        }
    }
    @media (max-width: ${breakpoints.mobile}) {
        margin: 0 20px;
        height: 70%;
        ::-webkit-scrollbar {
            width: 3px;
        }
    }
`;
