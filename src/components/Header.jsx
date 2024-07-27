










import styled from "styled-components";
import { InputText } from 'primereact/inputtext';
import Button from '../components/buttons/Buttons.jsx';
import { Link } from "react-router-dom";
import { Badge } from 'primereact/badge';
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
    display: flex;
    block-size: 192px;
    inline-size: 100%;
    background-color: var(--white);
    & .bloco{
        margin: 34px 30px 29px 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        flex-wrap: wrap;
        inline-size: 993px;
        block-size: 129px;

        .digital-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: flex-start;
        block-size: 44px;
        margin-top: 4px;

        & img {
            margin: 5px 8px 6px 0;
        }

        & h1 {
            margin: 0;
            font-size: 34px;
            line-height: 44px;
            font-weight: 600;
            letter-spacing: 0.1px;
            color: var(--primary);
            inline-size: 212px;
        }
    }

        & .inp-bloco{
            display: flex;
            align-items: center;
            gap: 48px;
            align-self: flex-start;
            & .p-inputtext {
                inline-size: 559px;
                block-size: 60px;
                border-radius: 8px;
                padding: 0 24px 0 24px;
                background-color: rgba(71, 71, 71, 0.04);
                color: var(--dark-gray-3);
                border-color: transparent;
                &::placeholder {
                    color: var(--dark-gray-3);
                }
            }
            & .cadastre {
                width: 102px;
                height: 28px;
                color: var(--dark-gray-3);
                text-decoration: none;
            }
        }
        
        & .pages {
            display: flex;
            gap: 32px;
            margin-block-end: 1px;
            align-items: center;
            justify-content: center;
            align-self: flex-end;

            & a {
                @keyframes fade-in {
                    0% {
                        background-color: transparent;
                        width: 0%;
                    }
                    100% {
                        background-color: var(--primary);
                        width: 100%;
                    }
                }
                
                block-size: 29px;
                color: var(--dark-gray-3);
                transition-duration: 500ms;
                text-decoration: none;
                &[aria-current="page"] {
                    color: var(--primary);
                    transition-duration: 500ms;
                }
                &:not([aria-current="page"])::after {
                    content: "";
                    display: block;
                    border-radius: 2px;
                    width: 0%;
                    height: 2px;
                    background-color: transparent;
                    transition-duration: 500ms;
                    animation: in 500ms 1 reverse;
                }
                &[aria-current="page"]::after {
                    content: "";
                    display: block;
                    border-radius: 2px;
                    width: 100%;
                    height: 2px;
                    background-color: var(--primary);
                    animation: fade 500ms 1;
                }
                }
            }
        }

    Button {
        block-size: 40px;
        margin: 44px 70px 0 0;
    }

    .carrinho{
        margin-top: 47px;
        & .p-badge{
            /* position: ; */
            /* inset-inline-end: 100px; */
            /* inset-inline-start: 27px; */
            /* inset-block-end: 1px; */
        }
    }
`;

const whereNavLink = ({ isActive, isPending }) => {
    isPending ? "pending" : isActive ? "active" : ""
};

const Header = () => {
    return (
        <HeaderContainer>
            <div className="bloco">
                <div className="digital-logo">
                    <img src="Group.svg" />
                    <h1>Digital Store</h1>
                </div>
                <div className="inp-bloco">
                    <div className="input">
                        <InputText id="i" className="text-small" placeholder="Pesquisar..." />
                    </div>
                    <div className="cadastre">
                        <Link className="text-small" to="/" >Cadastre-se</Link>
                        {/* <Link className="text-small" to="end-point de cadastro simples" */}
                    </div>
                </div>
                <nav className="pages">
                    <NavLink to="/" className={whereNavLink} >Home</NavLink>
                    <NavLink to="/batata" className={whereNavLink} >Produtos</NavLink>
                    <NavLink to="/" className={whereNavLink} >Categorias</NavLink>
                    <NavLink to="/" className={whereNavLink} >Meus Pedidos</NavLink>
                    {/* <NavLink to="/POR A END-POINT AQUI" className={whereNavLink} >BATATA</NavLink> */}
                </nav>
            </div>
            <div>
                <Button
                    className="text-extra-small bold"
                    label="Login"
                    buttonType="primary-button"></Button>
            </div>
            <div className="carrinho">
                <img src="Buy.svg" />
                <Badge />
            </div>
        </HeaderContainer>
    );
};

export default Header;