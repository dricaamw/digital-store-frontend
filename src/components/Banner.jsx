











import styled from "styled-components";
import { default as But } from "./buttons/Buttons.jsx";
import { NavLink } from "react-router-dom";

const BannersBigWraperContainer = styled.div`
    overflow: hidden;
    background-color: var(--light-gray-3);
    width: 100vw;
    height: 662px;
    display: flex;
    position: relative;
    flex-direction: column;
    z-index: 0;

    @media (min-width: 768px) {
        height: 681px;
    }

    & .banners-wrapper {
        width: inherit;
        height: 616px;
        display: flex;
        flex-direction: row;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        overflow-x: hidden;

        @media (min-width: 768px) {
            height: 622px;
        }
    }

    & .banners-links{
        height: 12px;
        z-index: 2;
        display: flex;
        justify-content: space-between;
        align-self: center;
        width: 78px;
        position: absolute;
        bottom: 34px;

        @media (min-width: 768px) {

        }

        & a{
            display: flex;
            width: 12px;
            height: 12px;
            border-radius: 6px;
            transition: background-color ease 250ms;
            background-color: var(--light-gray-2);

            &:hover {
                background-color: var(--primary);
            }
        }
    }
`

const Banner1Container = styled.div`
    display: flex;
    position: relative;
    float: left;
    flex-direction: column;
    scroll-snap-align: start;
    overflow-y: hidden;
    flex: 1 0 100%;

    & .sapato{
        width: calc(100% - 5px - 43px);
        height: fit-content;
        order: -1;
        margin: 12px 43px 0 5px;

        @media (min-width: 768px) {
            position: absolute;
            margin: 0;
            right: 91px;
            top: 10px;
            width: min(62%, 886px);
            object-fit: scale-down;
        }
    }

    & .pirilampos{
        position: absolute;
        top: 20px;
        right: 0;
        transform: translateX(50%);
        clip-path: rect(0 50% 100% 0);

        @media (min-width: 768px) {
            top: 78px;
            right: 37px;
            transform: none;
        }
    }
    
    & .propag{
        display: flex;
        flex-direction: column;
        text-align: center;
        color: black;
        justify-content: start;
        width: calc(100vw - 40px);
        overflow-wrap: normal;
        margin: 0 20px;
        order: 1;

        @media (min-width: 768px) {
            width: 510px;
            height: 352px;
            text-align: start;
            margin: 124px 0 0 100px;
        }

        & h4{
            margin: 0;
            color: var(--primary);

            @media (min-width: 768px) {
                color: var(--warning)
            }
        }

        & h2 {
            color: var(--dark-gray);
            font-family: "Inter";
            font-weight: 800px;
            font-size: 40px;
            line-height: 50px;
            letter-spacing: 1px;
            margin: 10px 0 20px 0;

            @media (min-width: 768px) {
                font-size: 64px;
                line-height: 66px;
                margin: 20px 0;
            }
        }

        & p{
            margin: 0;
            color: var(--dark-gray-2);
        }

        & button{
            height: 48px;
            width: 100%;
            margin-top: 40px;

            @media (min-width: 768px) {
                width: 220px;
            }
        }
    }
`;

const Banner = (props) => {

    return (
        <Banner1Container id={props.id}>
            <div className="propag">
                <h4 className="text-small bold">Melhores ofertas personalizadas</h4>
                <h2>Queima de stoque Nike 🔥</h2>
                <p className={window.innerWidth <= 768 ? "text-extra-small" : "text-medium"}>{props.textinho}</p>
                <But buttonType="primary-button" label="Clique Aqui" className={"text-small bold"} />
            </div>
            <img className="sapato" src="White-Sneakers.svg" />
            {/* <img className="pirilampos" src="Ornament 11.svg" /> */}
        </Banner1Container>
    );
}

const Banners = () => {
    return (
        <BannersBigWraperContainer>

            <div className="banners-wrapper">
                <Banner id="banner1" textinho="bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                <Banner id="banner2" textinho="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
                <Banner id="banner3" />
                <Banner id="banner4" />
            </div>

{/* Usar UL com 4 LIs, assim evitando o uso de links desnecessários */}

            <nav className="banners-links">
                <NavLink to="#banner1"/>
                <NavLink to="#banner2"/>
                <NavLink to="#banner3"/>
                <NavLink to="#banner4"/>
            </nav>

        </BannersBigWraperContainer>
    );
}

export default Banners;