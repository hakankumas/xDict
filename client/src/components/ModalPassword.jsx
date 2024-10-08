import { useState } from "react";
import axios from "axios";
import { Stack, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "15px",
    boxShadow: "1px 1px 3px 1px black",
    pt: 4,
    px: 4,
    pb: 4,
};
const Item = styled(Paper)(({ theme }) => ({
    fontFamily: "monospace",
    boxShadow: "none",
    backgroundColor: "transparent",
    textAlign: "center",
}));

function ModalPassword({ passwordModal, setPasswordModal }) {
    const { enqueueSnackbar } = useSnackbar();
    const ls_token = localStorage?.getItem("token");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");

    const handleUpdate = async () => {
        if (!newPassword || !confirmPassword || !currentPassword)
            alert("Please fill all the fields");

        setNewPassword(newPassword);
        setConfirmPassword(confirmPassword);
        setCurrentPassword(currentPassword);
        if (newPassword !== confirmPassword)
            return alert("Passwords do not match!");

        const condition = {
            token: ls_token,
            newPassword,
            currentPassword,
        };
        await axios
            .post("http://localhost:3000/user/updatePassword", condition)
            .then(() => {
                setPasswordModal(false);
                setNewPassword("");
                setConfirmPassword("");
                setCurrentPassword("");
                enqueueSnackbar("Password updated successfully!", {
                    variant: "success",
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "right",
                    },
                    autoHideDuration: 1500,
                });
            })
            .catch((err) => {
                if (err.response.data.currentPasswordNotMatch) {
                    return alert("Wrong current password!");
                }
                if (err.response.data.samePasswords) {
                    return alert("Passwords are aldready same!");
                }
            });
    };

    return (
        <Modal
            open={passwordModal}
            onClose={() => {
                setNewPassword("");
                setConfirmPassword("");
                setCurrentPassword("");
                setPasswordModal(false);
            }}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 500, minHeight: 250 }}>
                <Stack spacing={3}>
                    <Item>
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", textAlign: "center" }}
                        >
                            Are you sure you want to update password?
                        </Typography>
                    </Item>
                    <Item>
                        <TextField
                            label="New Password"
                            variant="outlined"
                            sx={{ width: "100%" }}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </Item>
                    <Item>
                        <TextField
                            label="Confirm Password"
                            variant="outlined"
                            sx={{ width: "100%" }}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Item>
                    <Item>
                        <TextField
                            label="Current Password"
                            variant="outlined"
                            sx={{ width: "100%" }}
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                    </Item>
                    <Item
                        sx={{
                            display: "flex",
                            justifyContent: "end",
                            gap: "10px",
                        }}
                    >
                        <Button
                            variant="contained"
                            color="success"
                            onClick={handleUpdate}
                        >
                            Update
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: "gray" }}
                            onClick={() => setPasswordModal(false)}
                        >
                            Cancel
                        </Button>
                    </Item>
                </Stack>
            </Box>
        </Modal>
    );
}

export default ModalPassword;
