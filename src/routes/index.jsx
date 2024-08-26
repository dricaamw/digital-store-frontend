import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Categorias from "../pages/Categorias";
import MeusPedidos from "../pages/MeusPedidos";
import FinalizarCompra from "../pages/FinalizarCompra.jsx";

export const Paths = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/categorias" element={<Categorias />} />
                    <Route path="/meus-pedidos" element={<MeusPedidos />} />
                    <Route path="/finalizar-compra" element={<FinalizarCompra />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}