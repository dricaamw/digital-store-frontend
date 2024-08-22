import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import HeaderDashboard from "../../components/HeaderDashboard";

const DashboardLayoutContainer = styled.main``;

const DashboardLayout = () => {
    return (
        <DashboardLayoutContainer className="flex h-screen overflow-auto bg-slate-100">
            <HeaderDashboard />
            <section className="p-5 flex-1">
                <Outlet />
            </section>
        </DashboardLayoutContainer>
    );
}

export default DashboardLayout;