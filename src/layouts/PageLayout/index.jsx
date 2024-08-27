import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const PageLayout = () => {
    return (
        <>
            {/* Componente Header */}
            <div className="w-full">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
 
export default PageLayout;