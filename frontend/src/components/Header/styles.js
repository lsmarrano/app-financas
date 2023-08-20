import { styled } from "styled-components";

export const HeaderContainer = styled.div`
background-color: #12c18b;
padding: 10px;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Title = styled.h1`
margin: 0;
color: #fff;
margin-left: 2.5rem;
font-size: 1.5rem;
`;

export const Navigation = styled.nav`
& > img {
    margin: 0 15px;
    text-decoration: none;
    color: #007bff;
    margin-right: 15px;
    cursor: pointer;
}
`;