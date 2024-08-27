// import "primereact/resources/themes/lara-light-pink/theme.css";
import { styled } from "styled-components";

const DashboardMarcasContainer = styled.div`

`;

const DashboardMarcas = () => {
    return (
        <DashboardMarcasContainer>
            <h3 className="flex justify-between align-middle">
                Marcas
                <button className="border-rounded-md bg-primary-1 p-2 rounded-md text-white">nova marca</button>
            </h3>
            
        </DashboardMarcasContainer>
    );
}
 
export default DashboardMarcas;