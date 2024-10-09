import React from "react";
import { useState } from "react";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

function ProfilePhotoUpdate() {
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        // document.getElementById("profile-photo-form").submit();
    };
    const handleIconClick = () => {
        document.getElementById("profile-photo").click(); // İkona tıklayınca input'u tetikle
    };

    console.log(selectedFile);
    return (
        <div>
            <form
                className="profile-photo-form"
                id="profile-photo-form"
                action="http://localhost:3000/user/pp-update"
                method="POST"
                encType="multipart/form-data"
            >
                {/* Gizli dosya inputu */}
                <input
                    type="file"
                    className="profile-photo-img-update"
                    id="profile-photo"
                    name="profile-photo"
                    // style={{ display: "none" }}
                    onChange={handleFileChange}
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
