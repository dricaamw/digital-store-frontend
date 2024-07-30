import { Outlet } from "react-router-dom";

const PageLayout = () => {
    return (
        <>
            {/* Componente Header */}
            <Outlet />
            {/* Componente Footer */}
        </>
    );
}
 
export default PageLayout;