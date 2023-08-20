import { styled } from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding-left: 250px;
    background-color: #f5f5f5;
    overflow: auto;
    min-height: 100vh;

    @media (max-width: 768px) {
        padding-left: 0px;
    }

`