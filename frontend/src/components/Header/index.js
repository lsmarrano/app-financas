import { HeaderContainer, Title, Navigation } from "./styles";
import logoutIcon from "../../assets/logout-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisibility } from "../../redux/visibility/visibilityActions";
import eyeOpenIcon from "../../assets/eye-open.svg";
import eyeClosedIcon from "../../assets/eye-closed.svg";
import { useNavigate } from 'react-router-dom';

export const Header = () => {

    const dispatch = useDispatch();
    const isVisible = useSelector(state => state.visibility.isVisible);
    const navigate = useNavigate();



    const handleToggleVisibility = () => {
        console.log('clicou');
        console.log(isVisible)
        dispatch(toggleVisibility());
    };

    const handleLogout = () => {
        // Limpe o local storage, se necessário
        localStorage.removeItem('isAuthenticated');
        
        // Despache a ação de logout
        dispatch({ type: 'LOGOUT_SUCCESS' });

        // Redirecione para a tela de login usando navigate
        navigate('/login');
    }
    return (
        <HeaderContainer>
            <Title>Aplicativo de Finanças</Title>
            <Navigation>
                <img src={isVisible ? eyeOpenIcon : eyeClosedIcon} alt="Toggle visibility" onClick={handleToggleVisibility} />
                <img src={logoutIcon} alt="Logout" onClick={handleLogout} />
            </Navigation>
        </HeaderContainer>
    );
};