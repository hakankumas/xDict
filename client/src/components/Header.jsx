import React from "react";
import { Link } from "react-router-dom";
function Header({ sessionData }) {
    // console.log("Header is rendered.");
    return (
        <div className="header">
            {sessionData ? (
                <>
                    <div className="section1">
                        <Link className="link home" to="/user/">
                            xDict
                        </Link>
                        <Link className="link" to="/user/">
                            Home
                        </Link>
                    </div>
                    <div className="section2">
                        <Link className="link logout" to="/logout">
                            Logout
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <div className="section1">
                        <Link className="link home" to="/">
                            xDict
                        </Link>
                        <Link className="link" to="/">
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
                        <>
                            <Link className="link register" to="/register">
                                Register
                            </Link>
                            <Link className="link login" to="/login">
                                Login
                            </Link>
                        </>
                    </div>
                </>
            )}
        </div>
    );
}

export default React.memo(Header);
