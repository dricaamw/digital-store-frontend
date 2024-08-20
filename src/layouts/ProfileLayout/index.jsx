import { Outlet } from "react-router-dom";
import Submenu from "../../components/SubMenu";

const ProfileLayout = () => {
    return (
        <>
            <div className="flex min-h-screen items-center justify-center lg:justify-end lg:items-start pt-16 bg-light-gray-3">
                <div className="hidden lg:block">
                    <Submenu />
                </div>
                <Outlet />
            </div>
        </>
    );
}
 
export default ProfileLayout;