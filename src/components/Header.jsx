










import styled from "styled-components";
import { InputText } from 'primereact/inputtext';
import { default as But } from '../components/buttons/Buttons.jsx';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
    display: flex;
    max-width: 1440px;
    max-height: 192px;
    width: 1440px;
    height: 192px;
    background-color: var(--white);
    margin: auto;

        & .bloco{
        margin: 34px 30px 29px 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 993px;
        max-height: 129px;
        width: 100%;
        height: 100%;

        .digital-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: flex-start;
        width: 253px;
        height: 44px;
        margin-top: 4px;

        @media (max-width: 768px) {
            width: 138px;
            height: 24px;
            margin-block-start: 4px;
        }

        & img {
            margin: 5px 8px 6px 0;
            
            @media (max-width: 768px) {
                width: 18px;
                height: 18px;
                margin: 2.73px 4.36px 3.27px 0;
            }
        }

        & h1 {
            margin: 0;
            font-size: 34px;
            line-height: 44px;
            font-weight: 600;
            letter-spacing: 1px;
            color: var(--primary);

            @media (max-width: 768px) {
                width: auto;
                font-size: 18px;
                line-height: 24px;
                letter-spacing: 0.7px;
            }
        }
    }

        & .inp-bloco{
            display: flex;
            align-items: center;
            gap: 48px;
            align-self: flex-start;
            position: relative;

            & > div > img {
                position: absolute;
                top: 18px;
                right: 24%
            }
            
            & .p-inputtext {
                display: flex;
                inline-size: 559px;
                block-size: 60px;
                border-radius: 8px;
                padding: 0 24px 0 24px;
                background-color: rgba(71, 71, 71, 0.4);
                color: var(--dark-gray-3);
                border-color: transparent;
                position: relative;
                &::placeholder {
                    color: var(--dark-gray-3);
                }
                
            }
            & .cadastre {
                inline-size: 102px;
                block-size: 28px;
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
                        background-color: var(--primary);
                        inline-size: 0%;
                    }
                    100% {
                        inline-size: 100%;
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
                    inline-size: 0%;
                    block-size: 2px;
                    margin-block-start: 5px;
                    background-color: transparent;
                    transition-duration: 500ms;
                }
                &[aria-current="page"]::after {
                    content: "";
                    display: block;
                    border-radius: 2px;
                    inline-size: 100%;
                    block-size: 2px;
                    margin-block-start: 5px;
                    background-color: var(--primary);
                    transition-duration: 500ms;
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
        margin-block-start: 47px;
        position: relative;
        & span.p-badge{
            display: flex;
            position: absolute;
            inset-block-start: -5px;
            inset-inline-end: -8px;
            background-color: var(--error);
            min-inline-size: 5px;
            inline-size: 17px;
            block-size: 17px;
            color: var(--white);
            /* font-weight: 700; */
            border-radius: 8px;
            justify-content: center;
            align-items: center;
        }
    }
    /* @media (min-inline-size: 370px){
        .bloco{
            inline-size: 138px;
        }
    } */
`;

const DigitalLogo = () => {
    return (
        <div className="digital-logo">
            <img src="Group.svg" />
            <h1>Digital Store</h1>
        </div>
    );
}

const Input = () => {
    return (
        <div className="input">
            <InputText id="i" className="text-small" placeholder="Pesquisar..." />
        </div>
    )
}


const Cadastre = () => {
    return (
        <div className="cadastre">
            <Link className="text-small" to="/" >Cadastre-se</Link>
            {/* <Link className="text-small" to="end-point de cadastro simples" */}
        </div>
    )
}

const Pages = () => {
    return (
        <>
            <NavLink to="/" className={whereNavLink} >Home</NavLink>
            <NavLink to="/batata" className={whereNavLink} >Produtos</NavLink>
            <NavLink to="/" className={whereNavLink} >Categorias</NavLink>
            <NavLink to="/" className={whereNavLink} >Meus Pedidos</NavLink>
            {/* <NavLink to="/POR A END-POINT AQUI" className={whereNavLink} >BATATA</NavLink> */}
        </>
    )
}

const whereNavLink = ({ isActive, isPending }) => {
    isPending ? "pending" : isActive ? "active" : ""
};

const Button = () => {
    return (
        <But
            className="text-small bold"
            label="Comprar"
            buttonType="primary-button"></But>
    )
}

const Header = () => {
    return (
        <HeaderContainer>
            <div className="bloco">
                <DigitalLogo />
                <div className="inp-bloco">
                    <div>
                        <Input />
                        <img src="Search.svg" />
                    </div>
                    <Cadastre />
                </div>
                <nav className="pages">
                    <Pages />
                </nav>
            </div>
            <Button />
            <div className="carrinho">
                <img src="Buy.svg" />
                <span className="p-badge">2</span>
            </div>
        </HeaderContainer>
    );
};

export default Header;