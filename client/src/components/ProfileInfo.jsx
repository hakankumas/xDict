import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useState } from "react";
import ProfilePhotoUpdate from "./ProfilePhotoUpdate";

const Item = styled(Paper)(({ theme }) => ({
    fontFamily: "monospace",
    boxShadow: "none",
    backgroundColor: "transparent",
    textAlign: "center",
}));

function ProfileInfo() {
    // console.log("profile info rerendered");
    const ls_token = localStorage.getItem("token");
    const default_pp =
        import.meta.env.VITE_SERVER_URL +
        import.meta.env.VITE_DEFAULT_USER_PROFILE_PHOTO_URL;
    const [userProfilePhoto, setUserProfilePhoto] = useState(default_pp);
    const [dataUsername, setDataUsername] = useState("");
    const handleIconClick = () => {
        document.getElementById("profile-photo").click();
    };

    const handleSubmit = async (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && ls_token) {
            const formData = new FormData();
            formData.append("profile-photo", selectedFile);
            try {
                const response = await axios.post(
                    "http://localhost:3000/user/update-pp",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            Authorization: `Bearer ${ls_token}`,
                        },
                    }
                );
                setUserProfilePhoto(
                    import.meta.env.VITE_SERVER_URL + response.data.user.pp_path
                );
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        }
    };
    const getData = () => {
        axios
            .get("http://localhost:3000/user/get-user", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${ls_token}`,
                },
            })
            .then((response) => {
                if (response.data.user.pp_path) {
                    setUserProfilePhoto(
                        import.meta.env.VITE_SERVER_URL +
                            response.data.user.pp_path
                    );
                }
                setDataUsername(response.data.user.username);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <Item className="profile-photo-item">
                <img src={userProfilePhoto} className="profile-photo-img" />
                <ProfilePhotoUpdate
                    handleSubmit={handleSubmit}
                    handleIconClick={handleIconClick}
                />
            </Item>
            <Item>
                <h5>@{dataUsername}</h5>
            </Item>
        </>
    );
}

// export default ProfileInfo;
export default React.memo(ProfileInfo);
