import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color:#12c38c;
    display: flex;
    justify-content: center;
    align-items: center;
    `

export const Form = styled.form`
    width: 400px;
    height: 400px;
    background-color: #212529;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: #ffffff;
        font-size: 42px;

    }
    `

export const Logo = styled.img`
    width: 33%;
    height: 33%;
    margin-bottom: 20px;
    align-self: flex-end;
    `

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    h1 {
        color: #ffffff;
        font-size: 42px;
        margin-bottom: 20px;
        text-align: center;
    }
    `

export const Input = styled.input`
    width: 100%;
    height: 40px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 15px;
    margin-bottom: 15px;
    font-size: 17px;
    `

export const Button = styled.button`
    width: 20%;
    height: 40px;
    background-color: #000;
    border: 0;
    border-radius: 15px;
    background-color: #12c38c;
    color: #ffffff;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    transition: .3s;
    text-align: center;
    align-self: flex-end;
    `