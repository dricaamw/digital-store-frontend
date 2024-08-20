import { Outlet } from "react-router-dom";

const PageLayout = () => {
    return (
        <>
            {/* Componente Header */}
            <div className="w-full">
                <Outlet />
            </div>
            {/* Componente Footer */}
        </>
    );
}
 
export default PageLayout;