// import OfertaEspecial from "../components/OfertaEspecial";
import Banners from "../components/Banner"
import Destaques1 from "../components/Destaques-1";
import Destaques2 from "../components/Destaques-2";
import Destaques3 from "../components/Destaques-3";

const Home = () => {
    return (
        <>
            {/* Components de cima */}
            {/* <OfertaEspecial /> */}
            {/* Components de baixo */}
            <Banners />
            <Destaques1 />
            <Destaques2 />
            <Destaques3 />
        </>
    );
}

export default Home;