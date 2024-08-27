import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Home from "../pages/Home";
import Login from "../components/Login";
import RecuperarSenha from "../EsqueciASenha";
import Cadastro from "../pages/Cadastro";
import CadastroCompleto from "../pages/CadastroCompleto";
import ProfileLayout from "../layouts/ProfileLayout";
import MeusPedidos from "../components/MeusPedidos";
import MinhasInformacoes from "../components/MinhasInformacoes";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import DashboardMarcas from "../pages/DashboardMarcas";
import Produtos from "../pages/Produtos";
import Categorias from "../pages/Categorias";
import FinalizarCompra from "../pages/FinalizarCompra.jsx";

export const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/meu-perfil" element={<ProfileLayout />}>
                        <Route path="/meu-perfil/meus-pedidos" element={<MeusPedidos />} />
                        <Route path="/meu-perfil/minhas-informacoes" element={<MinhasInformacoes />} />
                    </Route>
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/categorias" element={<Categorias />} />
                    <Route path="/meus-pedidos" element={<MeusPedidos />} />
                </Route>
                <Route path="/finalizar-compra" element={<FinalizarCompra />} />
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/dashboard/marcas" element={<DashboardMarcas />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro-completo" element={<CadastroCompleto />} />
                <Route path="/recuperar" element={<RecuperarSenha />} />
            </Routes>
        </BrowserRouter>
    );
}