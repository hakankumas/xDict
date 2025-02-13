import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { Stack, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useCustomSnackBar } from "../hooks/useCustomSnackBar";
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

function ModalSettings({ settingsModal, setSettingsModal }) {
    const { snackBar_success, snackBar_error } = useCustomSnackBar();
    const ls_token = localStorage?.getItem("token");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [aboutme, setAboutme] = useState("");

    const handleUpdate = async () => {
        try {
            const response = await api().post(
                "/user/update",
                {
                    email,
                    telephone,
                    aboutme,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${ls_token}`,
                    },
                }
            );
            snackBar_success();
        } catch (error) {
            snackBar_error();
        }
        setSettingsModal(false);
    };

    const getData = async () => {
        try {
            const response = await api().get("/user/get-user", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${ls_token}`,
                },
            });
            setEmail(response.data.user.email);
            setTelephone(response.data.user.telephone);
            setAboutme(response.data.user.aboutme);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (settingsModal) {
            getData();
        }
    }, [settingsModal]);

    return (
        <Modal
            open={settingsModal}
            onClose={() => setSettingsModal(false)}
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
                            Are you sure you want to update settings?
                        </Typography>
                    </Item>
                    <Item>
                        <TextField
                            label="Email"
                            variant="outlined"
                            sx={{ width: "100%" }}
                            value={email || ""}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Item>
                    <Item>
                        <TextField
                            label="Telephone"
                            variant="outlined"
                            sx={{ width: "100%" }}
                            value={telephone || ""}
                            onChange={(e) => setTelephone(e.target.value)}
                        />
                    </Item>
                    <Item>
                        <TextField
                            label="About Me"
                            variant="outlined"
                            sx={{ width: "100%" }}
                            multiline
                            minRows={3}
                            maxRows={7}
                            value={aboutme || ""}
                            onChange={(e) => setAboutme(e.target.value)}
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
                            onClick={() => setSettingsModal(false)}
                        >
                            Cancel
                        </Button>
                    </Item>
                </Stack>
            </Box>
        </Modal>
    );
}

export default React.memo(ModalSettings);
