import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../redux/features/auth/authSlice";

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(logout());
        navigate("/login");
    }, [navigate]);

    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    );
};

export default Logout;
