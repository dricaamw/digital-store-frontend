











import styled from "styled-components";
import { default as But } from "./buttons/Buttons.jsx";
import { NavLink } from "react-router-dom";

const Banner1Container = styled.div`
    display: flex;
    position: relative;
    float: left;
    flex-direction: column;
    overflow: hidden;

    & .sapato{
        width: calc(100% - 5px - 43px);
        height: fit-content;
        order: 0;
        margin: 12px 43px 0 5px;
    }

    & .pirilampos{
        position: absolute;
        top: 20px;
        right: -70px;
    }
    
    & .propag{
        display: flex;
        flex-direction: column;
        text-align: center;
        color: black;
        justify-content: start;
        margin: 0 20px;
        order: 1;

        & h4{
            margin: 0;
            color: var(--primary)
        }

        & h2 {
            color: var(--dark-gray);
            font-family: "Inter";
            font-weight: 800px;
            font-size: 40px;
            line-height: 50px;
            letter-spacing: 1px;
            margin: 10px 0 20px 0;
        }

        & p{
            margin: 0;
            color: var(--dark-gray-2);
        }

        & button{
            height: 48px;
            width: 100%;
            margin-top: 40px;
        }
    }
`;

const Banner2Container = styled.div`
    width: 100%;
    height: 128px;
`

const BannersWraperContainer = styled.div`
    background-color: var(--light-gray-3);
    width: 100%;
    height: 662px;
    display: flex;
    position: relative;
    flex-direction: column;

    & .banners-links{
        height: 12px;
        z-index: 2;
        display: flex;
        justify-content: space-between;
        align-self: center;
        margin-top: 40px;
        width: 78px;

        & a{
            display: flex;
            gap: 10px;
            width: 12px;
            height: 12px;
            border-radius: 6px;
            transition-duration: 300ms;
            background-color: var(--light-gray-2);

            &:active{
                background-color: var(--primary);
            }
        }
    }
`

const Banner1 = () => {
    return (
        <Banner1Container id="banner1">
            <div className="propag">
                <h4 className="text-small bold">Melhores ofertas personalizadas</h4>
                <h2>Queima de stoque Nike 🔥</h2>
                <p className="text-extra-small">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaLorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <But buttonType="primary-button" label="Clique Aqui" className={"text-small bold"} />
            </div>
            <img className="sapato" src="White-Sneakers.svg" />
            <img className="pirilampos" src="Ornament 11.svg" />
        </Banner1Container>
    );
}

const Banner2 = () => {
    return (
        <>

        </>
    );
}

const Banners = () => {
    return (
        <BannersWraperContainer>
            <Banner1 />
            <nav className="banners-links">
                <a to="#banner1"></a>
                <a to="#banner2"></a>
                <a to="#banner3"></a>
                <a to="#banner4"></a>
            </nav>
        </BannersWraperContainer>
    );
}

export default Banners;