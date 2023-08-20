import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 300px;
    height: 200px;
    border-radius: 10px;
    background-color: #0fa677;
    padding: 1rem;
    margin: 1rem;
    cursor: pointer;
    border: 1px solid #12c38c;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #fff;
        font-weight: bold;
    }

    p {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #fff;
    }

    &:hover {
        background-color: #12c38c;
        border: 1px solid #0fa677;
    }

    `