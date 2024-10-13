import React, { useEffect, useState } from "react";

import { Stack, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useDispatch } from "react-redux";
import { updatePost } from "../redux/features/post/postSlice";
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

function ModalUpdateMentionItem({ updateModal, setUpdateModal, item }) {
    const { snackBar_success, snackBar_error } = useCustomSnackBar();
    const { _id, topic, content } = item;
    const ls_token = localStorage?.getItem("token");
    const dispatch = useDispatch();
    const [newData, setNewData] = useState(content);

    const handleUpdate = () => {
        try {
            setNewData(newData);
            const condition = {
                _id,
                content: newData,
                token: ls_token,
            };
            dispatch(updatePost(condition));
            snackBar_success();
        } catch (error) {
            snackBar_error();
        }
        setUpdateModal(false);
    };

    return (
        <Modal
            open={updateModal}
            onClose={() => {
                setNewData(content);
                setUpdateModal(false);
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
                            Are you sure you want to update this?
                        </Typography>
                    </Item>
                    <Item>
                        <TextField
                            disabled
                            label="Topic"
                            variant="filled"
                            sx={{ width: "100%" }}
                            value={topic.topic_name}
                        />
                    </Item>
                    <Item>
                        <TextField
                            label="Content"
                            variant="outlined"
                            sx={{ width: "100%" }}
                            multiline
                            minRows={3}
                            maxRows={7}
                            value={newData}
                            onChange={(e) => setNewData(e.target.value)}
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
                            onClick={() => setUpdateModal(false)}
                        >
                            Cancel
                        </Button>
                    </Item>
                </Stack>
            </Box>
        </Modal>
    );
}

export default ModalUpdateMentionItem;
