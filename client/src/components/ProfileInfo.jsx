import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { GrUpdate } from "react-icons/gr";
const Item = styled(Paper)(({ theme }) => ({
    fontFamily: "monospace",
    boxShadow: "none",
    backgroundColor: "transparent",
    textAlign: "center",
}));
function ProfileInfo() {
    const { user } = useSelector((state) => state.auth);
    return (
        <>
            <Item
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                }}
            >
                <img
                    src="https://randomuser.me/portraits/men/42.jpg"
                    style={{
                        borderRadius: "50%",
                        width: "125px",
                        height: "125px",
                    }}
                />
                <GrUpdate
                    className="profile-photo-change-icon"
                    onClick={() => console.log("pp will change!")}
                />
            </Item>
            <Item>
                <h5>@{user.username}</h5>
            </Item>
        </>
    );
}

export default ProfileInfo;
