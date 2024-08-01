import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/Home";

export const Paths = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/categorias" element={<Categorias />} />
                    <Route path="/meus-pedidos" element={<MeusPedidos />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}