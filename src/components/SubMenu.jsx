import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const SubmenuContainer = styled.div`
    & .sub-menu{
        width: 334px;
        background-color: white;
        border-radius: 5px;
        padding: 30px;
    }
    & .sub-menu ul{
        list-style: none;
    }
    & .sub-menu ul li{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    & .sub-menu li a{
        color: #474747;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.75px;
        text-decoration: none;
        font-weight: bold;
    }
    & .sub-menu li a:hover, & .sub-menu li a.active{
        color: #C92071;
    }
`;

const Submenu = () => {
    return (
        <SubmenuContainer>
            <div className="sub-menu">
                <h3 className="text-lg leading-[22px] tracking-[0.75px] font-bold text-dark-gray-2">Meu perfil</h3>
                <ul>
                    <li>
                        <NavLink to="/meu-perfil">Meus pedidos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/meu-perfil/minhas-informacoes">Minhas informações</NavLink>
                    </li>
                    <li>
                        <NavLink to="/meu-perfil/metodos-de-pagamentos">Métodos de pagamentos</NavLink>
                    </li>
                </ul>
            </div>
        </SubmenuContainer>
    );
}

export default Submenu;