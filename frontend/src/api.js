import axios from 'axios';
import bcrypt from 'bcryptjs';

const api = axios.create({
    baseURL: 'http://localhost:5027',
});

export const autenticarUsuario = async (email, senha) => {
    try {
      const response = await api.post(`/User/login`, { email: email });
  
      // Verifica o código de status da resposta
      if (response.status === 404) {
        return false;
      }
  
      const { userId, passwordHash, name } = response.data;
  
      // Verifica se a senha fornecida corresponde à hash da senha
      const isPasswordValid = await bcrypt.compare(senha, passwordHash);
  
      if (isPasswordValid) {
        return {
          id: userId,
          usuario: name,
        };
      } else {
        return false;
      }
    } catch (error) {
        // Verifica se o erro foi causado por um usuário não encontrado
      if (error.response && error.response.status === 404) {
        return false;
      }
  
      console.error('Erro ao autenticar o usuário:', error);
      return false;
    }
  };
  

export const getUserAccounts = async (userId) => {
    const response = await api.get(`/api/Accounts/user/${userId}`);
    return response.data;
}

export const getAccount = async (accountId) => {
    const response = await api.get(`/api/Accounts/${accountId}`);
    return response.data;
}

export const postTransaction = async (transaction) => {
    try {
        const response = await api.post(`/api/Transactions`, transaction);
        return response.data; // retorna os dados da nova transação
    } catch (error) {
        console.error('Erro ao adicionar a transação:', error);
        throw error; // propaga o erro para ser tratado no componente
    }
}

export const deleteTransaction = async (transactionId) => {
    try {
        const response = await api.delete(`/api/Transactions/${transactionId}`);
        return response.data; // retorna os dados da nova transação
    } catch (error) {
        console.error('Erro ao adicionar a transação:', error);
        throw error; // propaga o erro para ser tratado no componente
    }
}

export const postAccount = async (account) => {
    try {
        const response = await api.post(`/api/Accounts`, account);
        return response.data; // retorna os dados da nova transação
    } catch (error) {
        console.error('Erro ao adicionar a transação:', error);
        throw error; // propaga o erro para ser tratado no componente
    }
}