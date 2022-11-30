import styled from "styled-components";

export const DropdownList = styled.div`
    position: absolute;
    top: 100%;
    left: 10%;
    width: 80%;
    height: 185px;
    background-color: #ffffff;
    z-index: 1000;
    overflow: hidden;
    overflow-y: scroll;
    cursor: pointer;

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(transparent, #c7f0df, #32a070c0);
        border-radius: 6px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(transparent, "#32A071");
    }
`;
