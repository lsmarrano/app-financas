import { CardContainer } from "./styles"

export const NewContaCard = ({ onClick }) => {

    return (
        <CardContainer onClick={onClick}>
            <h3>Nova Conta</h3>
        </CardContainer>
    )
}