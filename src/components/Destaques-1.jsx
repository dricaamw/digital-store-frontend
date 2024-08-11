








import styled from "styled-components";
import Button from "./buttons/Buttons";



const Highlights1WrapperComponent = styled.div`
* {
    margin: 0;
}

    display: flex;
    flex-direction: column;
    margin: 42px 20px 0 20px;
    gap: 10px;

    & .colections{
        color: var(--dark-gray-2);
        align-self: flex-start;
    }

    & .cards-container{
        display: grid;
        grid-template-rows: repeat(3, 212px);
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 10px;

        & .item{
            background-color: #D8E3F2;
            border-radius: 8px;
            border: 3px solid var(--light-gray);
        }

        & .discount{
            background-color: #E7FF86;

            & p{
                color: var(--dark-gray-2);
            }
        }

        & h3{
            color: var(--dark-gray);
        }
    }

`


const Destaques1 = () => {
    return (
        <Highlights1WrapperComponent >
            <h3 className="colections text-small bold">Coleções em Destaque</h3>
            <div className="cards-container">
                <div className="item item-1">
                    <div className="discount">
                        <p className="text-extra-small bold">30% OFF</p>
                    </div>
                    <h3 className="keynote title-small">
                        Novo Beats Bass
                    </h3>
                    <Button buttonType="secondary-button" label={"Comprar"} className={"text-small bold"}></Button>
                </div>
                <div className="item item-2"></div>
                <div className="item item-3"></div>
            </div>
        </Highlights1WrapperComponent>
    );
}

export default Destaques1;