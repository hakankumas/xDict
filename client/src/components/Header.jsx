import React from "react";
import { Link } from "react-router-dom";
function Header({ sessionData }) {
    // console.log("Header is rendered.");
    return (
        <div className="header">
            <div className="section1">
                <Link className="link home" to={sessionData ? "/user/" : "/"}>
                    Home
                </Link>
                <Link className="link" to="/about">
                    About
                </Link>
                <Link className="link" to="/services">
                    Services
                </Link>
            </div>
            <div className="section2">
                {sessionData ? (
                    <Link className="link logout" to="/logout">
                        Logout
                    </Link>
                ) : (
                    <>
                        <Link className="link register" to="/register">
                            Register
                        </Link>
                        <Link className="link login" to="/login">
                            Login
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default React.memo(Header);
