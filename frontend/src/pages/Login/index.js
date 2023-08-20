import { Button, Container, Form, Input, Logo, TitleContainer } from './styles';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { autenticarUsuario, getUsuarioByEmail } from '../../api';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/auth/authActions';


export const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(usuario)
        const autenticado = await autenticarUsuario(usuario, senha);
        console.log(autenticado)

        if (autenticado) {
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: {
                  id: autenticado.id,
                  user: autenticado.usuario,
                },
              });
              alert('Login realizado com sucesso');
                navigate('/dashboard');
            } else {
              alert('Usuário ou senha inválidos');
            }
    };

    

    const handleUsuario = (e) => {
        setUsuario(e.target.value);
    };

    const handleSenha = (e) => {
        setSenha(e.target.value);
    };

    return (
        <Container>
            <Form onSubmit={handleLogin}>
                <TitleContainer>
                    <h1>Aplicativo de Finanças</h1>
                    
                </TitleContainer>
                <Input placeholder="Usuário" onChange={handleUsuario} />
                <Input placeholder="Senha" type='password' onChange={handleSenha}/>
                <Button type="submit">Entrar</Button>
                
            </Form>
        </Container>
    );
};