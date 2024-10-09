import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ProfilePhotoUpdate from "./ProfilePhotoUpdate";

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
            <Item className="profile-photo-item">
                <img
                    src="https://randomuser.me/portraits/men/42.jpg"
                    className="profile-photo-img"
                />
                <ProfilePhotoUpdate />
            </Item>
            <Item>
                <h5>@{user.username}</h5>
            </Item>
        </>
    );
}

export default ProfileInfo;
