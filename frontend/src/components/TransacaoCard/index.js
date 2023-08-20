import { Container, TituloContainer, Content } from "./styles";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import deleteIcon from "../../assets/delete-icon.svg";


export const TransacaoCard = ({ nome, valor, tipo, date, id, onDeleteTransaction}) => {

    const isVisible = useSelector(state => state.visibility.isVisible);
    const dataFormatada = format(new Date(date), "dd/MM/yyyy HH:mm");

    

    return (
        <Container tipo={tipo} >
            <TituloContainer>
                <h1>{nome}</h1>
            </TituloContainer>
            <Content>
                <h1>{dataFormatada}</h1>
                <h1 style={{fontSize: "2rem"}}>R$ {isVisible ? valor : "*****"}</h1>
            </Content>
            <img src={deleteIcon} alt="delete" onClick={() => onDeleteTransaction(id)} />
        </Container>
    )
} 