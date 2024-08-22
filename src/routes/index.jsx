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
import MetodosPagamentos from "../components/MetodosPagamentos";

export const Paths = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/meu-perfil" element={<ProfileLayout />}>
                        <Route index element={<MeusPedidos />} />
                        <Route path="/meu-perfil/minhas-informacoes" element={<MinhasInformacoes />} />
                        <Route path="/meu-perfil/metodos-de-pagamentos" element={<MetodosPagamentos />} />
                    </Route>
                    
                    {/* <Route path="seu-caminho" element={seu componente } /> */}
                </Route>
                
                <Route path="/login" element={<Login/>} />
                <Route path="/cadastro-completo" element={<CadastroCompleto/>} />
                <Route path="/recuperar" element={<RecuperarSenha/>}/>
            </Routes>
        </BrowserRouter>
    );
}