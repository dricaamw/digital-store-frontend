














import axios from "axios";
import { Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Highlights3WrapperContainer = styled.div`
*{
    margin: 0;
    padding: 0;
}

    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-inline: 20px;
    margin-top: 80px;

    & .colecoes{
        display: flex;
        justify-content: space-between;
        align-items: center;

        & .colecoes-dest{
            color: var(--dark-gray-2)
        }

        & a{
            width: 99px;
            height: 24px;
            display: flex;
            justify-content: space-between;
            text-decoration: none;
            color: var(--primary);

            & .writed{
                text-align: center
            }

            & .pi-arrow-right{
                display: flex;
                align-items: center;

                &::before{
                    font-size: 18.75px;
                    height: 24px;
                }
            }
        }
    }

    & .cards {
        display: grid;
        gap: 40px 9px;
        grid-template-columns: repeat(auto-fit, 163px);
        grid-template-rows: repeat(auto-fit, 264px);

        & .card{
            display: flex;
            flex-direction: column;
            justify-content: center;

            & .img-disc{
                position: relative;

                & .discount{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 88px;
                    height: 32px;
                    border-radius: 29px;
                    color: var(--dark-gray-2);
                    padding: 4px 11px;
                }
            }

            & .texts{
                display: flex;
                flex-direction: column;
                align-items: left;

                & .prod-type{
                    color: var(--light-gray);
                }

                & .prod-name{
                    color: var(--dark-gray-2);
                }

                & .prices{
                    display: flex;
                    justify-content: space-between;
                    width: 101px;
                }
            }
        }
    }
`;

const Card = () => {

    const [data, setData] = useState();

    useEffect(() => {
        const fecthData = async () => {

            const response = await axios.get("http://localhost:3000/sapatos");
            setData(response.data);

        }

        fecthData();
    }, []);

    return (
        data ? (
            <div className="card">
                <div className="img-disc">
                    <div className="discount">
                        <p className="percentage text-extra-small bold">{data[0].sapato_discount}%</p>
                        <p className="text-extra-small bold">OFF</p>
                    </div>
                    <img src={data[0].sapato_image} />
                </div>

                <div className="texts">
                    <p className="prod-type text-tinny bold">{data[0].sapato_type}</p>
                    <h3 className="prod-name text-extra-small">{data[0].sapato_name}</h3>
                    <div className="prices">
                        <p className="origin-price text-extra-small">${data[0].sapato_value}</p>
                        <p className="now-price text-extra-small">${(data[0].sapato_value * data[0].sapato_discount) / 100}</p>
                    </div>
                </div>
            </div>
        ) : (
            <p>Loading...</p>
        )
    )
}

const Destaques3 = () => {
    return (
        <Highlights3WrapperContainer>
            <div className="colecoes">
                <h3 className={`colecoes-dest bold ${window.innerWidth >= 768 ? "text-large" : "text-small"}`}>Coleções em destaque</h3>
                <Link to="/produtos" className="text-extra-small">
                    <p className="writed">Ver todos</p>
                    <p className="pi-arrow-right"></p>
                </Link>
            </div>
            <div className="cards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </Highlights3WrapperContainer>
    );
}

export default Destaques3;