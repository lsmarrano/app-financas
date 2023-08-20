import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    border-radius: 15px;
    margin: 10px;
    width: 700px;
    height: 150px;
    padding: 1rem;
    padding-left: 3rem;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ tipo }) => (tipo === 'Despesa' ? '#f44336' : '#4caf50')}; // Vermelho para despesa, verde para receita

    img {
        align-self: flex-start;
        cursor: pointer;
    }

    `

export const TituloContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 100%;
    overflow: hidden;

    h1 {
        font-size: 2rem;
        color: #fff;
        padding-right: 2rem;
    }
    `

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    width: 100%;
    overflow: hidden;
    margin-left: 2rem;
    padding: 1rem;
    
    h1 {
        font-size: 1.5rem;
        color: #fff;
        text-align: end;
    }
    `


