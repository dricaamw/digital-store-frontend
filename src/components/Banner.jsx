import styled from "styled-components";
import Button from "./buttons/Buttons.jsx"

const Banner1Container = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 681px;
    float: left;

    & img{
    }
    
    & .propag{
        display: flex;
        flex-direction: column;
        text-align: left;
        width: 510px;
        height: 352px;
        color: black;
        justify-content: start;

        & h4{
            margin: 0;
            color: var(--warning)
        }

        & h2 {
            color: var(--dark-gray);
            font-family: "Inter";
            font-weight: 800px;
            font-size: 64px;
            line-height: 66px;
            letter-spacing: 1px;
            margin: 20px 0;
        }

        & p{
            margin: 0;
            color: var(--dark-gray-2)
        }

        & button{
            height: 48px;
            width: 220px;
            margin-top: 40px;
        }
    }
`;

const Banner2Container = styled.div`

`


const Banner1 = () => {
    return (
        <Banner1Container>
            <div className="propag">
                <h4 className="text-small bold">Melhores ofertas personalizadas</h4>
                <h2>Queima de stoque Nike</h2>
                <p className="text-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <Button buttonType="primary-button" label="Clique Aqui" className={"text-small bold"} />
            </div>
            <img src="White-Sneakers.svg" alt="Sapatão" />

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
        <>
            <Banner1 />
        </>
    );
}

export default Banners;