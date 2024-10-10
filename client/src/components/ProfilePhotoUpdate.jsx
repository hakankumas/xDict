import React from "react";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

function ProfilePhotoUpdate({ handleSubmit, handleIconClick }) {
    return (
        <div>
            <form
                className="profile-photo-form"
                id="profile-photo-form"
                encType="multipart/form-data"
            >
                {/* Gizli dosya inputu */}
                <input
                    type="file"
                    className="profile-photo-img-update"
                    id="profile-photo"
                    name="profile-photo"
                    onChange={handleSubmit}
                />
                <FileUploadRoundedIcon
                    className="profile-photo-change-icon"
                    onClick={handleIconClick}
                />
            </form>
        </div>
    );
}

export default React.memo(ProfilePhotoUpdate);
