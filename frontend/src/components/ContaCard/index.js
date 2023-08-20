import { CardContainer } from "./styles"
import { useSelector } from "react-redux";

export const ContaCard = ({nome, saldo, onClick, key}) => {

    const isVisible = useSelector(state => state.visibility.isVisible);
    return (
        <CardContainer key={key} onClick={onClick}>
            <h3>{nome}</h3>
            <p>Saldo: R$ {isVisible ? saldo : "*****"}</p>
        </CardContainer>
    )
}