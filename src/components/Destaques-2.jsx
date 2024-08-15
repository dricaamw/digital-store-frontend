import styled from "styled-components";

const Highlights2WrapperComponent = styled.div`
    & * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    margin-top: 60px;
    display: flex;
    flex-direction: column;
    width: 100%;

    & .colecoes {
        color: var(--dark-gray-2);
        width: fit-content;
        margin-bottom: 20px;
    }

    & .cards{
        display: grid;
        grid-template-columns: repeat(5, minmax(92px, 1fr));
        grid-template-rows: repeat(1, minmax(125px, 1fr));
        overflow-x: auto;
        gap: 19px;

        & .card {
            & .image-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 92px;
                border-radius: 50%;

                & img {
                    width: 57px;
                    object-fit: cover;
                }
            }
        }
    }
`

const HighlightCard = (props) => {
    return (
        <div className="card">
            <div className="image-wrapper">
                <img src={`${props.img}`}/>
            </div>
            <p className="text-small">{props.title}</p>
        </div>
    );
};

const Destaques2 = () => {
    return (
        <Highlights2WrapperComponent>
            <h3 className="colecoes text-small bold">Coleções em destaque</h3>
            <div className="cards">
                <HighlightCard img="Highlight-2-shirt.svg" title="Camisetas" />
                <HighlightCard img="Highlight-2-pants.svg"  />
                <HighlightCard img="Highlight-2-pants.svg" />
                <HighlightCard img="Highlight-2-headphones.svg" />
                <HighlightCard img="Highlight-2-shoe.svg" />
            </div>
        </Highlights2WrapperComponent>
    );
}

export default Destaques2;