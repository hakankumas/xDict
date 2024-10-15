import React, { useEffect, useState } from "react";
import api from "../utils/api";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
    fontFamily: "monospace",
    boxShadow: "none",
    backgroundColor: "transparent",
    textAlign: "center",
}));

function UserProfileInfo({ paramUsername }) {
    const ls_token = localStorage.getItem("token");
    const default_pp =
        import.meta.env.VITE_SERVER_URL +
        import.meta.env.VITE_DEFAULT_USER_PROFILE_PHOTO_URL;
    const [userProfilePhoto, setUserProfilePhoto] = useState(default_pp);
    const [db_username, setDBusername] = useState("");
    const [db_aboutme, setDBaboutme] = useState("");

    useEffect(() => {
        if (paramUsername) {
            api()
                .post(
                    "/user/get-username",
                    { username: paramUsername },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${ls_token}`,
                        },
                    }
                )
                .then((res) => {
                    if (res.data.user.pp_path !== null) {
                        setUserProfilePhoto(
                            import.meta.env.VITE_SERVER_URL +
                                res.data.user.pp_path
                        );
                    }
                    setDBusername(res.data.user.username);
                    setDBaboutme(res.data.user.aboutme);
                })
                .catch((err) => {
                    console.log(err);
                    setUserProfilePhoto("");
                    setDBusername("");
                    setDBaboutme("");
                });
        }
    }, [paramUsername]);
    return (
        <>
            <Item className="profile-photo-item">
                <img src={userProfilePhoto} className="profile-photo-img" />
            </Item>
            <Item>
                <h5>@{db_username}</h5>
            </Item>
            {db_aboutme && (
                <Item
                    sx={{
                        marginTop: "5%",
                        textAlign: "justify",
                        boxShadow: "0px 0px 5px 0px gray",
                        borderRadius: "10px",
                        backgroundColor: "whitesmoke",
                        padding: "15px 30px",
                        margin: "20px 15px",
                    }}
                >
                    <h5>{db_aboutme}</h5>
                </Item>
            )}
        </>
    );
}

export default React.memo(UserProfileInfo);
