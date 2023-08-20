import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 200px;
    border-radius: 10px;
    background-color: #fff;
    padding: 1rem;
    margin: 1rem;
    cursor: pointer;
    border: 1px solid #12c38c;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color:  #0fa677;
        font-weight: bold;
    }

    p {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #fff;
    }

    &:hover {
        
        h3 {
            font-size: 1.6rem;
        }
    }

    `