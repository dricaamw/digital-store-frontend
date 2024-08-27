import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const HeaderDashboardContainer = styled.header`

`;

const HeaderDashboard = () => {
    return (
        <HeaderDashboardContainer className="w-2 h-full bg-white">
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/dashboard'}>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/usuarios'}>Usuários</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/marcas'}>Marcas</NavLink>
                    </li>
                </ul>
            </nav>
        </HeaderDashboardContainer>
    );
}
 
export default HeaderDashboard;