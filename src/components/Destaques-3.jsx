














import axios from "axios";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./buttons/Buttons";

const Highlights3WrapperContainer = styled.div`

`

const Card = () => {

    const data = useRef();

    useEffect (() => {
        const fecthData = async () => {

            const response = await axios.get("http://localhost:3000/sapatos")
            data.current = response.data;
            console.log(data.current[0]);
        }

        fecthData();
    }, []);

    return (
        <div className="card">
            <Link to="/produto/:id">
                <img src="" alt="" />
                <h2></h2>
                <p></p>
                <Button buttonType="primary-button" label="BATATA" />
            </Link>
        </div>
    );
}

const Destaques3 = () => {
    return (
        <Highlights3WrapperContainer>
            <div className="colecoes">
                <p></p>
                <Link></Link>
            </div>
            <div className="cards">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </Highlights3WrapperContainer>
    );
}

export default Destaques3;