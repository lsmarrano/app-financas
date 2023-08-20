import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAccount } from '../../api';
import { Container, TituloContainer, TituloContent, TransacoesContainer, TransacoesContent, NovaTransacaoContainer, ModalContainer, FormContainer, BotoesContainer } from './styles';
import arrowLeft from '../../assets/arrow-left.svg'
import { TransacaoCard } from '../../components/TransacaoCard';
import { postTransaction } from '../../api';
import { useSelector } from 'react-redux';
import { deleteTransaction } from '../../api';


export const Conta = () => {

    const { id } = useParams();

    const [account, setAccount] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [transactionType, setTransactionType] = useState('Receita'); 

    const isVisible = useSelector(state => state.visibility.isVisible);



    useEffect(() => {
        getAccount(id).then((response) => {
            setAccount(response);
            console.log(response);
        });
    }, [id]);

    const handleNavigateBack = () => {
        window.history.back();
    }

    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleDateChange = (event) => {
        const dateObject = new Date(event.target.value);
        const date = dateObject.toISOString();
        setDate(date);
    };

    const addTransaction = async () => {
        const newTransaction = {
            amount: parseFloat(amount), // Certifique-se de que a quantia seja um número
            date: date, // A data no formato correto
            description: description, // Descrição da transação
            isExpense: transactionType === 'Despesa', // Coloque a lógica para determinar se é uma despesa ou receita
            accountId: parseInt(id), // ID da conta, extraída dos parâmetros da rota
        };
    
        try {
            const addedTransaction = await postTransaction(newTransaction);
            console.log('Transaction adicionada:', addedTransaction);
            // Fechar o modal e atualizar a lista de transações aqui
            closeModal();
            window.location.reload();
            // Você pode atualizar o estado da conta com a nova transação
        } catch (error) {
            console.error('Erro ao adicionar a transação:', error);
            console.log(newTransaction)
            // Você pode mostrar uma mensagem de erro ao usuário aqui
        }
    };

    const handleDeleteTransaction = async (transactionId) => {
        const response = await deleteTransaction(transactionId);

        window.location.reload();
        console.log(response);
    };


    

    return (
        <Container>
            <TituloContainer>
                <img src={arrowLeft} alt='Voltar' onClick={handleNavigateBack} />
                <TituloContent>
                    <h1>{account.name}</h1>
                    <h1>Saldo: R${isVisible ? account.balance : "*****"}</h1>
                </TituloContent>
            </TituloContainer>
            <TransacoesContainer>
                <NovaTransacaoContainer>
                    <h1>Suas Transações:</h1>
                    <button onClick={openModal}>Adicionar Transação</button>
                </NovaTransacaoContainer>

                

                {isModalOpen && (
                    <ModalContainer>
                    
                        <FormContainer>
                            <h1>Nova Transação</h1>
                            <input placeholder="Descrição" onChange={handleDescriptionChange}/>
                            <input placeholder="Valor" onChange={handleAmountChange}/>
                            <input placeholder="Data" type='datetime-local' onChange={handleDateChange}/>

                            <select onChange={(e) => setTransactionType(e.target.value)} value={transactionType}>
                                <option value="Receita">Receita</option>
                                <option value="Despesa">Despesa</option>
                            </select>

                            <BotoesContainer>
                                <button onClick={closeModal}>Fechar</button>
                                <button onClick={addTransaction}>Adicionar</button>
                            </BotoesContainer>
                            </FormContainer>
                    </ModalContainer>
                )}
                
                <TransacoesContent>
                {account.transactions?.$values?.length > 0 ? (
                    account.transactions.$values.map((transaction) => (
                        <TransacaoCard
                            id={transaction.id}
                            nome={transaction.description} 
                            valor={transaction.amount} 
                            tipo={transaction.isExpense ? "Despesa" : "Receita"} 
                            date={transaction.date}
                            onDeleteTransaction={handleDeleteTransaction}
                        />
                    ))
                ) : (
                    <p>Esta conta ainda não tem nenhuma transação, clique em Adicionar Transação para começar a usar sua conta.</p>
                )} 
                </TransacoesContent>
            </TransacoesContainer>

        </Container>
    )
}