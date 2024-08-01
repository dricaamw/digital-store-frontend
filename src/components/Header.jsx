










import styled from "styled-components";
import { default as But } from '../components/buttons/Buttons.jsx';
import { Link, useLocation, NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 192px;
    width: 100vw;
    height: 66.5px;
    margin: auto;

    .container{
        background-color: var(--white);
        padding: 20px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        
        .carrinho, .out-search ,nav.links, .fundo, #menu-sidebar, #menu-sidebar + label, .digital-logo, .search-buy{
            z-index: 4;
        }

        .fundo{
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 66.5px;
            background-color: inherit;
        }

        .overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition-duration: 500ms;
        }

        &:has(input#menu-sidebar:checked){
            .overlay {
                opacity: 1;
            }
        }

        &  #menu-sidebar {
            display: none;
        }

        & label{
            display: flex;
            width: 24px;
            height: 24px;

            & img {
                margin: 0;
                width: 24px;
                height: 24px;
            }
        }

        & #menu-sidebar:checked ~ .links{
            transform: translateX(0);
            opacity: 1;
        }

        /* & .inp-bloco{
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
            & .cadastre {
                inline-size: 102px;
                block-size: 28px;
                color: var(--dark-gray-3);
                text-decoration: none;
            }
        } */
            
        & nav.links{
            z-index: 3;

            & {
                display: flex;
                flex-direction: column;
                gap: 10px;
                align-items: flex-start;
                position: fixed;
                top: 66.5px;
                left: 0px;
                background-color: var(--white);
                height: calc(100vh - 66.5px);
                width: 308px;
                padding: 30px;
                box-shadow: 3px 2px 5px rgba(0, 0, 0, 0.1);
                z-index: 5;
                transition: all 500ms;
                transform: translateX(-70%);
                opacity: 0;
    
                & a {
                    block-size: 29px;
                    color: var(--dark-gray-3);
                    text-decoration: none;
    
                    &[aria-current="page"] {
                        color: var(--primary);
                    }

                    &:not([aria-current="page"])::after {
                        content: "";
                        display: block;
                        border-radius: 2px;
                        width: 0%;
                        height: 2px;
                        margin-top: 5px;
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
                    }
                }
            }
        }

        & .digital-logo {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 138px;
            height: 24px;
            margin-left: 33px;
    
            & img {
                margin: 2.73px 0 3.27px 0;
                width: 18px;
                height: 18px;
    
                @media (min-width: 768px) {
                    margin-left: auto;
                    width: 33px;
                    height: 33px;
                    margin: 5px 0 6px 0;
                }
            }
    
            & h1 {
                margin: 0;
                width: auto;
                font-size: 19.85px;
                line-height: 24px;
                font-weight: 600;
                letter-spacing: -0.01rem;
                color: var(--primary);
    
                @media (min-width: 768px) {
                    font-size: 36px;
                    line-height: 44px;
                    letter-spacing: 1px;
                }
            }
            @media (min-width: 768px) {
                height: 44px;
            }
        }
    
        Button {
            block-size: 40px;
            margin: 44px 70px 0 0;
        }



        & .search-buy{
            display: flex;
            position: absolute;
            top: -13.5px;
            left: 0;
            width: 100vw;
            height: 80px;
            justify-content: space-between;
            z-index: 3;
            
            & #search-buy {
                display: none;
            }

            & .MenuTopBarSearch{
                display: flex;
                align-items: center;
                gap: 10px;
                position: absolute;
                background-color: var(--white);
                justify-content: flex-end;
                padding: 0 40px 20px 20px;
                
                & input{
                    width: 315px;
                    height: 60px;
                    padding: 16px 20px;
                    border: 0;
                    border-radius: 8px;
                    background-color: rgba(71, 71, 71, 0.4);

                    &:focus{
                        outline: none;
                    }
                }
                & img{
                    position: absolute;
                    margin-right: 20px;
                }
            }
        }
    
        .carrinho{
            position: relative;

            & #carrinho {
                display: none;
            }

            & span.p-badge{
                clip-path: circle(8.5px at center);
                display: flex;
                position: absolute;
                top: -5px;
                right: -11px;
                background-color: var(--error);
                height: 17px;
                width: 17px;
                color: var(--white);
                justify-content: center;
                align-items: center;
            }
        }
    }
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
        <div className="input-drop">
            <input type="text" placeholder="Pesquisar produto..." />
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

const Links = () => {
    return (
        <nav className="links">
            <NavLink to="/" className={whereNavLink} >Home</NavLink>
            <NavLink to="/produtos" className={whereNavLink} >Produtos</NavLink>
            <NavLink to="/categorias" className={whereNavLink} >Categorias</NavLink>
            <NavLink to="/meus-pedidos" className={whereNavLink} >Meus Pedidos</NavLink>
            {/* <NavLink to="/POR A END-POINT AQUI" className={whereNavLink} >BATATA</NavLink> */}
        </nav>
    )
}

const Filters = () => {
    return (
        <>

        </>
    )
}

const MenuSideBarButton = () => {
    return (
        <>
            <input type="checkbox" id="menu-sidebar" />
            <label htmlFor="menu-sidebar">
                <img src="Menu.svg" />
            </label>
        </>
    )
}

const Pages = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname === "/pesquisa" ? <Filters /> : <Links />}
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
            buttonType="primary-button" />
    )
}

const Carrin = () => {
    return (
        <label className="carrinho">
            <input type="checkbox" id="carrinho" />
            <img src="Buy.svg" />
            <span className="p-badge">2</span>
        </label>
    )

}

const Header = () => {

    return (
        <HeaderContainer>
            <div className="container">
                <div className="fundo"></div>
                <label className="overlay" htmlFor="menu-sidebar"></label>
                <MenuSideBarButton />
                <Pages />
                <DigitalLogo />

                <label className="out-search" htmlFor="search-buy">
                    <img src="Search.svg" />
                </label>

                <div className="search-buy">
                    <input type="checkbox" id="search-buy" />
                    <div className="MenuTopBarSearch">
                        <input type="text" className="text-small" placeholder="Pesquisar produto..." />
                        <img src="Search.svg" />
                    </div>
                </div>

                <Carrin />
            </div>
        </HeaderContainer>
    );
};

export default Header;