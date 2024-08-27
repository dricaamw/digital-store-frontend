import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PageLayout = () => {
    return (
        <>
            <Header />
            <div className="w-full">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default PageLayout;