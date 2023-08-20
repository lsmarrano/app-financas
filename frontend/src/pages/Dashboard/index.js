import { useEffect } from 'react';
import styles, { Container, TituloContainer, ContasContainer, ModalContainer, FormContainer, BotoesContainer } from './styles';
import { getUserAccounts, postAccount } from '../../api';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardContainer } from '../../components/ContaCard/styles';
import { ContaCard } from '../../components/ContaCard';
import { NewContaCard } from '../../components/NewContaCard';
import { useNavigate } from 'react-router-dom';



export function Dashboard() {

    const [accounts, setAccounts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newAccountName, setNewAccountName] = useState('');
    const userId = useSelector(state => state.auth.id);
    const user = useSelector(state => state.auth.user);

    const navigate = useNavigate();

    useEffect(() => {
        

        console.log(userId);
        getUserAccounts(userId).then((response) => {
            setAccounts(response);
            console.log(response);
        });
    }, [userId]);

    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleNewAccountNameChange = (event) => {
        setNewAccountName(event.target.value);
    };

    const addAccount = async () => {
        const newAccount = {
            name: newAccountName,
            userId: userId,
        };

        await postAccount(newAccount);
        closeModal();
        setNewAccountName('');
        getUserAccounts(userId).then((response) => {
            setAccounts(response);
            console.log(response);
        });
    };

    const handleClick = (id) => {
        
            navigate(`/account/${id}`);
        
    }
        
    return (
        <Container>
            <TituloContainer>
                <h1>Olá, {user}</h1>
                <h1>Selecione uma conta:</h1>
            </TituloContainer>
            
            <ContasContainer>
                {accounts.$values?.map((account) => (
                    <ContaCard key={account.id} nome={account.name} saldo={account.balance} onClick={() => handleClick(account.id)}/>
                ))}
                <NewContaCard onClick={openModal}/>
            </ContasContainer>

            {isModalOpen && (
                    <ModalContainer>
                    
                        <FormContainer>
                            <h1>Nova Conta</h1>
                            <input placeholder="Nome da conta" onChange={handleNewAccountNameChange}/>

                            <BotoesContainer>
                                <button onClick={closeModal}>Fechar</button>
                                <button onClick={addAccount}>Adicionar</button>
                            </BotoesContainer>
                            </FormContainer>
                    </ModalContainer>
                )}
    

        </Container>
    )
}