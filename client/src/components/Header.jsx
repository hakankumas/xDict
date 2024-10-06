import React, { useState } from "react";
import { Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";

function Header({ sessionData }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    console.log(anchorEl);

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
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? "long-menu" : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                "aria-labelledby": "long-button",
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                                paper: {
                                    style: {
                                        maxHeight: 48 * 4.5,
                                        width: "20ch",
                                    },
                                },
                            }}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                        >
                            <Paper
                                sx={{
                                    width: 320,
                                    maxWidth: "100%",
                                    boxShadow: "none",
                                }}
                            >
                                <MenuList sx={{ p: 0 }}>
                                    <Link className="link_dropdown" to="/info">
                                        <MenuItem onClick={handleClose}>
                                            <ListItemIcon>
                                                <InfoIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Info" />
                                        </MenuItem>
                                    </Link>
                                    <Divider sx={{ my: 0.5 }} />
                                    <Link
                                        className="link_dropdown"
                                        to="/logout"
                                    >
                                        <MenuItem onClick={handleClose}>
                                            <ListItemIcon>
                                                <LogoutIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Logout" />
                                        </MenuItem>
                                    </Link>
                                </MenuList>
                            </Paper>
                        </Menu>
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
