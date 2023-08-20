import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    overflow: hidden;

    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
`

export const TituloContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 100vw;
    overflow: hidden;
    
    background-color: #12c38c;
    padding: 1rem;
    padding-left: 3rem;
    padding-bottom: 2rem;
    padding-top: 2rem;

    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #fff;
        padding-right: 2rem;
    }

    img {
        
        margin-right: 1rem;
        cursor: pointer;
    }
`

export const TituloContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100vw;
    margin-left: 2rem;

    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #fff;
    }

    p {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #fff;
    }
    `

export const TransacoesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100vw;
    overflow: hidden;
    padding: 1rem;
    padding-left: 3rem;
    background-color: #F0F0F0;

    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
`

export const NovaTransacaoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    padding: 1rem;
    

    button {
        background-color: #12c38c;
        border: none;
        border-radius: 10px;
        padding: 1rem;
        color: #fff;
        font-size: 1.3rem;
        cursor: pointer;
        margin-right: 1rem;

        &:hover {
            background-color: #0fa677;
        }
        
    }
    `

export const TransacoesContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    height: 100vh;
    overflow: hidden;
    padding: 1rem;
    padding-left: 3rem;

    p {
        font-size: 1rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
        text-align: center;
    }

    `

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    `

export const FormContainer = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    input {
        width: 100%;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 0 10px;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    select {
        width: 100%;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 0 10px;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }


`;

export const BotoesContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    button {
        background-color: #12c38c;
        border: none;
        border-radius: 10px;
        padding: 1rem;
        color: #fff;
        font-size: 1rem;
        cursor: pointer;

        &:hover {
            background-color: #0fa677;
        }
        
    }
    `
