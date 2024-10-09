import React from "react";
import { useState } from "react";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

function ProfilePhotoUpdate() {
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const handleIconClick = () => {
        document.getElementById("file-input-icon").click(); // İkona tıklayınca input'u tetikle
    };

    console.log(selectedFile);
    return (
        <>
            {/* Gizli dosya inputu */}
            <input
                id="file-input-icon"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            <FileUploadRoundedIcon
                className="profile-photo-change-icon"
                onClick={handleIconClick}
            />
        </>
    );
}

export default React.memo(ProfilePhotoUpdate);
